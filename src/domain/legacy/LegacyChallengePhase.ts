import { relationalClient } from "../../dal/client/relational";
import {
  ColumnType,
  Operator,
  QueryRequest,
  QueryResponse,
} from "../../dal/models/rdb/SQL";

class LegacyChallengePhaseDomain {
  constructor(private tableName: string = "project_phase") {}

  public async getPhaseId(
    legacyChallengeId: number,
    phaseTypeId: number
  ): Promise<number> {
    const queryRequest: QueryRequest = {
      query: {
        query: {
          $case: "select",
          select: {
            table: this.tableName,
            column: [
              {
                name: "project_phase_id",
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
              {
                key: "phase_type_id",
                operator: Operator.EQUAL,
                value: {
                  value: {
                    $case: "intValue",
                    intValue: phaseTypeId,
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
      const value = rows[0].values!.project_phase_id!.value!;
      if (value.$case == "intValue") {
        return Promise.resolve(value.intValue);
      }
    }

    return Promise.resolve(-1);
  }
}

export default new LegacyChallengePhaseDomain();
