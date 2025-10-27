import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

import { Image } from '@shared/components/image';

export const Wrapper = styled.View`
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  background-color: ${({ theme }) => theme.color.divider};
  height: ${({ theme }) => theme.spacing.dimensions.height * 0.35}px;
`;

export const ThumbnailImage = styled(Image)`
  flex: 1;
`;
