import { FindProductsBySkipUseCase } from '@app/modules/product/useCases/find-by-skip/findBySkip';
import { ProductRepository } from '@app/modules/product/infrastructure/implementations/repository';

const productRepository = new ProductRepository();
const findProductsBySkipUseCase = new FindProductsBySkipUseCase(productRepository);

export { findProductsBySkipUseCase };
