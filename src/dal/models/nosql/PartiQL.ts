/* eslint-disable */
import {
  CallOptions,
  ChannelCredentials,
  ChannelOptions,
  Client,
  ClientUnaryCall,
  handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { ListValue, NullValue, nullValueFromJSON, nullValueToJSON, Struct } from "./google/protobuf/struct";

export enum DataType {
  BOOLEAN = 0,
  BINARY = 1,
  LIST = 2,
  MAP = 3,
  NULL = 4,
  NUMBER = 5,
  NUMBER_SET = 6,
  STRING = 7,
  STRING_SET = 8,
  UNRECOGNIZED = -1,
}

export function dataTypeFromJSON(object: any): DataType {
  switch (object) {
    case 0:
    case "BOOLEAN":
      return DataType.BOOLEAN;
    case 1:
    case "BINARY":
      return DataType.BINARY;
    case 2:
    case "LIST":
      return DataType.LIST;
    case 3:
    case "MAP":
      return DataType.MAP;
    case 4:
    case "NULL":
      return DataType.NULL;
    case 5:
    case "NUMBER":
      return DataType.NUMBER;
    case 6:
    case "NUMBER_SET":
      return DataType.NUMBER_SET;
    case 7:
    case "STRING":
      return DataType.STRING;
    case 8:
    case "STRING_SET":
      return DataType.STRING_SET;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DataType.UNRECOGNIZED;
  }
}

export function dataTypeToJSON(object: DataType): string {
  switch (object) {
    case DataType.BOOLEAN:
      return "BOOLEAN";
    case DataType.BINARY:
      return "BINARY";
    case DataType.LIST:
      return "LIST";
    case DataType.MAP:
      return "MAP";
    case DataType.NULL:
      return "NULL";
    case DataType.NUMBER:
      return "NUMBER";
    case DataType.NUMBER_SET:
      return "NUMBER_SET";
    case DataType.STRING:
      return "STRING";
    case DataType.STRING_SET:
      return "STRING_SET";
    case DataType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Operator {
  EQUAL = 0,
  NOT_EQUAL = 1,
  GREATER_THAN = 2,
  GREATER_THAN_OR_EQUAL = 3,
  LESS_THAN = 4,
  LESS_THAN_OR_EQUAL = 5,
  AND = 6,
  BETWEEN = 7,
  IN = 8,
  IS = 9,
  NOT = 10,
  OR = 11,
  UNRECOGNIZED = -1,
}

export function operatorFromJSON(object: any): Operator {
  switch (object) {
    case 0:
    case "EQUAL":
      return Operator.EQUAL;
    case 1:
    case "NOT_EQUAL":
      return Operator.NOT_EQUAL;
    case 2:
    case "GREATER_THAN":
      return Operator.GREATER_THAN;
    case 3:
    case "GREATER_THAN_OR_EQUAL":
      return Operator.GREATER_THAN_OR_EQUAL;
    case 4:
    case "LESS_THAN":
      return Operator.LESS_THAN;
    case 5:
    case "LESS_THAN_OR_EQUAL":
      return Operator.LESS_THAN_OR_EQUAL;
    case 6:
    case "AND":
      return Operator.AND;
    case 7:
    case "BETWEEN":
      return Operator.BETWEEN;
    case 8:
    case "IN":
      return Operator.IN;
    case 9:
    case "IS":
      return Operator.IS;
    case 10:
    case "NOT":
      return Operator.NOT;
    case 11:
    case "OR":
      return Operator.OR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Operator.UNRECOGNIZED;
  }
}

export function operatorToJSON(object: Operator): string {
  switch (object) {
    case Operator.EQUAL:
      return "EQUAL";
    case Operator.NOT_EQUAL:
      return "NOT_EQUAL";
    case Operator.GREATER_THAN:
      return "GREATER_THAN";
    case Operator.GREATER_THAN_OR_EQUAL:
      return "GREATER_THAN_OR_EQUAL";
    case Operator.LESS_THAN:
      return "LESS_THAN";
    case Operator.LESS_THAN_OR_EQUAL:
      return "LESS_THAN_OR_EQUAL";
    case Operator.AND:
      return "AND";
    case Operator.BETWEEN:
      return "BETWEEN";
    case Operator.IN:
      return "IN";
    case Operator.IS:
      return "IS";
    case Operator.NOT:
      return "NOT";
    case Operator.OR:
      return "OR";
    case Operator.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Error {
  DATABASE_ERROR = 0,
  INVALID_ARGUMENT = 1,
  INVALID_QUERY = 2,
  NOT_FOUND = 3,
  UNAUTHENTICATED = 4,
  UNAUTHORIZED = 5,
  UNKNOWN = 6,
  UNRECOGNIZED = -1,
}

export function errorFromJSON(object: any): Error {
  switch (object) {
    case 0:
    case "DATABASE_ERROR":
      return Error.DATABASE_ERROR;
    case 1:
    case "INVALID_ARGUMENT":
      return Error.INVALID_ARGUMENT;
    case 2:
    case "INVALID_QUERY":
      return Error.INVALID_QUERY;
    case 3:
    case "NOT_FOUND":
      return Error.NOT_FOUND;
    case 4:
    case "UNAUTHENTICATED":
      return Error.UNAUTHENTICATED;
    case 5:
    case "UNAUTHORIZED":
      return Error.UNAUTHORIZED;
    case 6:
    case "UNKNOWN":
      return Error.UNKNOWN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Error.UNRECOGNIZED;
  }
}

export function errorToJSON(object: Error): string {
  switch (object) {
    case Error.DATABASE_ERROR:
      return "DATABASE_ERROR";
    case Error.INVALID_ARGUMENT:
      return "INVALID_ARGUMENT";
    case Error.INVALID_QUERY:
      return "INVALID_QUERY";
    case Error.NOT_FOUND:
      return "NOT_FOUND";
    case Error.UNAUTHENTICATED:
      return "UNAUTHENTICATED";
    case Error.UNAUTHORIZED:
      return "UNAUTHORIZED";
    case Error.UNKNOWN:
      return "UNKNOWN";
    case Error.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum UpdateAction {
  SET = 0,
  REMOVE = 1,
  UNRECOGNIZED = -1,
}

export function updateActionFromJSON(object: any): UpdateAction {
  switch (object) {
    case 0:
    case "SET":
      return UpdateAction.SET;
    case 1:
    case "REMOVE":
      return UpdateAction.REMOVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UpdateAction.UNRECOGNIZED;
  }
}

export function updateActionToJSON(object: UpdateAction): string {
  switch (object) {
    case UpdateAction.SET:
      return "SET";
    case UpdateAction.REMOVE:
      return "REMOVE";
    case UpdateAction.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum UpdateType {
  VALUE = 0,
  SET_ADD = 1,
  SET_DELETE = 2,
  LIST_APPEND = 3,
  UNRECOGNIZED = -1,
}

export function updateTypeFromJSON(object: any): UpdateType {
  switch (object) {
    case 0:
    case "VALUE":
      return UpdateType.VALUE;
    case 1:
    case "SET_ADD":
      return UpdateType.SET_ADD;
    case 2:
    case "SET_DELETE":
      return UpdateType.SET_DELETE;
    case 3:
    case "LIST_APPEND":
      return UpdateType.LIST_APPEND;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UpdateType.UNRECOGNIZED;
  }
}

export function updateTypeToJSON(object: UpdateType): string {
  switch (object) {
    case UpdateType.VALUE:
      return "VALUE";
    case UpdateType.SET_ADD:
      return "SET_ADD";
    case UpdateType.SET_DELETE:
      return "SET_DELETE";
    case UpdateType.LIST_APPEND:
      return "LIST_APPEND";
    case UpdateType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ReturnValues {
  ALL_NEW = 0,
  MODIFIED_NEW = 1,
  ALL_OLD = 2,
  MODIFIED_OLD = 3,
  UNRECOGNIZED = -1,
}

export function returnValuesFromJSON(object: any): ReturnValues {
  switch (object) {
    case 0:
    case "ALL_NEW":
      return ReturnValues.ALL_NEW;
    case 1:
    case "MODIFIED_NEW":
      return ReturnValues.MODIFIED_NEW;
    case 2:
    case "ALL_OLD":
      return ReturnValues.ALL_OLD;
    case 3:
    case "MODIFIED_OLD":
      return ReturnValues.MODIFIED_OLD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ReturnValues.UNRECOGNIZED;
  }
}

export function returnValuesToJSON(object: ReturnValues): string {
  switch (object) {
    case ReturnValues.ALL_NEW:
      return "ALL_NEW";
    case ReturnValues.MODIFIED_NEW:
      return "MODIFIED_NEW";
    case ReturnValues.ALL_OLD:
      return "ALL_OLD";
    case ReturnValues.MODIFIED_OLD:
      return "MODIFIED_OLD";
    case ReturnValues.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface StringSet {
  values: string[];
}

export interface NumberSet {
  values: number[];
}

export interface Value {
  kind?:
    | { $case: "boolean"; boolean: boolean }
    | { $case: "binary"; binary: Buffer }
    | { $case: "listValue"; listValue: Array<any> }
    | { $case: "mapValue"; mapValue: { [key: string]: any } }
    | { $case: "nullValue"; nullValue: NullValue }
    | { $case: "numberValue"; numberValue: number }
    | { $case: "numberSetValue"; numberSetValue: NumberSet }
    | { $case: "stringValue"; stringValue: string }
    | { $case: "stringSetValue"; stringSetValue: StringSet };
}

export interface Attribute {
  name: string;
  type: DataType;
}

export interface Filter {
  name: string;
  operator: Operator;
  value?: Value;
}

export interface SelectQuery {
  table: string;
  index?: string | undefined;
  attributes: Attribute[];
  filters: Filter[];
  nextToken?: string | undefined;
}

export interface InsertQuery {
  table: string;
  attributes?: { [key: string]: any };
}

export interface UpdateOperation {
  action: UpdateAction;
  attribute: string;
  type: UpdateType;
  value?: Value;
}

export interface UpdateQuery {
  table: string;
  updates: UpdateOperation[];
  filters: Filter[];
  returnValues?: ReturnValues | undefined;
}

export interface DeleteQuery {
  table: string;
  filters: Filter[];
  returnValues?: ReturnValues | undefined;
}

export interface ReadQuery {
  query: SelectQuery[];
}

export interface WriteQuery {
  kind?: { $case: "insert"; insert: InsertQuery } | { $case: "update"; update: UpdateQuery } | {
    $case: "delete";
    delete: DeleteQuery;
  };
}

export interface BulkWriteQuery {
  queries: WriteQuery[];
}

export interface BulkQuery {
  kind?: { $case: "read"; read: ReadQuery } | { $case: "BulkWriteQuery"; BulkWriteQuery: WriteQuery };
}

export interface Query {
  kind?: { $case: "select"; select: SelectQuery } | { $case: "insert"; insert: InsertQuery } | {
    $case: "update";
    update: UpdateQuery;
  } | { $case: "delete"; delete: DeleteQuery };
}

export interface Response {
  items: { [key: string]: any }[];
  nextToken?: string | undefined;
}

export interface QueryRequest {
  kind?: { $case: "query"; query: Query } | { $case: "queries"; queries: BulkQuery };
}

export interface ResponseError {
  message: string;
}

export interface QueryResponse {
  kind?: { $case: "response"; response: Response } | { $case: "error"; error: ResponseError };
}

function createBaseStringSet(): StringSet {
  return { values: [] };
}

export const StringSet = {
  encode(message: StringSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.values) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StringSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStringSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.values.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StringSet {
    return { values: Array.isArray(object?.values) ? object.values.map((e: any) => String(e)) : [] };
  },

  toJSON(message: StringSet): unknown {
    const obj: any = {};
    if (message.values) {
      obj.values = message.values.map((e) => e);
    } else {
      obj.values = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StringSet>, I>>(object: I): StringSet {
    const message = createBaseStringSet();
    message.values = object.values?.map((e) => e) || [];
    return message;
  },
};

function createBaseNumberSet(): NumberSet {
  return { values: [] };
}

export const NumberSet = {
  encode(message: NumberSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.values) {
      writer.double(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NumberSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNumberSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.values.push(reader.double());
            }
          } else {
            message.values.push(reader.double());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NumberSet {
    return { values: Array.isArray(object?.values) ? object.values.map((e: any) => Number(e)) : [] };
  },

  toJSON(message: NumberSet): unknown {
    const obj: any = {};
    if (message.values) {
      obj.values = message.values.map((e) => e);
    } else {
      obj.values = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NumberSet>, I>>(object: I): NumberSet {
    const message = createBaseNumberSet();
    message.values = object.values?.map((e) => e) || [];
    return message;
  },
};

function createBaseValue(): Value {
  return { kind: undefined };
}

export const Value = {
  encode(message: Value, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.kind?.$case === "boolean") {
      writer.uint32(8).bool(message.kind.boolean);
    }
    if (message.kind?.$case === "binary") {
      writer.uint32(18).bytes(message.kind.binary);
    }
    if (message.kind?.$case === "listValue") {
      ListValue.encode(ListValue.wrap(message.kind.listValue), writer.uint32(26).fork()).ldelim();
    }
    if (message.kind?.$case === "mapValue") {
      Struct.encode(Struct.wrap(message.kind.mapValue), writer.uint32(34).fork()).ldelim();
    }
    if (message.kind?.$case === "nullValue") {
      writer.uint32(40).int32(message.kind.nullValue);
    }
    if (message.kind?.$case === "numberValue") {
      writer.uint32(49).double(message.kind.numberValue);
    }
    if (message.kind?.$case === "numberSetValue") {
      NumberSet.encode(message.kind.numberSetValue, writer.uint32(58).fork()).ldelim();
    }
    if (message.kind?.$case === "stringValue") {
      writer.uint32(66).string(message.kind.stringValue);
    }
    if (message.kind?.$case === "stringSetValue") {
      StringSet.encode(message.kind.stringSetValue, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Value {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kind = { $case: "boolean", boolean: reader.bool() };
          break;
        case 2:
          message.kind = { $case: "binary", binary: reader.bytes() as Buffer };
          break;
        case 3:
          message.kind = { $case: "listValue", listValue: ListValue.unwrap(ListValue.decode(reader, reader.uint32())) };
          break;
        case 4:
          message.kind = { $case: "mapValue", mapValue: Struct.unwrap(Struct.decode(reader, reader.uint32())) };
          break;
        case 5:
          message.kind = { $case: "nullValue", nullValue: reader.int32() as any };
          break;
        case 6:
          message.kind = { $case: "numberValue", numberValue: reader.double() };
          break;
        case 7:
          message.kind = { $case: "numberSetValue", numberSetValue: NumberSet.decode(reader, reader.uint32()) };
          break;
        case 8:
          message.kind = { $case: "stringValue", stringValue: reader.string() };
          break;
        case 9:
          message.kind = { $case: "stringSetValue", stringSetValue: StringSet.decode(reader, reader.uint32()) };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Value {
    return {
      kind: isSet(object.boolean)
        ? { $case: "boolean", boolean: Boolean(object.boolean) }
        : isSet(object.binary)
        ? { $case: "binary", binary: Buffer.from(bytesFromBase64(object.binary)) }
        : isSet(object.listValue)
        ? { $case: "listValue", listValue: [...object.listValue] }
        : isSet(object.mapValue)
        ? { $case: "mapValue", mapValue: object.mapValue }
        : isSet(object.nullValue)
        ? { $case: "nullValue", nullValue: nullValueFromJSON(object.nullValue) }
        : isSet(object.numberValue)
        ? { $case: "numberValue", numberValue: Number(object.numberValue) }
        : isSet(object.numberSetValue)
        ? { $case: "numberSetValue", numberSetValue: NumberSet.fromJSON(object.numberSetValue) }
        : isSet(object.stringValue)
        ? { $case: "stringValue", stringValue: String(object.stringValue) }
        : isSet(object.stringSetValue)
        ? { $case: "stringSetValue", stringSetValue: StringSet.fromJSON(object.stringSetValue) }
        : undefined,
    };
  },

  toJSON(message: Value): unknown {
    const obj: any = {};
    message.kind?.$case === "boolean" && (obj.boolean = message.kind?.boolean);
    message.kind?.$case === "binary" &&
      (obj.binary = message.kind?.binary !== undefined ? base64FromBytes(message.kind?.binary) : undefined);
    message.kind?.$case === "listValue" && (obj.listValue = message.kind?.listValue);
    message.kind?.$case === "mapValue" && (obj.mapValue = message.kind?.mapValue);
    message.kind?.$case === "nullValue" &&
      (obj.nullValue = message.kind?.nullValue !== undefined ? nullValueToJSON(message.kind?.nullValue) : undefined);
    message.kind?.$case === "numberValue" && (obj.numberValue = message.kind?.numberValue);
    message.kind?.$case === "numberSetValue" &&
      (obj.numberSetValue = message.kind?.numberSetValue ? NumberSet.toJSON(message.kind?.numberSetValue) : undefined);
    message.kind?.$case === "stringValue" && (obj.stringValue = message.kind?.stringValue);
    message.kind?.$case === "stringSetValue" &&
      (obj.stringSetValue = message.kind?.stringSetValue ? StringSet.toJSON(message.kind?.stringSetValue) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Value>, I>>(object: I): Value {
    const message = createBaseValue();
    if (object.kind?.$case === "boolean" && object.kind?.boolean !== undefined && object.kind?.boolean !== null) {
      message.kind = { $case: "boolean", boolean: object.kind.boolean };
    }
    if (object.kind?.$case === "binary" && object.kind?.binary !== undefined && object.kind?.binary !== null) {
      message.kind = { $case: "binary", binary: object.kind.binary };
    }
    if (object.kind?.$case === "listValue" && object.kind?.listValue !== undefined && object.kind?.listValue !== null) {
      message.kind = { $case: "listValue", listValue: object.kind.listValue };
    }
    if (object.kind?.$case === "mapValue" && object.kind?.mapValue !== undefined && object.kind?.mapValue !== null) {
      message.kind = { $case: "mapValue", mapValue: object.kind.mapValue };
    }
    if (object.kind?.$case === "nullValue" && object.kind?.nullValue !== undefined && object.kind?.nullValue !== null) {
      message.kind = { $case: "nullValue", nullValue: object.kind.nullValue };
    }
    if (
      object.kind?.$case === "numberValue" &&
      object.kind?.numberValue !== undefined &&
      object.kind?.numberValue !== null
    ) {
      message.kind = { $case: "numberValue", numberValue: object.kind.numberValue };
    }
    if (
      object.kind?.$case === "numberSetValue" &&
      object.kind?.numberSetValue !== undefined &&
      object.kind?.numberSetValue !== null
    ) {
      message.kind = { $case: "numberSetValue", numberSetValue: NumberSet.fromPartial(object.kind.numberSetValue) };
    }
    if (
      object.kind?.$case === "stringValue" &&
      object.kind?.stringValue !== undefined &&
      object.kind?.stringValue !== null
    ) {
      message.kind = { $case: "stringValue", stringValue: object.kind.stringValue };
    }
    if (
      object.kind?.$case === "stringSetValue" &&
      object.kind?.stringSetValue !== undefined &&
      object.kind?.stringSetValue !== null
    ) {
      message.kind = { $case: "stringSetValue", stringSetValue: StringSet.fromPartial(object.kind.stringSetValue) };
    }
    return message;
  },
};

function createBaseAttribute(): Attribute {
  return { name: "", type: 0 };
}

export const Attribute = {
  encode(message: Attribute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Attribute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.type = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Attribute {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      type: isSet(object.type) ? dataTypeFromJSON(object.type) : 0,
    };
  },

  toJSON(message: Attribute): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.type !== undefined && (obj.type = dataTypeToJSON(message.type));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Attribute>, I>>(object: I): Attribute {
    const message = createBaseAttribute();
    message.name = object.name ?? "";
    message.type = object.type ?? 0;
    return message;
  },
};

function createBaseFilter(): Filter {
  return { name: "", operator: 0, value: undefined };
}

export const Filter = {
  encode(message: Filter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.operator !== 0) {
      writer.uint32(16).int32(message.operator);
    }
    if (message.value !== undefined) {
      Value.encode(message.value, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Filter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.operator = reader.int32() as any;
          break;
        case 3:
          message.value = Value.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Filter {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      operator: isSet(object.operator) ? operatorFromJSON(object.operator) : 0,
      value: isSet(object.value) ? Value.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: Filter): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.operator !== undefined && (obj.operator = operatorToJSON(message.operator));
    message.value !== undefined && (obj.value = message.value ? Value.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Filter>, I>>(object: I): Filter {
    const message = createBaseFilter();
    message.name = object.name ?? "";
    message.operator = object.operator ?? 0;
    message.value = (object.value !== undefined && object.value !== null) ? Value.fromPartial(object.value) : undefined;
    return message;
  },
};

function createBaseSelectQuery(): SelectQuery {
  return { table: "", index: undefined, attributes: [], filters: [], nextToken: undefined };
}

export const SelectQuery = {
  encode(message: SelectQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.table !== "") {
      writer.uint32(10).string(message.table);
    }
    if (message.index !== undefined) {
      writer.uint32(18).string(message.index);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.filters) {
      Filter.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.nextToken !== undefined) {
      writer.uint32(42).string(message.nextToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SelectQuery {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSelectQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.table = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        case 4:
          message.filters.push(Filter.decode(reader, reader.uint32()));
          break;
        case 5:
          message.nextToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SelectQuery {
    return {
      table: isSet(object.table) ? String(object.table) : "",
      index: isSet(object.index) ? String(object.index) : undefined,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromJSON(e)) : [],
      filters: Array.isArray(object?.filters) ? object.filters.map((e: any) => Filter.fromJSON(e)) : [],
      nextToken: isSet(object.nextToken) ? String(object.nextToken) : undefined,
    };
  },

  toJSON(message: SelectQuery): unknown {
    const obj: any = {};
    message.table !== undefined && (obj.table = message.table);
    message.index !== undefined && (obj.index = message.index);
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    if (message.filters) {
      obj.filters = message.filters.map((e) => e ? Filter.toJSON(e) : undefined);
    } else {
      obj.filters = [];
    }
    message.nextToken !== undefined && (obj.nextToken = message.nextToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SelectQuery>, I>>(object: I): SelectQuery {
    const message = createBaseSelectQuery();
    message.table = object.table ?? "";
    message.index = object.index ?? undefined;
    message.attributes = object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
    message.filters = object.filters?.map((e) => Filter.fromPartial(e)) || [];
    message.nextToken = object.nextToken ?? undefined;
    return message;
  },
};

function createBaseInsertQuery(): InsertQuery {
  return { table: "", attributes: undefined };
}

export const InsertQuery = {
  encode(message: InsertQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.table !== "") {
      writer.uint32(10).string(message.table);
    }
    if (message.attributes !== undefined) {
      Struct.encode(Struct.wrap(message.attributes), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InsertQuery {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInsertQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.table = reader.string();
          break;
        case 2:
          message.attributes = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InsertQuery {
    return {
      table: isSet(object.table) ? String(object.table) : "",
      attributes: isObject(object.attributes) ? object.attributes : undefined,
    };
  },

  toJSON(message: InsertQuery): unknown {
    const obj: any = {};
    message.table !== undefined && (obj.table = message.table);
    message.attributes !== undefined && (obj.attributes = message.attributes);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InsertQuery>, I>>(object: I): InsertQuery {
    const message = createBaseInsertQuery();
    message.table = object.table ?? "";
    message.attributes = object.attributes ?? undefined;
    return message;
  },
};

function createBaseUpdateOperation(): UpdateOperation {
  return { action: 0, attribute: "", type: 0, value: undefined };
}

export const UpdateOperation = {
  encode(message: UpdateOperation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.action !== 0) {
      writer.uint32(8).int32(message.action);
    }
    if (message.attribute !== "") {
      writer.uint32(18).string(message.attribute);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.value !== undefined) {
      Value.encode(message.value, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOperation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateOperation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.action = reader.int32() as any;
          break;
        case 2:
          message.attribute = reader.string();
          break;
        case 3:
          message.type = reader.int32() as any;
          break;
        case 4:
          message.value = Value.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateOperation {
    return {
      action: isSet(object.action) ? updateActionFromJSON(object.action) : 0,
      attribute: isSet(object.attribute) ? String(object.attribute) : "",
      type: isSet(object.type) ? updateTypeFromJSON(object.type) : 0,
      value: isSet(object.value) ? Value.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: UpdateOperation): unknown {
    const obj: any = {};
    message.action !== undefined && (obj.action = updateActionToJSON(message.action));
    message.attribute !== undefined && (obj.attribute = message.attribute);
    message.type !== undefined && (obj.type = updateTypeToJSON(message.type));
    message.value !== undefined && (obj.value = message.value ? Value.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateOperation>, I>>(object: I): UpdateOperation {
    const message = createBaseUpdateOperation();
    message.action = object.action ?? 0;
    message.attribute = object.attribute ?? "";
    message.type = object.type ?? 0;
    message.value = (object.value !== undefined && object.value !== null) ? Value.fromPartial(object.value) : undefined;
    return message;
  },
};

function createBaseUpdateQuery(): UpdateQuery {
  return { table: "", updates: [], filters: [], returnValues: undefined };
}

export const UpdateQuery = {
  encode(message: UpdateQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.table !== "") {
      writer.uint32(10).string(message.table);
    }
    for (const v of message.updates) {
      UpdateOperation.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.filters) {
      Filter.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.returnValues !== undefined) {
      writer.uint32(32).int32(message.returnValues);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateQuery {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.table = reader.string();
          break;
        case 2:
          message.updates.push(UpdateOperation.decode(reader, reader.uint32()));
          break;
        case 3:
          message.filters.push(Filter.decode(reader, reader.uint32()));
          break;
        case 4:
          message.returnValues = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateQuery {
    return {
      table: isSet(object.table) ? String(object.table) : "",
      updates: Array.isArray(object?.updates) ? object.updates.map((e: any) => UpdateOperation.fromJSON(e)) : [],
      filters: Array.isArray(object?.filters) ? object.filters.map((e: any) => Filter.fromJSON(e)) : [],
      returnValues: isSet(object.returnValues) ? returnValuesFromJSON(object.returnValues) : undefined,
    };
  },

  toJSON(message: UpdateQuery): unknown {
    const obj: any = {};
    message.table !== undefined && (obj.table = message.table);
    if (message.updates) {
      obj.updates = message.updates.map((e) => e ? UpdateOperation.toJSON(e) : undefined);
    } else {
      obj.updates = [];
    }
    if (message.filters) {
      obj.filters = message.filters.map((e) => e ? Filter.toJSON(e) : undefined);
    } else {
      obj.filters = [];
    }
    message.returnValues !== undefined &&
      (obj.returnValues = message.returnValues !== undefined ? returnValuesToJSON(message.returnValues) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateQuery>, I>>(object: I): UpdateQuery {
    const message = createBaseUpdateQuery();
    message.table = object.table ?? "";
    message.updates = object.updates?.map((e) => UpdateOperation.fromPartial(e)) || [];
    message.filters = object.filters?.map((e) => Filter.fromPartial(e)) || [];
    message.returnValues = object.returnValues ?? undefined;
    return message;
  },
};

function createBaseDeleteQuery(): DeleteQuery {
  return { table: "", filters: [], returnValues: undefined };
}

export const DeleteQuery = {
  encode(message: DeleteQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.table !== "") {
      writer.uint32(10).string(message.table);
    }
    for (const v of message.filters) {
      Filter.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.returnValues !== undefined) {
      writer.uint32(24).int32(message.returnValues);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteQuery {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.table = reader.string();
          break;
        case 2:
          message.filters.push(Filter.decode(reader, reader.uint32()));
          break;
        case 3:
          message.returnValues = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteQuery {
    return {
      table: isSet(object.table) ? String(object.table) : "",
      filters: Array.isArray(object?.filters) ? object.filters.map((e: any) => Filter.fromJSON(e)) : [],
      returnValues: isSet(object.returnValues) ? returnValuesFromJSON(object.returnValues) : undefined,
    };
  },

  toJSON(message: DeleteQuery): unknown {
    const obj: any = {};
    message.table !== undefined && (obj.table = message.table);
    if (message.filters) {
      obj.filters = message.filters.map((e) => e ? Filter.toJSON(e) : undefined);
    } else {
      obj.filters = [];
    }
    message.returnValues !== undefined &&
      (obj.returnValues = message.returnValues !== undefined ? returnValuesToJSON(message.returnValues) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteQuery>, I>>(object: I): DeleteQuery {
    const message = createBaseDeleteQuery();
    message.table = object.table ?? "";
    message.filters = object.filters?.map((e) => Filter.fromPartial(e)) || [];
    message.returnValues = object.returnValues ?? undefined;
    return message;
  },
};

function createBaseReadQuery(): ReadQuery {
  return { query: [] };
}

export const ReadQuery = {
  encode(message: ReadQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.query) {
      SelectQuery.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReadQuery {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReadQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.query.push(SelectQuery.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReadQuery {
    return { query: Array.isArray(object?.query) ? object.query.map((e: any) => SelectQuery.fromJSON(e)) : [] };
  },

  toJSON(message: ReadQuery): unknown {
    const obj: any = {};
    if (message.query) {
      obj.query = message.query.map((e) => e ? SelectQuery.toJSON(e) : undefined);
    } else {
      obj.query = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ReadQuery>, I>>(object: I): ReadQuery {
    const message = createBaseReadQuery();
    message.query = object.query?.map((e) => SelectQuery.fromPartial(e)) || [];
    return message;
  },
};

function createBaseWriteQuery(): WriteQuery {
  return { kind: undefined };
}

export const WriteQuery = {
  encode(message: WriteQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.kind?.$case === "insert") {
      InsertQuery.encode(message.kind.insert, writer.uint32(10).fork()).ldelim();
    }
    if (message.kind?.$case === "update") {
      UpdateQuery.encode(message.kind.update, writer.uint32(18).fork()).ldelim();
    }
    if (message.kind?.$case === "delete") {
      DeleteQuery.encode(message.kind.delete, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WriteQuery {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWriteQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kind = { $case: "insert", insert: InsertQuery.decode(reader, reader.uint32()) };
          break;
        case 2:
          message.kind = { $case: "update", update: UpdateQuery.decode(reader, reader.uint32()) };
          break;
        case 3:
          message.kind = { $case: "delete", delete: DeleteQuery.decode(reader, reader.uint32()) };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WriteQuery {
    return {
      kind: isSet(object.insert)
        ? { $case: "insert", insert: InsertQuery.fromJSON(object.insert) }
        : isSet(object.update)
        ? { $case: "update", update: UpdateQuery.fromJSON(object.update) }
        : isSet(object.delete)
        ? { $case: "delete", delete: DeleteQuery.fromJSON(object.delete) }
        : undefined,
    };
  },

  toJSON(message: WriteQuery): unknown {
    const obj: any = {};
    message.kind?.$case === "insert" &&
      (obj.insert = message.kind?.insert ? InsertQuery.toJSON(message.kind?.insert) : undefined);
    message.kind?.$case === "update" &&
      (obj.update = message.kind?.update ? UpdateQuery.toJSON(message.kind?.update) : undefined);
    message.kind?.$case === "delete" &&
      (obj.delete = message.kind?.delete ? DeleteQuery.toJSON(message.kind?.delete) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WriteQuery>, I>>(object: I): WriteQuery {
    const message = createBaseWriteQuery();
    if (object.kind?.$case === "insert" && object.kind?.insert !== undefined && object.kind?.insert !== null) {
      message.kind = { $case: "insert", insert: InsertQuery.fromPartial(object.kind.insert) };
    }
    if (object.kind?.$case === "update" && object.kind?.update !== undefined && object.kind?.update !== null) {
      message.kind = { $case: "update", update: UpdateQuery.fromPartial(object.kind.update) };
    }
    if (object.kind?.$case === "delete" && object.kind?.delete !== undefined && object.kind?.delete !== null) {
      message.kind = { $case: "delete", delete: DeleteQuery.fromPartial(object.kind.delete) };
    }
    return message;
  },
};

function createBaseBulkWriteQuery(): BulkWriteQuery {
  return { queries: [] };
}

export const BulkWriteQuery = {
  encode(message: BulkWriteQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.queries) {
      WriteQuery.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BulkWriteQuery {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBulkWriteQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.queries.push(WriteQuery.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BulkWriteQuery {
    return { queries: Array.isArray(object?.queries) ? object.queries.map((e: any) => WriteQuery.fromJSON(e)) : [] };
  },

  toJSON(message: BulkWriteQuery): unknown {
    const obj: any = {};
    if (message.queries) {
      obj.queries = message.queries.map((e) => e ? WriteQuery.toJSON(e) : undefined);
    } else {
      obj.queries = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BulkWriteQuery>, I>>(object: I): BulkWriteQuery {
    const message = createBaseBulkWriteQuery();
    message.queries = object.queries?.map((e) => WriteQuery.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBulkQuery(): BulkQuery {
  return { kind: undefined };
}

export const BulkQuery = {
  encode(message: BulkQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.kind?.$case === "read") {
      ReadQuery.encode(message.kind.read, writer.uint32(10).fork()).ldelim();
    }
    if (message.kind?.$case === "BulkWriteQuery") {
      WriteQuery.encode(message.kind.BulkWriteQuery, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BulkQuery {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBulkQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kind = { $case: "read", read: ReadQuery.decode(reader, reader.uint32()) };
          break;
        case 2:
          message.kind = { $case: "BulkWriteQuery", BulkWriteQuery: WriteQuery.decode(reader, reader.uint32()) };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BulkQuery {
    return {
      kind: isSet(object.read)
        ? { $case: "read", read: ReadQuery.fromJSON(object.read) }
        : isSet(object.BulkWriteQuery)
        ? { $case: "BulkWriteQuery", BulkWriteQuery: WriteQuery.fromJSON(object.BulkWriteQuery) }
        : undefined,
    };
  },

  toJSON(message: BulkQuery): unknown {
    const obj: any = {};
    message.kind?.$case === "read" &&
      (obj.read = message.kind?.read ? ReadQuery.toJSON(message.kind?.read) : undefined);
    message.kind?.$case === "BulkWriteQuery" &&
      (obj.BulkWriteQuery = message.kind?.BulkWriteQuery ? WriteQuery.toJSON(message.kind?.BulkWriteQuery) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BulkQuery>, I>>(object: I): BulkQuery {
    const message = createBaseBulkQuery();
    if (object.kind?.$case === "read" && object.kind?.read !== undefined && object.kind?.read !== null) {
      message.kind = { $case: "read", read: ReadQuery.fromPartial(object.kind.read) };
    }
    if (
      object.kind?.$case === "BulkWriteQuery" &&
      object.kind?.BulkWriteQuery !== undefined &&
      object.kind?.BulkWriteQuery !== null
    ) {
      message.kind = { $case: "BulkWriteQuery", BulkWriteQuery: WriteQuery.fromPartial(object.kind.BulkWriteQuery) };
    }
    return message;
  },
};

function createBaseQuery(): Query {
  return { kind: undefined };
}

export const Query = {
  encode(message: Query, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.kind?.$case === "select") {
      SelectQuery.encode(message.kind.select, writer.uint32(10).fork()).ldelim();
    }
    if (message.kind?.$case === "insert") {
      InsertQuery.encode(message.kind.insert, writer.uint32(18).fork()).ldelim();
    }
    if (message.kind?.$case === "update") {
      UpdateQuery.encode(message.kind.update, writer.uint32(26).fork()).ldelim();
    }
    if (message.kind?.$case === "delete") {
      DeleteQuery.encode(message.kind.delete, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Query {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kind = { $case: "select", select: SelectQuery.decode(reader, reader.uint32()) };
          break;
        case 2:
          message.kind = { $case: "insert", insert: InsertQuery.decode(reader, reader.uint32()) };
          break;
        case 3:
          message.kind = { $case: "update", update: UpdateQuery.decode(reader, reader.uint32()) };
          break;
        case 4:
          message.kind = { $case: "delete", delete: DeleteQuery.decode(reader, reader.uint32()) };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Query {
    return {
      kind: isSet(object.select)
        ? { $case: "select", select: SelectQuery.fromJSON(object.select) }
        : isSet(object.insert)
        ? { $case: "insert", insert: InsertQuery.fromJSON(object.insert) }
        : isSet(object.update)
        ? { $case: "update", update: UpdateQuery.fromJSON(object.update) }
        : isSet(object.delete)
        ? { $case: "delete", delete: DeleteQuery.fromJSON(object.delete) }
        : undefined,
    };
  },

  toJSON(message: Query): unknown {
    const obj: any = {};
    message.kind?.$case === "select" &&
      (obj.select = message.kind?.select ? SelectQuery.toJSON(message.kind?.select) : undefined);
    message.kind?.$case === "insert" &&
      (obj.insert = message.kind?.insert ? InsertQuery.toJSON(message.kind?.insert) : undefined);
    message.kind?.$case === "update" &&
      (obj.update = message.kind?.update ? UpdateQuery.toJSON(message.kind?.update) : undefined);
    message.kind?.$case === "delete" &&
      (obj.delete = message.kind?.delete ? DeleteQuery.toJSON(message.kind?.delete) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Query>, I>>(object: I): Query {
    const message = createBaseQuery();
    if (object.kind?.$case === "select" && object.kind?.select !== undefined && object.kind?.select !== null) {
      message.kind = { $case: "select", select: SelectQuery.fromPartial(object.kind.select) };
    }
    if (object.kind?.$case === "insert" && object.kind?.insert !== undefined && object.kind?.insert !== null) {
      message.kind = { $case: "insert", insert: InsertQuery.fromPartial(object.kind.insert) };
    }
    if (object.kind?.$case === "update" && object.kind?.update !== undefined && object.kind?.update !== null) {
      message.kind = { $case: "update", update: UpdateQuery.fromPartial(object.kind.update) };
    }
    if (object.kind?.$case === "delete" && object.kind?.delete !== undefined && object.kind?.delete !== null) {
      message.kind = { $case: "delete", delete: DeleteQuery.fromPartial(object.kind.delete) };
    }
    return message;
  },
};

function createBaseResponse(): Response {
  return { items: [], nextToken: undefined };
}

export const Response = {
  encode(message: Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      Struct.encode(Struct.wrap(v!), writer.uint32(10).fork()).ldelim();
    }
    if (message.nextToken !== undefined) {
      writer.uint32(18).string(message.nextToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(Struct.unwrap(Struct.decode(reader, reader.uint32())));
          break;
        case 2:
          message.nextToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Response {
    return {
      items: Array.isArray(object?.items) ? [...object.items] : [],
      nextToken: isSet(object.nextToken) ? String(object.nextToken) : undefined,
    };
  },

  toJSON(message: Response): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e);
    } else {
      obj.items = [];
    }
    message.nextToken !== undefined && (obj.nextToken = message.nextToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Response>, I>>(object: I): Response {
    const message = createBaseResponse();
    message.items = object.items?.map((e) => e) || [];
    message.nextToken = object.nextToken ?? undefined;
    return message;
  },
};

function createBaseQueryRequest(): QueryRequest {
  return { kind: undefined };
}

export const QueryRequest = {
  encode(message: QueryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.kind?.$case === "query") {
      Query.encode(message.kind.query, writer.uint32(10).fork()).ldelim();
    }
    if (message.kind?.$case === "queries") {
      BulkQuery.encode(message.kind.queries, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kind = { $case: "query", query: Query.decode(reader, reader.uint32()) };
          break;
        case 2:
          message.kind = { $case: "queries", queries: BulkQuery.decode(reader, reader.uint32()) };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRequest {
    return {
      kind: isSet(object.query)
        ? { $case: "query", query: Query.fromJSON(object.query) }
        : isSet(object.queries)
        ? { $case: "queries", queries: BulkQuery.fromJSON(object.queries) }
        : undefined,
    };
  },

  toJSON(message: QueryRequest): unknown {
    const obj: any = {};
    message.kind?.$case === "query" &&
      (obj.query = message.kind?.query ? Query.toJSON(message.kind?.query) : undefined);
    message.kind?.$case === "queries" &&
      (obj.queries = message.kind?.queries ? BulkQuery.toJSON(message.kind?.queries) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRequest>, I>>(object: I): QueryRequest {
    const message = createBaseQueryRequest();
    if (object.kind?.$case === "query" && object.kind?.query !== undefined && object.kind?.query !== null) {
      message.kind = { $case: "query", query: Query.fromPartial(object.kind.query) };
    }
    if (object.kind?.$case === "queries" && object.kind?.queries !== undefined && object.kind?.queries !== null) {
      message.kind = { $case: "queries", queries: BulkQuery.fromPartial(object.kind.queries) };
    }
    return message;
  },
};

function createBaseResponseError(): ResponseError {
  return { message: "" };
}

export const ResponseError = {
  encode(message: ResponseError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseError {
    return { message: isSet(object.message) ? String(object.message) : "" };
  },

  toJSON(message: ResponseError): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseError>, I>>(object: I): ResponseError {
    const message = createBaseResponseError();
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseQueryResponse(): QueryResponse {
  return { kind: undefined };
}

export const QueryResponse = {
  encode(message: QueryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.kind?.$case === "response") {
      Response.encode(message.kind.response, writer.uint32(10).fork()).ldelim();
    }
    if (message.kind?.$case === "error") {
      ResponseError.encode(message.kind.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kind = { $case: "response", response: Response.decode(reader, reader.uint32()) };
          break;
        case 2:
          message.kind = { $case: "error", error: ResponseError.decode(reader, reader.uint32()) };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryResponse {
    return {
      kind: isSet(object.response)
        ? { $case: "response", response: Response.fromJSON(object.response) }
        : isSet(object.error)
        ? { $case: "error", error: ResponseError.fromJSON(object.error) }
        : undefined,
    };
  },

  toJSON(message: QueryResponse): unknown {
    const obj: any = {};
    message.kind?.$case === "response" &&
      (obj.response = message.kind?.response ? Response.toJSON(message.kind?.response) : undefined);
    message.kind?.$case === "error" &&
      (obj.error = message.kind?.error ? ResponseError.toJSON(message.kind?.error) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryResponse>, I>>(object: I): QueryResponse {
    const message = createBaseQueryResponse();
    if (object.kind?.$case === "response" && object.kind?.response !== undefined && object.kind?.response !== null) {
      message.kind = { $case: "response", response: Response.fromPartial(object.kind.response) };
    }
    if (object.kind?.$case === "error" && object.kind?.error !== undefined && object.kind?.error !== null) {
      message.kind = { $case: "error", error: ResponseError.fromPartial(object.kind.error) };
    }
    return message;
  },
};

export type PartiQLQueryService = typeof PartiQLQueryService;
export const PartiQLQueryService = {
  query: {
    path: "/topcoder.dal.partiql.PartiQLQuery/Query",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: QueryRequest) => Buffer.from(QueryRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => QueryRequest.decode(value),
    responseSerialize: (value: QueryResponse) => Buffer.from(QueryResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => QueryResponse.decode(value),
  },
} as const;

export interface PartiQLQueryServer extends UntypedServiceImplementation {
  query: handleUnaryCall<QueryRequest, QueryResponse>;
}

export interface PartiQLQueryClient extends Client {
  query(
    request: QueryRequest,
    callback: (error: ServiceError | null, response: QueryResponse) => void,
  ): ClientUnaryCall;
  query(
    request: QueryRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: QueryResponse) => void,
  ): ClientUnaryCall;
  query(
    request: QueryRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: QueryResponse) => void,
  ): ClientUnaryCall;
}

export const PartiQLQueryClient = makeGenericClientConstructor(
  PartiQLQueryService,
  "topcoder.dal.partiql.PartiQLQuery",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions>): PartiQLQueryClient;
  service: typeof PartiQLQueryService;
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string } ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & { $case: T["$case"] }
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
