import { DataType } from "../dal/models/nosql/PartiQL";

export const ResourceRolePhaseDependencySchema = {
  tableName: "ResourceRolePhaseDependency",
  attributes: [
    {
      name: "id",
      type: DataType.STRING,
    },
    {
      name: "phaseId",
      type: DataType.STRING,
    },
    {
      name: "phaseState",
      type: DataType.BOOLEAN,
    },
    {
      name: "resourceRoleId",
      type: DataType.STRING,
    },
  ],
  indices: {},
};
