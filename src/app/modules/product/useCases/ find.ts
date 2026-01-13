import { ProductRepository } from '@app/modules/product/infrastructure/implementations/repository';

const repository = new ProductRepository();

export class FindProductsUseCase {
  static execute() {
    return repository.find();
  }
}
