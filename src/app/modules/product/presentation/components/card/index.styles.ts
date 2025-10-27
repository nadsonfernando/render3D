import styled from 'styled-components/native';

export const Wrapper = styled.View`
  padding: ${({ theme }) => theme.spacing.padding.sm}px;
  background-color: ${({ theme }) => theme.color.background};
  border-radius: ${({ theme }) => theme.spacing.borderRadius.lg}px;

  shadow-offset: 0px 3px;
  shadow-opacity: 0.29;
  shadow-radius: 4.65px;
  shadow-color: ${({ theme }) => theme.color.shadow};
`;
