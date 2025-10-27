import { useInfiniteQuery } from '@tanstack/react-query';

import { findProductsBySkipUseCase } from '@app/modules/product/useCases/find-by-skip';
import { IProducts } from '@app/modules/product/domain/models/products';

export function useProductsStoreQuery() {
  const query = useInfiniteQuery<IProducts, Error>({
    queryKey: ['products'],
    initialPageParam: 0,

    queryFn: async ({ pageParam = 0 }) => {
      const { data } = await findProductsBySkipUseCase.execute(pageParam as number);

      return data;
    },
    getNextPageParam: (lastPage: IProducts) => {
      const nextSkip = lastPage.skip + lastPage.limit;

      return nextSkip < lastPage.total ? nextSkip : undefined;
    },

    staleTime: 30 * 1000,
    retry: 1,
  });

  return query;
}
