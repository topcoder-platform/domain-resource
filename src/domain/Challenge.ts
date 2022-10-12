import { Value } from "../dal/models/nosql/PartiQL";
import { Challenge } from "../models/challenge/Challenge";
import { ChallengeSchema } from "../schema/Challenge";

import CoreOperations from "./CoreOperations";

class ChallengeDomain extends CoreOperations<Challenge> {
  protected toEntity(item: { [key: string]: Value }): Challenge {
    return Challenge.fromJSON(item);
  }
}

export default new ChallengeDomain(
  ChallengeSchema.tableName,
  ChallengeSchema.attributes,
  ChallengeSchema.indices
);
