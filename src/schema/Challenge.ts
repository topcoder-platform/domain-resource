import { DataType } from "../dal/models/nosql/PartiQL";

export const ChallengeSchema = {
  tableName: "Challenge",
  attributes: [
    {
      name: "id",
      type: DataType.STRING,
    },
    {
      name: "legacyId",
      type: DataType.NUMBER,
    },
    {
      name: "name",
      type: DataType.STRING,
    },
  ],
  indices: {},
};
