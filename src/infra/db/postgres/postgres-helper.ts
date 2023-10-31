import { Pool } from "pg";

export const PostgresHelper = {
  client: null as Pool | null,
  uri: null as string | null,

  async connect(uri: string) {
    this.client = new Pool({
      connectionString: uri,
    });

    await this.client.connect();
  },

  async disconnect() {
    if (!this.client) {
      return;
    }

    await this.client.end();
  },

  async query(query: string) {
    if (!this.client) {
      throw new Error("No client connected");
    }

    const result = await this.client.query(query);

    return result.rows;
  },
};
