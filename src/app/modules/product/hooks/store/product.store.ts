import { useEffect, useState } from 'react';
import { ProductEntity } from '@app/modules/product/domain/entities/product';
import { FindProductsUseCase } from '@app/modules/product/useCases/ find';

export function useProductsStore() {
  const [data, setData] = useState<ProductEntity[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const products = await FindProductsUseCase.execute();

      if (!!products.length) {
        setData(products);
      }
    }

    fetchProducts();
  }, []);

  return { data };
}
