import { ProductEntity } from '@app/modules/product/domain/entities/product';
import { IProducts } from '@app/modules/product/domain/models/products';
import { IProductRepository } from '@app/modules/product/domain/specifications/repository';

import DummyJsonService from '@shared/services/dummyjson';

import { IHttpResponse } from '@core/providers/http/types/response';

export class ProductRepository implements IProductRepository {
  async findAll(skip: number = 0, limit = 10): Promise<IHttpResponse<IProducts, undefined>> {
    return DummyJsonService.get<IProducts>('/products', {
      params: { limit, skip },
    });
  }
}
