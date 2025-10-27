import { useLayoutEffect } from 'react';

import React from 'react';

import * as SplashScreen from 'expo-splash-screen';

import { Theme } from '@theme/index';
import { AppRoute } from '@app/route';
import { Query } from '@core/providers/query';

SplashScreen.preventAutoHideAsync();

export function App() {
  useLayoutEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Query>
      <Theme>
        <AppRoute />
      </Theme>
    </Query>
  );
}
