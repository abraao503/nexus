import { UuidGenerator } from "@/aplication/contracts/uuid/uuidGenerator";
import crypto from "crypto";

export class CryptoAdapter implements UuidGenerator {
  async generate(): Promise<string> {
    return crypto.randomUUID();
  }
}
