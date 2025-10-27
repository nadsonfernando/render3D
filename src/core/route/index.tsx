import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { PropsWithChildren } from 'react';

export const Stack = createNativeStackNavigator();

interface RouteProps extends PropsWithChildren {}

export function Route({ children }: RouteProps) {
  return <NavigationContainer>{children}</NavigationContainer>;
}
