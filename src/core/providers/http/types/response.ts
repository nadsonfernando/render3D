export interface IHttpResponse<P, E = undefined> {
  data?: P;
  error?: E;
  code?: string;
  status?: number;
  message?: string;
}
