import styled from 'styled-components/native';

import { Image } from '@shared/components/image';

export const Wrapper = styled.View`
  border-radius: 18px;
  overflow: hidden;
`;

export const AvatarImage = styled(Image)`
  width: 36px;
  height: 36px;
  background-color: ${({ theme }) => theme.color.background};
`;
