import { AxiosError, AxiosResponse } from 'axios';

export class HttpResponseUtil {
  static transform<P, R>() {
    return {
      success({ data, status }: AxiosResponse<P>) {
        return { data, status };
      },
      error({ response, code, message }: AxiosError) {
        return {
          code,
          message,
          status: response?.status,
          error: response?.data as R,
        };
      },
    };
  }
}
