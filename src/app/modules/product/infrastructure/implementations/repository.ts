import { IProductRepository } from '@app/modules/product/domain/specifications/repository';

export class ProductRepository implements IProductRepository {
  async find() {
    return [
      {
        id: '1',
        name: 'Center House 12',
        glb: '',
      },
    ];
  }
}
