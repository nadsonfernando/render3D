import { Stack } from '@core/route';

import { ProductListScreen } from '@app/modules/product/presentation/screens/list';
import { ProductDetailScreen } from '@app/modules/product/presentation/screens/detail';

export enum ProductRouteEnums {
  ID = 'PRODUCT',
  LIST = 'PRODUCT_LIST',
  DETAIL = 'PRODUCT_DETAIL',
}

function Component() {
  return (
    <Stack.Navigator
      initialRouteName={ProductRouteEnums.LIST}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ProductRouteEnums.LIST} component={ProductListScreen} />
      <Stack.Screen name={ProductRouteEnums.DETAIL} component={ProductDetailScreen} />
    </Stack.Navigator>
  );
}

export default { Enums: ProductRouteEnums, Component };
