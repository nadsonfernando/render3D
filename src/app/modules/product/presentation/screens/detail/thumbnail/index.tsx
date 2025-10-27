import * as S from './index.styles';

interface ThumbnailProps {
  uri: string;
}

export function Thumbnail({ uri }: ThumbnailProps) {
  return (
    <S.Wrapper>
      <S.ThumbnailImage source={{ uri }} resizeMode="contain" />
    </S.Wrapper>
  );
}
