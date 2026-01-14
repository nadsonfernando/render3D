import { IProductRepository } from '@app/modules/product/domain/specifications/repository';

import House from '@assets/glb/House.glb';
import Building from '@assets/glb/Building.glb';
import TownHouse from '@assets/glb/TownHouse.glb';

export class ProductRepository implements IProductRepository {
  async find() {
    return [
      {
        id: '1',
        name: 'Aurora House',
        glb: House,
      },
      {
        id: '2',
        name: 'Skyline Villa',
        glb: Building,
      },
      {
        id: '3',
        name: 'Prime Town House',
        glb: TownHouse,
      },
    ];
  }
}
