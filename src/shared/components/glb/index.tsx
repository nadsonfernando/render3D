import { useWindowDimensions } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

import * as S from './index.styles';

import {
  FilamentScene,
  FilamentView,
  DefaultLight,
  Model,
  Camera,
  BufferSource,
  useCameraManipulator,
} from 'react-native-filament';
import { Fragment } from 'react';

interface GlbProps {
  source: BufferSource;
}

function GlbContent({ source }: { source: BufferSource }) {
  const { width, height } = useWindowDimensions();

  const cameraManipulator = useCameraManipulator({
    orbitHomePosition: [0, 0, 6],
    targetPosition: [0, 0, 0],
    orbitSpeed: [0.01, 0.01],
    zoomSpeed: [0.1],
  });

  const panGesture = Gesture.Pan()
    .onBegin(event => {
      const yCorrected = height - event.y;
      cameraManipulator?.grabBegin(event.x, yCorrected, false);
    })
    .onUpdate(event => {
      const yCorrected = height - event.y;
      cameraManipulator?.grabUpdate(event.x, yCorrected);
    })
    .onEnd(() => {
      cameraManipulator?.grabEnd();
    });

  const pinchGesture = Gesture.Pinch().onUpdate(event => {
    const centerX = event.focalX;
    const centerY = height - event.focalY;
    const zoomDelta = (1 - event.scale) * 5;
    cameraManipulator?.scroll(centerX, centerY, zoomDelta);
  });

  const composedGesture = Gesture.Simultaneous(panGesture, pinchGesture);

  const handleZoomIn = () => {
    cameraManipulator?.scroll(width / 2, height / 2, -1);
  };

  const handleZoomOut = () => {
    cameraManipulator?.scroll(width / 2, height / 2, 1);
  };

  return (
    <Fragment>
      <GestureDetector gesture={composedGesture}>
        <FilamentView style={{ flex: 1 }}>
          <Camera cameraManipulator={cameraManipulator} />
          <DefaultLight />
          <Model source={source} transformToUnitCube />
        </FilamentView>
      </GestureDetector>

      <S.ZoomControls>
        <S.ZoomButton onPress={handleZoomIn}>
          <S.ZoomButtonText>+</S.ZoomButtonText>
        </S.ZoomButton>

        <S.ZoomButton onPress={handleZoomOut}>
          <S.ZoomButtonText>−</S.ZoomButtonText>
        </S.ZoomButton>
      </S.ZoomControls>
    </Fragment>
  );
}

export function Glb({ source, ...props }: GlbProps) {
  return (
    <S.Wrapper {...props}>
      <FilamentScene>
        <GlbContent source={source} />
      </FilamentScene>
    </S.Wrapper>
  );
}
