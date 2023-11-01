import { HttpResponse } from "@/presentation/contracts/http";

export interface Controller<T = any> {
  handle: (request: T) => Promise<HttpResponse>;
}
