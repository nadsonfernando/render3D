import { ProductRepository } from '@app/modules/product/infrastructure/implementations/repository';
import { IProducts } from '@app/modules/product/domain/models/products';

type FindProductsBySkipUseCaseReturnType = {
  data: IProducts;
  error?: string;
};

export class FindProductsBySkipUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute(
    skip: number = 0,
    limit: number = 10,
  ): Promise<FindProductsBySkipUseCaseReturnType> {
    const response = await this.productRepository.findAll(skip, limit);

    if (!response.data || response.error) {
      return {
        data: { limit: 0, skip: 0, total: 0, products: [] },
        error: 'Could not get the product list',
      };
    }

    return { data: response.data };
  }
}
