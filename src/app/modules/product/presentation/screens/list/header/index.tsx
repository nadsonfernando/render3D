import * as S from './index.styles';

import { UserAvatar } from '@app/modules/user/presentation/components/avatar';

export function Header() {
  return (
    <S.Wrapper>
      <S.Content>
        <S.Title color="textPrimary" variation="lg-b">
          Produtos
        </S.Title>

        <UserAvatar />
      </S.Content>
    </S.Wrapper>
  );
}
