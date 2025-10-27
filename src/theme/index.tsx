import React, { PropsWithChildren, useMemo } from 'react';
import { useColorScheme } from 'react-native';

import { ThemeProvider } from 'styled-components/native';

import { lightSchemaColor } from 'src/theme/color/schemes/light';
import { darkSchemaColor } from 'src/theme/color/schemes/dark';

import { spacing } from 'src/theme/spacing';
import { typography } from 'src/theme/typography';

interface ThemeProps extends PropsWithChildren {}

const schemes = {
  light: lightSchemaColor,
  dark: darkSchemaColor,
};

export function Theme({ children }: ThemeProps) {
  const scheme = useColorScheme();

  const theme = useMemo(() => {
    const color = schemes[scheme || 'light'];

    return {
      color,
      spacing,
      typography,
    };
  }, [scheme]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
