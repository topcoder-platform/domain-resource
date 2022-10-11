import {
  handleUnaryCall,
  sendUnaryData,
  ServerUnaryCall,
  UntypedHandleCall,
} from "@grpc/grpc-js";

import {
  LookupCriteria,
  ScanRequest,
  ScanResult,
} from "../models/common/common";
import {
  CreateResourceInput,
  Resource,
  ResourceList,
} from "../models/resource/Resource";

import { ResourceService, ResourceServer } from "../models/service/Resource";

import ResourceDomain from "../domain/Resource";

class ResourceServerImpl implements ResourceServer {
  [name: string]: UntypedHandleCall;

  create: handleUnaryCall<CreateResourceInput, Resource> = async (
    call: ServerUnaryCall<CreateResourceInput, Resource>,
    callback: sendUnaryData<Resource>
  ): Promise<void> => {
    const { request: createResourceInput } = call;

    const resource = await ResourceDomain.create(createResourceInput);

    callback(null, resource);
  };

  // update: handleUnaryCall<UpdateResourceRequest, MutationResult> = async (
  //   call: ServerUnaryCall<UpdateResourceRequest, MutationResult>,
  //   callback: sendUnaryData<MutationResult>
  // ): Promise<void> => {};

  delete: handleUnaryCall<LookupCriteria, ResourceList> = async (
    call: ServerUnaryCall<LookupCriteria, ResourceList>,
    callback: sendUnaryData<ResourceList>
  ): Promise<void> => {
    const { request: lookupCriteria } = call;

    const deletedResources = await ResourceDomain.delete(lookupCriteria);

    callback(null, {
      resources: deletedResources,
    });
  };

  scan: handleUnaryCall<ScanRequest, ScanResult> = async (
    call: ServerUnaryCall<ScanRequest, ScanResult>,
    callback: sendUnaryData<ScanResult>
  ): Promise<void> => {
    const {
      request: { scanCriteria, nextToken: inputNextToken },
    } = call;

    const { items, nextToken } = await ResourceDomain.scan(
      scanCriteria,
      inputNextToken
    );

    callback(null, { items, nextToken });
  };

  lookup: handleUnaryCall<LookupCriteria, Resource> = async (
    call: ServerUnaryCall<LookupCriteria, Resource>,
    callback: sendUnaryData<Resource>
  ): Promise<void> => {
    const { request: lookupCriteria } = call;

    const resource = await ResourceDomain.lookup(lookupCriteria);

    callback(null, resource);
  };
}

export { ResourceServerImpl as ResourceServer, ResourceService };
