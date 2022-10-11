import { DataType } from "../dal/models/nosql/PartiQL";

export const ResourceRoleSchema = {
  tableName: "ResourceRole",
  attributes: [
    {
      name: "id",
      type: DataType.STRING,
    },
    {
      name: "fullAccess",
      type: DataType.BOOLEAN,
    },
    {
      name: "fullReadAccess",
      type: DataType.BOOLEAN,
    },
    {
      name: "fullWriteAccess",
      type: DataType.BOOLEAN,
    },
    {
      name: "isActive",
      type: DataType.BOOLEAN,
    },
    {
      name: "legacyId",
      type: DataType.NUMBER,
    },
    {
      name: "name",
      type: DataType.STRING,
    },
    {
      name: "nameLower",
      type: DataType.STRING,
    },
    {
      name: "selfObtainable",
      type: DataType.BOOLEAN,
    },
  ],
  indices: {
    nameLower: {
      index: "resourceRole-nameLower-index",
      partitionKey: "nameLower",
    },
  },
};
