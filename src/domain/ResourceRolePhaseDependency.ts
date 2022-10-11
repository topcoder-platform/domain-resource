import IdGenerator from "../helpers/IdGenerator";

import { ResourceRolePhaseDependencySchema } from "../schema/ResourceRolePhaseDependency";
import {
  CreateResourceRolePhaseDependencyInput,
  ResourceRolePhaseDependency,
} from "../models/resource/ResourceRolePhaseDependency";
import { Value } from "../dal/models/nosql/PartiQL";

import CoreOperations from "./CoreOperations";

class ResourceRolePhaseDependencyDomain extends CoreOperations<ResourceRolePhaseDependency> {
  protected toEntity(entity: {
    [key: string]: Value;
  }): ResourceRolePhaseDependency {
    return ResourceRolePhaseDependency.fromJSON(entity);
  }

  public create(
    payload: CreateResourceRolePhaseDependencyInput
  ): Promise<ResourceRolePhaseDependency> {
    const id = IdGenerator.generateUUID();

    return super.create({
      ...payload,
      id,
    });
  }
}

export default new ResourceRolePhaseDependencyDomain(
  ResourceRolePhaseDependencySchema.tableName,
  ResourceRolePhaseDependencySchema.attributes,
  ResourceRolePhaseDependencySchema.indices
);
