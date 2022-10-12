import { relationalClient } from "../../dal/client/relational";
import {
  ColumnType,
  InsertQuery,
  Operator,
  QueryRequest,
  QueryResponse,
  Value,
} from "../../dal/models/rdb/SQL";

class LegacyResourceDomain {
  constructor(
    private tableName: string = "resource",
    private idGenerator = {
      sequenceName: "resource_id_seq",
      sequenceColumn: "resource_id",
    }
  ) {}

  public async addResource(
    challengeId: number,
    challengePhaseId: number,
    resourceRoleId: number,
    memberId: number
  ) {
    const insertQuery: InsertQuery = {
      table: this.tableName,
      idColumn: this.idGenerator.sequenceColumn,
      idSequence: this.idGenerator.sequenceName,
      columnValue: [
        {
          column: "project_id",
          value: this.getIntValue(challengeId),
        },
        {
          column: "project_phase_id",
          value: this.getIntValue(challengePhaseId),
        },
        {
          column: "resource_role_id",
          value: this.getIntValue(resourceRoleId),
        },
        {
          column: "user_id",
          value: this.getIntValue(memberId),
        },
        {
          column: "create_user",
          value: this.getIntValue(memberId),
        },
        {
          column: "modify_user",
          value: this.getIntValue(memberId),
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

    if (queryResponse.result?.$case == "insertResult") {
      return queryResponse.result.insertResult.lastInsertId;
    }

    return -1;
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

export default new LegacyResourceDomain();
