import { PropsWithChildren } from 'react';
import * as S from './index.styles';
import { SchemaColors } from '@theme/color/schemes/types/colors';

export interface TextProps extends PropsWithChildren {
  color: keyof SchemaColors;
  variation: 'xs-r' | 'sm-r' | 'lg-r' | 'xs-b' | 'sm-b' | 'lg-b';
}

export function Text({ children, color, variation, ...props }: TextProps) {
  return (
    <S.Wrapper {...props}>
      <S.Label color={color} variation={variation}>
        {children}
      </S.Label>
    </S.Wrapper>
  );
}
