import { ContinuousBackupsDescriptionFilterSensitiveLog } from "@aws-sdk/client-dynamodb";
import { noSqlClient } from "../dal/client/nosql";

import {
  Attribute,
  Filter,
  Operator,
  operatorFromJSON,
  QueryRequest,
  QueryResponse,
  Response,
  ReturnValues,
  SelectQuery,
  Value,
} from "../dal/models/nosql/PartiQL";

import {
  FilterValue,
  LookupCriteria,
  ScanCriteria,
  ScanResult,
} from "../models/common/common";
import { Struct } from "../models/google/protobuf/struct";

export type ValueType =
  | "nullValue"
  | "numberValue"
  | "stringValue"
  | "boolValue"
  | "structValue"
  | "listValue";

export type DynamoTableIndex = {
  [key: string]: {
    index: string;
    partitionKey: string;
    sortKey?: string;
  };
};

abstract class CoreOperations<T extends { [key: string]: any }> {
  public constructor(
    private entityName: string,
    private entityAttributes: Attribute[],
    private entityIndexList: DynamoTableIndex
  ) {}

  public async lookup(lookupCriteria: LookupCriteria): Promise<T> {
    const filterValue: Value = this.getFilterValue(lookupCriteria.value!);

    const selectQuery: SelectQuery = {
      table: this.entityName,
      attributes: this.entityAttributes,
      filters: [
        {
          name: lookupCriteria.key,
          operator: Operator.EQUAL,
          value: filterValue!,
        },
      ],
    };

    const queryRequest: QueryRequest = {
      kind: {
        $case: "query",
        query: {
          kind: {
            $case: "select",
            select: selectQuery,
          },
        },
      },
    };

    const queryResponse: QueryResponse = await noSqlClient.query(queryRequest);

    switch (queryResponse.kind?.$case) {
      case "error":
        throw new Error(queryResponse.kind?.error?.message);
      case "response":
        if (queryResponse.kind?.response?.items?.length > 0) {
          return this.toEntity(queryResponse.kind?.response?.items![0]);
        }
    }

    throw new Error("Not Found");
  }

  public async scan(
    scanCriteria: ScanCriteria[],
    nextToken: string | undefined
  ): Promise<ScanResult> {
    let index: string | null = null;

    const filters: Filter[] = scanCriteria.map((criteria) => {
      if (index == null && this.entityIndexList[criteria.key] != null) {
        index = this.entityIndexList[criteria.key].index!;
      }

      return Filter.fromJSON({
        name: criteria.key,
        operator: operatorFromJSON(criteria.operator),
        value: {
          stringValue: criteria.value,
        },
      });
    });

    const queryRequest: QueryRequest = {
      kind: {
        $case: "query",
        query: {
          kind: {
            $case: "select",
            select: {
              table: this.entityName,
              index: index ?? undefined,
              attributes: this.entityAttributes,
              filters,
              nextToken,
            },
          },
        },
      },
    };

    const queryRespose: QueryResponse = await noSqlClient.query(queryRequest);

    if (queryRespose.kind?.$case === "error") {
      throw new Error(queryRespose.kind?.error?.message);
    }

    const response = queryRespose.kind?.response;

    return {
      nextToken: response?.nextToken,
      items: response?.items!,
    };
  }

  public async create(entity: T): Promise<T> {
    const queryRequest: QueryRequest = {
      kind: {
        $case: "query",
        query: {
          kind: {
            $case: "insert",
            insert: {
              table: this.entityName,
              attributes: entity,
            },
          },
        },
      },
    };

    const queryResponse: QueryResponse = await noSqlClient.query(queryRequest);

    if (queryResponse.kind?.$case === "error") {
      throw new Error(queryResponse.kind?.error?.message);
    }

    return entity;
  }

  public async update() {
    // TODO: 2 -> Generic method to call noSql.update
  }

  public async delete(lookupCriteria: LookupCriteria): Promise<T[]> {
    const filterValue: Value = this.getFilterValue(lookupCriteria.value!);

    const queryRequest: QueryRequest = {
      kind: {
        $case: "query",
        query: {
          kind: {
            $case: "delete",
            delete: {
              table: this.entityName,
              filters: [
                {
                  name: lookupCriteria.key,
                  operator: Operator.EQUAL,
                  value: filterValue,
                },
              ],
              returnValues: ReturnValues.ALL_OLD,
            },
          },
        },
      },
    };

    const queryResponse: QueryResponse = await noSqlClient.query(queryRequest);

    if (queryResponse.kind?.$case === "error") {
      throw new Error(queryResponse.kind?.error?.message);
    }

    const response: Response = queryResponse.kind?.response!;

    if (response.items?.length === 0) {
      throw new Error("Not Found");
    }

    return response.items.map((item) => this.toEntity(item));
  }

  private getFilterValue(filterValue: FilterValue): Value {
    let value: Value;

    console.log("filterValue", filterValue);

    switch (filterValue.value?.$case) {
      case "numberValue":
        value = {
          kind: {
            $case: "numberValue",
            numberValue: filterValue.value?.numberValue,
          },
        };
        break;
      case "stringValue":
        value = {
          kind: {
            $case: "stringValue",
            stringValue: filterValue.value?.stringValue,
          },
        };
        break;
      default:
        throw new Error("Lookups are only supported for string and number");
    }

    return value;
  }

  protected abstract toEntity(response: { [key: string]: Value }): T;
}

export default CoreOperations;
