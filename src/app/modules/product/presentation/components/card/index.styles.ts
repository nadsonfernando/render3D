import styled from 'styled-components/native';

import { Text } from '@shared/components/text';

export const Wrapper = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  padding: ${({ theme }) => theme.spacing.padding.lg}px;
  margin: ${({ theme }) => theme.spacing.margin.xs}px ${({ theme }) => theme.spacing.padding.lg}px;
  background-color: ${({ theme }) => theme.color.surface};
  border-radius: ${({ theme }) => theme.spacing.borderRadius.lg}px;
  flex-direction: row;
`;

export const Title = styled(Text)``;
