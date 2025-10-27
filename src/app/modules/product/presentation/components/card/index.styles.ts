import styled from 'styled-components/native';

import { Text } from '@shared/components/text';
import { Image } from '@shared/components/image';

export const Wrapper = styled.View`
  padding: ${({ theme }) => theme.spacing.padding.lg}px;
  margin: ${({ theme }) => theme.spacing.margin.xs}px ${({ theme }) => theme.spacing.padding.lg}px;
  background-color: ${({ theme }) => theme.color.surface};
  border-radius: ${({ theme }) => theme.spacing.borderRadius.lg}px;
  flex-direction: row;

  shadow-offset: 0px 3px;
  shadow-opacity: 0.29;
  shadow-radius: 4.65px;
  shadow-color: ${({ theme }) => theme.color.shadow};
`;

export const LeftImage = styled(Image)`
  width: 100px;
  height: 100px;
`;

export const Content = styled.View`
  flex: 1;
  margin-left: ${({ theme }) => theme.spacing.padding.sm}px;
`;

export const Title = styled(Text)``;

export const Brand = styled(Text)`
  margin-top: ${({ theme }) => theme.spacing.padding.xs}px;
`;

export const Price = styled(Text)`
  margin-top: ${({ theme }) => theme.spacing.padding.sm}px;
`;
