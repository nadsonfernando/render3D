import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { ProductRouteEnums } from '@app/modules/product/route';
import { ProductEntity } from '@app/modules/product/domain/entities/product';

type ProductStackParamList = {
  [ProductRouteEnums.DETAIL]: {
    product: ProductEntity;
  };
};

type ProductNavigationProp = NativeStackNavigationProp<ProductStackParamList>;

export function useProductRouteNav() {
  const navigation = useNavigation<ProductNavigationProp>();

  const go = {
    detail(product: ProductEntity) {
      navigation.navigate(ProductRouteEnums.DETAIL, { product });
    },
  };

  return { go };
}
