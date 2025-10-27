import { Text } from '@shared/components/text';
import styled from 'styled-components/native';

export const Wrapper = styled.View``;

export const Title = styled(Text)``;

export const Description = styled(Text)`
  margin-top: ${({ theme }) => theme.spacing.margin.lg}px;
`;
