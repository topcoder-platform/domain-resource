import IdGenerator from "../helpers/IdGenerator";

import { Value } from "../dal/models/nosql/PartiQL";
import { CreateResourceInput, Resource } from "../models/resource/Resource";
import { ResourceSchema } from "../schema/Resource";

import CoreOperations from "./CoreOperations";
import LegacyResourceACL from "../acl/LegacyResourceACL";
import ChallengePayment from "./ChallengePayment";

const LEGACY_REVIEWER_CHALLENGE_PAYMENT_TYPE = 3;

class ResourceDomain extends CoreOperations<Resource> {
  protected toEntity(item: { [key: string]: Value }): Resource {
    return Resource.fromJSON(item);
  }

  public async create(payload: CreateResourceInput): Promise<Resource> {
    const id = IdGenerator.generateUUID();

    // -- Begin Anti-Corruption Layer

    const legacyId = await LegacyResourceACL.create(payload);

    // -- End Anti-Corruption Layer

    if (payload.paymentAmount) {
      await ChallengePayment.createPayment(
        legacyId,
        payload.paymentAmount,
        LEGACY_REVIEWER_CHALLENGE_PAYMENT_TYPE
      );
    }

    const created = new Date().getTime();
    const updated = created;

    const createdBy = "system";
    const updatedBy = "system";

    return super.create({
      ...payload,
      id,
      legacyId,
      created,
      updated,
      createdBy,
      updatedBy,
    });
  }
}

export default new ResourceDomain(
  ResourceSchema.tableName,
  ResourceSchema.attributes,
  ResourceSchema.indices
);
