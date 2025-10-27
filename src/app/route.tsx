import { Route, Stack } from '@core/route';

import ProductRoute from '@app/modules/product/presentation/route';

export function AppRoute() {
  return (
    <Route>
      <Stack.Navigator
        initialRouteName={ProductRoute.Enums.ID}
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name={ProductRoute.Enums.ID} component={ProductRoute.Component} />
      </Stack.Navigator>
    </Route>
  );
}
