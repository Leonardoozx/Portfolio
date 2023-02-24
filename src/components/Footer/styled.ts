import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 40px;
  background-color: ${({ theme }) => theme.colorPalette.headerColor};
`;
