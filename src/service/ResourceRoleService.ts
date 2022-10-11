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
  CreateResourceRoleInput,
  ResourceRole,
  ResourceRoleList,
  UpdateResourceRoleInput,
} from "../models/resource/ResourceRole";

import {
  ResourceRoleServer,
  ResourceRoleService,
} from "../models/service/ResourceRole";

import ResourceRoleDomain from "../domain/ResourceRole";

class ResourceRoleServerImpl implements ResourceRoleServer {
  [name: string]: UntypedHandleCall;

  create: handleUnaryCall<CreateResourceRoleInput, ResourceRole> = async (
    call: ServerUnaryCall<CreateResourceRoleInput, ResourceRole>,
    callback: sendUnaryData<ResourceRole>
  ): Promise<void> => {
    const { request: createResourceInput } = call;

    const resource = await ResourceRoleDomain.create(createResourceInput);

    callback(null, resource);
  };

  update: handleUnaryCall<UpdateResourceRoleInput, ResourceRoleList> = async (
    call: ServerUnaryCall<UpdateResourceRoleInput, ResourceRoleList>,
    callback: sendUnaryData<ResourceRoleList>
  ): Promise<void> => {
    // TODO:
    const { id, payload } = call.request;
    const updatedResources = await ResourceRoleDomain.updateResourceRole(
      id,
      payload!
    );
    callback(null, {
      resourceRoles: updatedResources,
    });
  };

  delete: handleUnaryCall<LookupCriteria, ResourceRoleList> = async (
    call: ServerUnaryCall<LookupCriteria, ResourceRoleList>,
    callback: sendUnaryData<ResourceRoleList>
  ): Promise<void> => {
    const { request: lookupCriteria } = call;

    const deletedResources = await ResourceRoleDomain.delete(lookupCriteria);

    callback(null, {
      resourceRoles: deletedResources,
    });
  };

  scan: handleUnaryCall<ScanRequest, ScanResult> = async (
    call: ServerUnaryCall<ScanRequest, ScanResult>,
    callback: sendUnaryData<ScanResult>
  ): Promise<void> => {
    const {
      request: { scanCriteria, nextToken: inputNextToken },
    } = call;

    const { items, nextToken } = await ResourceRoleDomain.scan(
      scanCriteria,
      inputNextToken
    );

    callback(null, { items, nextToken });
  };

  lookup: handleUnaryCall<LookupCriteria, ResourceRole> = async (
    call: ServerUnaryCall<LookupCriteria, ResourceRole>,
    callback: sendUnaryData<ResourceRole>
  ): Promise<void> => {
    const { request: lookupCriteria } = call;

    const item = await ResourceRoleDomain.lookup(lookupCriteria);
    console.log("item", item);

    callback(null, item);
  };
}

export { ResourceRoleServerImpl as ResourceRoleServer, ResourceRoleService };
