import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

import { Glb } from '@shared/components/glb';
import { ProductEntity } from '@app/modules/product/domain/entities/product';

import * as S from './index.styles';

type Params = {
  ProductDetail: {
    product: ProductEntity;
  };
};

export function ProductDetailScreen() {
  const navigation = useNavigation();

  const { product } = useRoute<RouteProp<Params, 'ProductDetail'>>().params;

  return (
    <S.Wrapper>
      <Glb source={product.glb} />

      <S.BackButton onPress={navigation.goBack}>
        <S.BackButtonIcon name="arrow-back" size={16} />
      </S.BackButton>
    </S.Wrapper>
  );
}
