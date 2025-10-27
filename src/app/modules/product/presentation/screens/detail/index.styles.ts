import styled from 'styled-components/native';

import { Text } from '@shared/components/text';
import { Rating } from '@shared/components/rating';

import { Ionicons } from '@expo/vector-icons';

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.background};
`;

export const ScrollArea = styled.ScrollView.attrs(({ theme }) => ({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingTop: theme.spacing.dimensions.height * 0.3,
  },
}))``;

export const Content = styled.View`
  height: ${({ theme }) => theme.spacing.dimensions.height}px;
  padding: ${({ theme }) => theme.spacing.padding.lg}px;
  background-color: ${({ theme }) => theme.color.background};
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Brand = styled(Text)``;

export const Title = styled(Text)`
  margin-top: ${({ theme }) => theme.spacing.padding.xs}px;
`;

export const Price = styled(Text)`
  margin-top: ${({ theme }) => theme.spacing.padding.xs}px;
`;

export const Discount = styled(Text)`
  margin-top: ${({ theme }) => theme.spacing.padding.xs}px;
  margin-left: ${({ theme }) => theme.spacing.padding.xs}px;
  background-color: ${({ theme }) => theme.color.secondary};

  padding: ${({ theme }) => theme.spacing.padding.sm / 2}px
    ${({ theme }) => theme.spacing.padding.sm}px;
`;

export const LeftRating = styled(Rating)`
  margin-top: ${({ theme }) => theme.spacing.margin.lg}px;
`;

export const Stock = styled(Text)`
  margin-top: ${({ theme }) => theme.spacing.padding.lg}px;
  margin-left: ${({ theme }) => theme.spacing.padding.sm}px;
`;

export const Divider = styled.View`
  width: 100%;
  height: 2px;
  margin: ${({ theme }) => theme.spacing.margin.lg}px 0;
  background-color: ${({ theme }) => theme.color.divider};
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
