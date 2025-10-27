import 'styled-components';

import { SchemaColors } from '@theme/color/schemes/types/colors';
import { Spacing } from '@theme/spacing/types/spacing';
import { Typography } from '@theme/typography/types/typography';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    spacing: Spacing;
    color: SchemaColors;
    typography: Typography;
  }
}
