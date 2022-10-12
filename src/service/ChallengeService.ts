import {
  UntypedHandleCall,
  handleUnaryCall,
  ServerUnaryCall,
  sendUnaryData,
} from "@grpc/grpc-js";

import { ScanRequest, ScanResult } from "../models/common/common";

import { ChallengeServer, ChallengeService } from "../models/service/Challenge";
import ChallengeDomain from "../domain/Challenge";

class ChallengeServerImpl implements ChallengeServer {
  [name: string]: UntypedHandleCall;

  scan: handleUnaryCall<ScanRequest, ScanResult> = async (
    call: ServerUnaryCall<ScanRequest, ScanResult>,
    callback: sendUnaryData<ScanResult>
  ): Promise<void> => {
    const {
      request: { scanCriteria, nextToken: inputNextToken },
    } = call;

    const { items, nextToken } = await ChallengeDomain.scan(
      scanCriteria,
      inputNextToken
    );

    callback(null, { items, nextToken });
  };
}

export { ChallengeServerImpl as ChallengeServer, ChallengeService };
