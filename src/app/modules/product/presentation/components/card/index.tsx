import { Text } from 'react-native';

import { ProductEntity } from '@app/modules/product/domain/entities/product';

import * as S from './index.styles';

interface ProductCardProps {
  product: ProductEntity;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <S.Wrapper>
      <Text>{product.title}</Text>
    </S.Wrapper>
  );
}
