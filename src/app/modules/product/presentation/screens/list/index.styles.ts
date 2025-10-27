import { ProductEntity } from '@app/modules/product/domain/entities/product';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.background};
`;

export const List = styled(FlatList<ProductEntity>)`
  flex: 1;
`;
