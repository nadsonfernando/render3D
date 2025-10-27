import { ImageResizeMode, ImageSourcePropType } from 'react-native';

import * as S from './index.styles';

interface ImageProps {
  resizeMode: ImageResizeMode;
  source?: ImageSourcePropType;
}

export function Image({ source, resizeMode, ...props }: ImageProps) {
  return (
    <S.Wrapper {...props}>
      <S.Image source={source} resizeMode={resizeMode} />
    </S.Wrapper>
  );
}
