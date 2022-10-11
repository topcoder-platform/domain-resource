import { uuid } from "uuidv4";

class IdGenerator {
  public generateUUID(): string {
    return uuid();
  }
}

export default new IdGenerator();
