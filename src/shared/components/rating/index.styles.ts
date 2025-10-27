import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

import { Text } from '@shared/components/text';

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Star = styled(Ionicons)`
  color: ${({ theme }) => theme.color.alert};
`;

export const Value = styled(Text)`
  align-self: center;
  margin-left: ${({ theme }) => theme.spacing.margin.xs}px;
`;
