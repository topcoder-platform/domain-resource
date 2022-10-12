import { handleUnaryCall, sendUnaryData, ServerUnaryCall } from "@grpc/grpc-js";
import { LookupCriteria } from "../models/common/Common";
import {
  LegacyChallengeId,
  LegacyChallengeList,
} from "../models/legacy/LegacyChallenge";
import {
  CheckChallengeExistsResponse,
  LegacyChallengeServer,
  LegacyChallengeService,
} from "../models/service/LegacyChallenge";

import LegacyChallengeDomain from "../domain/legacy/LegacyChallenge";

class LegacyChallengeServerImpl implements LegacyChallengeServer {
  [name: string]: import("@grpc/grpc-js").UntypedHandleCall;

  checkChallengeExists: handleUnaryCall<
    LegacyChallengeId,
    CheckChallengeExistsResponse
  > = async (
    call: ServerUnaryCall<LegacyChallengeId, CheckChallengeExistsResponse>,
    callback: sendUnaryData<CheckChallengeExistsResponse>
  ) => {
    callback(null, {
      exists: await LegacyChallengeDomain.checkChallengeExists(
        call.request.legacyChallengeId
      ),
    });
  };

  lookup: handleUnaryCall<LookupCriteria, LegacyChallengeList> = async (
    call: ServerUnaryCall<LookupCriteria, LegacyChallengeList>,
    callback: sendUnaryData<LegacyChallengeList>
  ) => {
    callback(null, {
      legacyChallenges: await LegacyChallengeDomain.lookup(call.request),
    });
  };
}

export {
  LegacyChallengeServerImpl as LegacyChallengeServer,
  LegacyChallengeService,
};
