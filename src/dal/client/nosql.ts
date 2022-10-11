const { GRPC_NOSQL_SERVER_HOST, GRPC_NOSQL_SERVER_PORT } = process.env;

import "source-map-support/register";

import { credentials, Metadata } from "@grpc/grpc-js";
import { promisify } from "util";

import {
  PartiQLQueryClient,
  QueryRequest,
  QueryResponse,
} from "../models/nosql/PartiQL";

class NoSQLClient {
  // https://github.com/grpc/grpc/blob/master/doc/keepalive.md
  // https://cloud.ibm.com/docs/blockchain-multicloud?topic=blockchain-multicloud-best-practices-app#best-practices-app-connections
  private readonly client: PartiQLQueryClient = new PartiQLQueryClient(
    `${GRPC_NOSQL_SERVER_HOST}:${GRPC_NOSQL_SERVER_PORT}`, // 5051
    credentials.createInsecure(),
    {
      "grpc.keepalive_time_ms": 120000,
      "grpc.http2.min_time_between_pings_ms": 120000,
      "grpc.keepalive_timeout_ms": 20000,
      "grpc.http2.max_pings_without_data": 0,
      "grpc.keepalive_permit_without_calls": 1,
    }
  );

  public async query(
    param: QueryRequest,
    metadata: Metadata = new Metadata()
  ): Promise<QueryResponse> {
    return promisify<QueryRequest, Metadata, QueryResponse>(
      this.client.query.bind(this.client)
    )(param, metadata);
  }
}

export const noSqlClient = new NoSQLClient();
