import "source-map-support/register";
import * as dotenv from "dotenv";

dotenv.config();

import * as path from "path";

import { Server, ServerCredentials } from "@grpc/grpc-js";
import { addReflection } from "grpc-server-reflection";
import { ResourceServer, ResourceService } from "./service/ResourceService";
import {
  ResourceRoleServer,
  ResourceRoleService,
} from "./service/ResourceRoleService";
import {
  ResourceRolePhaseDependencyServer,
  ResourceRolePhaseDependencyService,
} from "./service/ResourceRolePhaseDependencyService";

const { GRPC_SERVER_HOST = "", GRPC_SERVER_PORT = 9091 } = process.env;

const server = new Server({
  "grpc.max_send_message_length": -1,
  "grpc.max_receive_message_length": -1,
});

addReflection(server, path.join(__dirname, "../reflections/reflection.bin"));

server.addService(ResourceService, new ResourceServer());
server.addService(ResourceRoleService, new ResourceRoleServer());
server.addService(
  ResourceRolePhaseDependencyService,
  new ResourceRolePhaseDependencyServer()
);

server.bindAsync(
  `${GRPC_SERVER_HOST}:${GRPC_SERVER_PORT}`,
  ServerCredentials.createInsecure(),
  (err: Error | null, bindPort: number) => {
    if (err) {
      throw err;
    }

    console.info(
      `gRPC:Server running at: ${GRPC_SERVER_HOST}:${bindPort}`,
      new Date().toLocaleString()
    );
    server.start();
  }
);
