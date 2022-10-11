import { DataType } from "../dal/models/nosql/PartiQL";

export const ResourceSchema = {
  tableName: "Resource",
  attributes: [
    {
      name: "id",
      type: DataType.STRING,
    },
    {
      name: "challengeId",
      type: DataType.NUMBER,
    },
    {
      name: "created",
      type: DataType.NUMBER,
    },
    {
      name: "createdBy",
      type: DataType.STRING,
    },
    {
      name: "legacyId",
      type: DataType.NUMBER,
    },
    {
      name: "memberHandle",
      type: DataType.STRING,
    },
    {
      name: "memberId",
      type: DataType.STRING,
    },
    {
      name: "roleId",
      type: DataType.STRING,
    },
    {
      name: "updated",
      type: DataType.NUMBER,
    },
    {
      name: "updatedBy",
      type: DataType.STRING,
    },
  ],
  indices: {
    challengeId: {
      index: "resource-challengeIdMemberId-index",
      partitionKey: "challengeId",
      sortKey: "memberId",
    },
    memberId: {
      index: "resource-memberIdRole-index",
      partitionKey: "memberId",
      sortKey: "roleId",
    },
  },
};
