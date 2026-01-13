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

  return (
    <S.Wrapper onPress={onPress}>
      <S.Title color="textPrimary" variation="lg-b">
        {product.name}
      </S.Title>
    </S.Wrapper>
  );
}
