import { relationalClient } from "../../dal/client/relational";
import {
  InsertQuery,
  QueryRequest,
  QueryResponse,
  Value,
} from "../../dal/models/rdb/SQL";

class LegacyResourceInfoDomain {
  constructor(private tableName: string = "resource_info") {}

  public async addResourceInfo(
    resourceId: number,
    resourceInfoTypeId: number,
    value: string
  ) {
    const insertQuery: InsertQuery = {
      table: this.tableName,
      columnValue: [
        {
          column: "resource_id",
          value: this.getIntValue(resourceId),
        },
        {
          column: "resource_info_type_id",
          value: this.getIntValue(resourceInfoTypeId),
        },
        {
          column: "value",
          value: {
            value: {
              $case: "stringValue",
              stringValue: value,
            },
          },
        },
        {
          column: "create_user",
          value: this.getIntValue(88774588),
        },
        {
          column: "modify_user",
          value: this.getIntValue(88774588),
        },
        {
          column: "create_date",
          value: {
            value: {
              $case: "dateValue",
              dateValue: "CURRENT",
            },
          },
        },
        {
          column: "modify_date",
          value: {
            value: {
              $case: "dateValue",
              dateValue: "CURRENT",
            },
          },
        },
      ],
    };

    const queryRequest: QueryRequest = {
      query: {
        query: {
          $case: "insert",
          insert: insertQuery,
        },
      },
    };

    const queryResponse: QueryResponse = await relationalClient.query(
      queryRequest
    );
  }

  private getIntValue(value: number): Value {
    return {
      value: {
        $case: "intValue",
        intValue: value,
      },
    };
  }
}

export default new LegacyResourceInfoDomain();
