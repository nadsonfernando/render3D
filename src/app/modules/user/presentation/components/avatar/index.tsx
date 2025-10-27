import { Text } from 'react-native';

import * as S from './index.styles';
import { useUserStoreQuery } from '@app/modules/user/store/query/user';

export function UserAvatar() {
  const query = useUserStoreQuery();

  return (
    <S.Wrapper>
      <S.AvatarImage source={{ uri: query.data?.avatar_url }} resizeMode="cover" />
    </S.Wrapper>
  );
}
