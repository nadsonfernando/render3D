import styled from 'styled-components/native';

import { Text } from '@shared/components/text';
import { Image } from '@shared/components/image';

export const Wrapper = styled.View`
  width: 100%;
  height: 120px;
  justify-content: flex-end;
  margin-bottom: ${({ theme }) => theme.spacing.padding.sm}px;
  background-color: ${({ theme }) => theme.color.surface};
`;

export const Content = styled.View`
  width: 100%;
  height: 50px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacing.padding.lg}px;
`;

export const Title = styled(Text)`
  align-self: center;
`;
