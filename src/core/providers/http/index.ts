import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, CreateAxiosDefaults } from 'axios';

import { IHttp } from '@core/providers/http/specifications';
import { HttpResponseUtil } from '@core/providers/http/util/response';

import { IHttpResponse } from '@core/providers/http/types/response';

export class HttpProvider implements IHttp {
  private instance: AxiosInstance;

  constructor(config: CreateAxiosDefaults) {
    this.instance = axios.create(config);
  }

  async get<T, C = undefined, E = undefined>(
    uri: string,
    config: AxiosRequestConfig<C>,
  ): Promise<IHttpResponse<T, E>> {
    try {
      const response = await this.instance.get(uri, config);

      return HttpResponseUtil.transform<T, E>().success(response);
    } catch (error) {
      return HttpResponseUtil.transform<T, E>().error(error as AxiosError);
    }
  }
}
