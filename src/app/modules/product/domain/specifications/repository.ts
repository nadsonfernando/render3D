import { IHttpResponse } from '@core/providers/http/types/response';
import { IProducts } from '@app/modules/product/domain/models/products';

export interface IProductRepository {
  findAll(): Promise<IHttpResponse<IProducts, undefined>>;
}
