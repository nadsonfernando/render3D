import styled from 'styled-components/native';

import { TextProps } from '@shared/components/text';

export const Wrapper = styled.View``;

export const Label = styled.Text<TextProps>`
  color: ${({ theme, color }) => theme.color[color]};
  font-weight: ${({ theme, variation }) => theme.typography[variation].fontWeight};
  font-size: ${({ theme, variation }) => theme.typography[variation].size}px;
  font-family: ${({ theme, variation }) => theme.typography[variation].fontFamily};
`;
