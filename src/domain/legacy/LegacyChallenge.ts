import { relationalClient } from "../../dal/client/relational";
import {
  ColumnType,
  Operator,
  QueryRequest,
  QueryResponse,
} from "../../dal/models/rdb/SQL";
import { LookupCriteria } from "../../models/common/common";
import { LegacyChallenge } from "../../models/legacy/LegacyChallenge";

class LegacyChallengeDomain {
  constructor(private tableName: string = "project") {}

  public async lookup(
    lookupCriteria: LookupCriteria
  ): Promise<LegacyChallenge[]> {
    const queryRequest: QueryRequest = {
      query: {
        query: {
          $case: "select",
          select: {
            table: this.tableName,
            column: [
              {
                name: "project_id",
                type: ColumnType.INT,
              },
            ],
            where: [
              {
                key: "project_id",
                operator: Operator.EQUAL,
                value: {
                  value: {
                    $case: "intValue",
                    intValue: 123,
                  },
                },
              },
            ],
            groupBy: [],
            orderBy: [],
            limit: 1,
            offset: 0,
          },
        },
      },
    };

    const queryResponse: QueryResponse = await relationalClient.query(
      queryRequest
    );

    if (queryResponse.result?.$case == "selectResult") {
      const rows = queryResponse.result.selectResult.rows;
      return rows.map((row) => LegacyChallenge.fromJSON(row.values));
    }

    return [];
  }

  public async checkChallengeExists(
    legacyChallengeId: number
  ): Promise<boolean> {
    const queryRequest: QueryRequest = {
      query: {
        query: {
          $case: "select",
          select: {
            table: this.tableName,
            column: [
              {
                name: "project_id",
                type: ColumnType.INT,
              },
            ],
            where: [
              {
                key: "project_id",
                operator: Operator.EQUAL,
                value: {
                  value: {
                    $case: "intValue",
                    intValue: legacyChallengeId,
                  },
                },
              },
            ],
            groupBy: [],
            orderBy: [],
            limit: 1,
            offset: 0,
          },
        },
      },
    };

    const queryResponse: QueryResponse = await relationalClient.query(
      queryRequest
    );

    if (queryResponse.result?.$case == "selectResult") {
      const rows = queryResponse.result.selectResult.rows;
      return Promise.resolve(rows.length > 0);
    }

    return Promise.resolve(false);
  }
}

export default new LegacyChallengeDomain();
