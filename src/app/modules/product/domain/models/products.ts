import { ProductEntity } from '@app/modules/product/domain/entities/product';

export interface IProducts {
  total: number;
  skip: number;
  limit: number;
  products: ProductEntity[];
}
