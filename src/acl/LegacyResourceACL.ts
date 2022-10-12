import Challenge from "../domain/Challenge";
import ResourceRole from "../domain/ResourceRole";
import LegacyChallenge from "../domain/legacy/LegacyChallenge";
import LegacyChallengePhase from "../domain/legacy/LegacyChallengePhase";
import LegacyResourceDomain from "../domain/legacy/LegacyResource";
import LegacyResourceInfoDomain from "../domain/legacy/LegacyResourceInfo";

import { CreateResourceInput } from "../models/resource/Resource";
import dayjs from "dayjs";
import ChallengePayment from "../domain/ChallengePayment";

const RESOURCE_TYPE_EXT_REF_ID = 1;
const RESOURCE_TYPE_HANDLE_ID = 2;
const RESOURCE_TYPE_REG_DATE = 6;
const RESOURCE_TYPE_APPEALS_COMPLETED = 13;
const RESOURCE_TYPE_MANUAL_PAYMENTS = 15;

class LegacyResourceACL {
  public static REVIEW_PHASE_ID = 4;

  public async create(payload: CreateResourceInput) {
    // Get legacy challenge id

    const { challengeId, roleId, paymentAmount } = payload;

    const challenge = await Challenge.lookup({
      key: "id",
      value: {
        value: {
          $case: "stringValue",
          stringValue: challengeId,
        },
      },
    });

    const { legacyId } = challenge;

    // Confirm legacy challenge exists

    const challengeExists = await LegacyChallenge.checkChallengeExists(
      parseInt(legacyId)
    );

    // Get Legacy Resource Role Id
    const resourceRole = await ResourceRole.lookup({
      key: "id",
      value: {
        value: {
          $case: "stringValue",
          stringValue: roleId,
        },
      },
    });

    const { legacyId: legacyRoleId } = resourceRole;

    // Get Challenge Phase ID

    const reviewPhaseId = await LegacyChallengePhase.getPhaseId(
      parseInt(legacyId),
      LegacyResourceACL.REVIEW_PHASE_ID
    );

    // Create Legacy Resource
    const userId = parseInt(payload.memberId);
    const legacyResourceId = await LegacyResourceDomain.addResource(
      parseInt(legacyId),
      reviewPhaseId,
      legacyRoleId,
      userId
    );

    const metadata = [
      {
        key: RESOURCE_TYPE_EXT_REF_ID,
        value: userId,
      },
      {
        key: RESOURCE_TYPE_HANDLE_ID,
        value: payload.memberHandle,
      },
      {
        key: RESOURCE_TYPE_REG_DATE,
        value: dayjs().format("MM[.]DD[.]YYYY h:mm A"),
      },
      {
        key: RESOURCE_TYPE_APPEALS_COMPLETED,
        value: "NO",
      },
    ];

    // Create Legacy Resource Info
    for (const { key, value } of metadata) {
      await LegacyResourceInfoDomain.addResourceInfo(
        legacyResourceId,
        key,
        value.toString()
      );
    }

    // Create payment if payment amount is provided

    if (paymentAmount) {
      await LegacyResourceInfoDomain.addResourceInfo(
        legacyResourceId,
        RESOURCE_TYPE_MANUAL_PAYMENTS,
        "true"
      );
    }

    return legacyResourceId;
  }
}

export default new LegacyResourceACL();
