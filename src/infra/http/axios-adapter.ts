import { Get } from "@/aplication/contracts/http/get";

import axios from "axios";

export class AxiosAdapter implements Get {
  async get(url: string): Promise<unknown> {
    const response = await axios.get(url);
    const data = response.data;

    return data;
  }
}
