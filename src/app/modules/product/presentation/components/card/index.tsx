import { useMemo } from 'react';

import { ProductEntity } from '@app/modules/product/domain/entities/product';

import * as S from './index.styles';

import { useProductRouteNav } from '@app/modules/product/presentation/route/hooks/nav';

interface ProductCardProps {
  product: ProductEntity;
}

export function ProductCard({ product }: ProductCardProps) {
  const nav = useProductRouteNav();

  function onPress() {
    nav.go.detail(product);
  }

  const price = useMemo(() => {
    return `R$ ${product.price}`;
  }, [product.price]);

  return (
    <S.Wrapper onPress={onPress}>
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

        <S.FooterRating value={product.rating.toFixed(1)} />
      </S.Content>
    </S.Wrapper>
  );
}
