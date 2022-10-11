import IdGenerator from "../helpers/IdGenerator";
import CoreOperations from "./CoreOperations";

import { Value } from "../dal/models/nosql/PartiQL";
import { ResourceRoleSchema } from "../schema/ResourceRole";
import {
  CreateResourceRoleInput,
  ResourceRole,
  ResourceRoleList,
  UpdateResourceRoleInput,
  UpdateResourceRoleInput_Payload,
} from "../models/resource/ResourceRole";
import { ResourceList } from "../models/resource/Resource";

class ResourceRoleDomain extends CoreOperations<ResourceRole> {
  protected toEntity(entity: { [key: string]: Value }): ResourceRole {
    return ResourceRole.fromJSON(entity);
  }

  public create(payload: CreateResourceRoleInput): Promise<ResourceRole> {
    const id = IdGenerator.generateUUID();
    const legacyId = 1234567;
    const nameLower = payload.name.toLowerCase();

    return super.create({
      ...payload,
      id,
      legacyId,
      nameLower,
    });
  }

  public updateResourceRole(
    id: string,
    payload: UpdateResourceRoleInput_Payload
  ): Promise<ResourceRole[]> {
    // TODO: Step 1
    // Covert to generic payload
    // Invoke coreoperations.update

    return Promise.resolve([] as ResourceRole[]);
  }
}

export default new ResourceRoleDomain(
  ResourceRoleSchema.tableName,
  ResourceRoleSchema.attributes,
  ResourceRoleSchema.indices
);
