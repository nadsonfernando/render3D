import { Spacing } from '@theme/spacing/types/spacing';
import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const spacing: Spacing = {
  padding: {
    xs: 6,
    sm: 10,
    lg: 22,
  },
  margin: {
    xs: 8,
    sm: 12,
    lg: 22,
  },
  borderRadius: {
    xs: 2,
    sm: 4,
    lg: 14,
  },

  dimensions: {
    height,
    width,
  },
};
