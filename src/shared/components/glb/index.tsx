import * as S from './index.styles';

import { FilamentScene, FilamentView, DefaultLight, Model, Camera } from 'react-native-filament';

import Source from '@assets/glb/house1.glb';

interface GlbProps {
  source: any;
}

export function Glb({ source, ...props }: GlbProps) {
  return (
    <S.Wrapper {...props}>
      <FilamentScene>
        <FilamentView style={{ flex: 1 }}>
          <DefaultLight />

          <Model source={Source} />
          <Camera />
        </FilamentView>
      </FilamentScene>
    </S.Wrapper>
  );
}
