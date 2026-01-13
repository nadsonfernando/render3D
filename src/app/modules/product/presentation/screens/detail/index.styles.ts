import styled from 'styled-components/native';

import { Ionicons } from '@expo/vector-icons';

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.background};
`;

export const Content = styled.View`
  height: ${({ theme }) => theme.spacing.dimensions.height}px;
  padding: ${({ theme }) => theme.spacing.padding.lg}px;
  background-color: ${({ theme }) => theme.color.background};
`;

export const BackButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  position: absolute;

  left: ${({ theme }) => theme.spacing.margin.lg}px;
  top: ${({ theme }) => theme.spacing.margin.lg * 2.5}px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.background};
`;

export const BackButtonIcon = styled(Ionicons)`
  color: ${({ theme }) => theme.color.textPrimary};
`;
