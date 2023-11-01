import { HttpResponse } from "@/presentation/contracts/http";

export interface Middleware<T = any> {
  handle: (httpRequest: T) => Promise<HttpResponse>;
}
