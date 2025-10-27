import { Text } from 'react-native';

import { ProductEntity } from '@app/modules/product/domain/entities/product';

import * as S from './index.styles';
import { useMemo } from 'react';

interface ProductCardProps {
  product: ProductEntity;
}

export function ProductCard({ product }: ProductCardProps) {
  const price = useMemo(() => {
    return `R$ ${product.price}`;
  }, [product.price]);

  return (
    <S.Wrapper>
      <S.LeftImage source={{ uri: product.thumbnail }} resizeMode="cover" />

      <S.Content>
        <S.Title color="textPrimary" variation="lg-b">
          {product.title}
        </S.Title>

        <S.Brand color="textSecondary" variation="sm-r">
          {product.brand}
        </S.Brand>

        <S.Price color="primary" variation="sm-b">
          {price}
        </S.Price>
      </S.Content>
    </S.Wrapper>
  );
}
