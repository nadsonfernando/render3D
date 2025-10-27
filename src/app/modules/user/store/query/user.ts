import { useQuery } from '@tanstack/react-query';

import { findUserByNameUseCase } from '@app/modules/user/useCases/find-by-name';
import { UserEntity } from '@app/modules/user/domain/entities/user';

const name = 'nadsonfernando';

export function useUserStoreQuery() {
  const query = useQuery<UserEntity | undefined, Error>({
    queryKey: ['user', name],

    queryFn: async () => {
      const { data } = await findUserByNameUseCase.execute(name);

      return data;
    },

    staleTime: 30 * 1000,
    retry: 1,
  });

  return query;
}
