import { Hasher } from "@/aplication/contracts/cryptography/hasher";

import bcrypt from "bcrypt";

export class BcryptAdapter implements Hasher {
  constructor(private readonly salt: number) {}

  async hash(plaintext: string): Promise<string> {
    return bcrypt.hash(plaintext, this.salt);
  }
}
