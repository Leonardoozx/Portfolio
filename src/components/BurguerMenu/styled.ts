import styled from 'styled-components';

export const BurguerMenuButton = styled.button`
  width: 20px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: none;
  font-size: 0;
  background-color: ${({theme}) => theme.colorPalette.backgroundColor};
  position: absolute;
  z-index: 10;
  right: 10%;

  .menu-line {
    border: none;
    background-color: white;
    width: 100%;
    height: 1.8px;
    transition: all 0.3s ease-out;
  }

  /* Styling the three lines to make it an X */
  .close:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  .close:nth-child(2) {
    opacity: 0;
  }

  .close:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }
`;
