import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

import { Thumbnail } from '@app/modules/product/presentation/screens/detail/thumbnail';
import { Section } from '@app/modules/product/presentation/screens/detail/section';
import { ProductEntity } from '@app/modules/product/domain/entities/product';

import * as S from './index.styles';
import { useMemo } from 'react';

type Params = {
  ProductDetail: {
    product: ProductEntity;
  };
};

export function ProductDetailScreen() {
  const navigation = useNavigation();

  const { product } = useRoute<RouteProp<Params, 'ProductDetail'>>().params;

  const price = useMemo(() => {
    return `R$ ${product.price}`;
  }, [product.price]);

  const discount = useMemo(() => {
    return `${product.discountPercentage}% OFF`;
  }, [product.discountPercentage]);

  return (
    <S.Wrapper>
      <Thumbnail uri={product.thumbnail} />

      <S.ScrollArea>
        <S.Content>
          <S.Brand color="textSecondary" variation="lg-r">
            {product.brand}
          </S.Brand>

          <S.Title color="textPrimary" variation="lgx-b">
            {product.title}
          </S.Title>

          <S.Row>
            <S.Price color="primary" variation="lg-b">
              {price}
            </S.Price>

            <S.Discount color="white" variation="xs-b">
              {discount}
            </S.Discount>
          </S.Row>

          <S.Row>
            <S.LeftRating value={product.rating.toFixed(1)} />

            <S.Stock color="textSecondary" variation="sm-r">
              {`${product.stock} unidades disponiveis`}
            </S.Stock>
          </S.Row>

          <S.Divider />
          <Section title="Descrição" description={product.description} />

          <S.Divider />
          <Section title="Cagegoria" description={product.category} />
        </S.Content>
      </S.ScrollArea>

      <S.BackButton onPress={navigation.goBack}>
        <S.BackButtonIcon name="arrow-back" size={16} />
      </S.BackButton>
    </S.Wrapper>
  );
}
