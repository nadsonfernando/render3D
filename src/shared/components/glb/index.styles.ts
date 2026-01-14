import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
`;

export const ZoomControls = styled.View`
  position: absolute;
  right: 20px;
  bottom: 100px;
  gap: 10px;
`;

export const ZoomButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.color.textPrimary};

  justify-content: center;
  align-items: center;
`;

export const ZoomButtonText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.white};
`;
