import { ProductEntity } from '@app/modules/product/domain/entities/product';

export interface IProductRepository {
  find(): Promise<ProductEntity[]>;
}
