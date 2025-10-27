import { AxiosRequestConfig } from 'axios';

import { IHttpResponse } from '@core/providers/http/types/response';

export interface IHttp {
  get<T, C = undefined, E = undefined>(
    uri: string,
    config: AxiosRequestConfig<C>,
  ): Promise<IHttpResponse<T, E>>;
}
