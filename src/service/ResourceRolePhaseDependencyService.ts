import {
  UntypedHandleCall,
  handleUnaryCall,
  ServerUnaryCall,
  sendUnaryData,
} from "@grpc/grpc-js";
import {
  LookupCriteria,
  ScanRequest,
  ScanResult,
} from "../models/common/common";

import {
  CreateResourceRolePhaseDependencyInput,
  ResourceRolePhaseDependency,
  ResourceRolePhaseDependencyList,
} from "../models/resource/ResourceRolePhaseDependency";

import {
  ResourceRolePhaseDependencyServer,
  ResourceRolePhaseDependencyService,
} from "../models/service/ResourceRolePhaseDependency";

import ResourceRolePhaseDependencyDomain from "../domain/ResourceRolePhaseDependency";

class ResourceRolePhaseDependencyServerImpl
  implements ResourceRolePhaseDependencyServer
{
  [name: string]: UntypedHandleCall;

  create: handleUnaryCall<
    CreateResourceRolePhaseDependencyInput,
    ResourceRolePhaseDependency
  > = async (
    call: ServerUnaryCall<
      CreateResourceRolePhaseDependencyInput,
      ResourceRolePhaseDependency
    >,
    callback: sendUnaryData<ResourceRolePhaseDependency>
  ): Promise<void> => {
    const { request: createResourceInput } = call;

    const resource = await ResourceRolePhaseDependencyDomain.create(
      createResourceInput
    );

    callback(null, resource);
  };

  // update: handleUnaryCall<UpdateResourceRequest, MutationResult> = async (
  //   call: ServerUnaryCall<UpdateResourceRequest, MutationResult>,
  //   callback: sendUnaryData<MutationResult>
  // ): Promise<void> => {};

  delete: handleUnaryCall<LookupCriteria, ResourceRolePhaseDependencyList> =
    async (
      call: ServerUnaryCall<LookupCriteria, ResourceRolePhaseDependencyList>,
      callback: sendUnaryData<ResourceRolePhaseDependencyList>
    ): Promise<void> => {
      console.log("call", call);
      const { request: lookupCriteria } = call;

      const deletedItems = await ResourceRolePhaseDependencyDomain.delete(
        lookupCriteria
      );

      callback(null, {
        resourceRolePhaseDependencies: deletedItems,
      });
    };

  scan: handleUnaryCall<ScanRequest, ScanResult> = async (
    call: ServerUnaryCall<ScanRequest, ScanResult>,
    callback: sendUnaryData<ScanResult>
  ): Promise<void> => {
    const {
      request: { scanCriteria, nextToken: inputNextToken },
    } = call;

    const { items, nextToken } = await ResourceRolePhaseDependencyDomain.scan(
      scanCriteria,
      inputNextToken
    );

    callback(null, { items, nextToken });
  };

  lookup: handleUnaryCall<LookupCriteria, ResourceRolePhaseDependency> = async (
    call: ServerUnaryCall<LookupCriteria, ResourceRolePhaseDependency>,
    callback: sendUnaryData<ResourceRolePhaseDependency>
  ): Promise<void> => {
    const { request: lookupCriteria } = call;

    const resource = await ResourceRolePhaseDependencyDomain.lookup(
      lookupCriteria
    );

    callback(null, resource);
  };
}

export {
  ResourceRolePhaseDependencyServerImpl as ResourceRolePhaseDependencyServer,
  ResourceRolePhaseDependencyService,
};
