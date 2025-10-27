import { ImageResizeMode, ImageSourcePropType } from 'react-native';

import * as S from './index.styles';

interface RatingProps {
  value: string | number;
}

export function Rating({ value, ...props }: RatingProps) {
  return (
    <S.Wrapper {...props}>
      <S.Star name="star" size={18} />

      <S.Value color="alert" variation="sm-b">
        {value}
      </S.Value>
    </S.Wrapper>
  );
}
