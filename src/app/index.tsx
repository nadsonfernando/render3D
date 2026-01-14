import { useLayoutEffect } from 'react';

import React from 'react';

import * as SplashScreen from 'expo-splash-screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Theme } from '@theme/index';
import { AppRoute } from '@app/route';

SplashScreen.preventAutoHideAsync();

export function App() {
  useLayoutEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Theme>
        <AppRoute />
      </Theme>
    </GestureHandlerRootView>
  );
}
