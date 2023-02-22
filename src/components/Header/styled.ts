import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 60px;
  padding: 10px 10%;
  background-color: ${({ theme }) => theme.colorPalette.headerColor};
  position: relative;

  #name {
    width: 75%;
  }

  @media screen and (min-width: 700px) {
    justify-content: space-between;
  }

  @media screen and (min-width: 900px) {
    #name {
      font-size: 28px;
    }
  }

  @media screen and (min-width: 1600px) {
    padding: 10px 17%;
  }
`;

export const StyledNav = styled.nav`
  position: absolute;
  display: flex;
  gap: 25px;
  flex-direction: column;
  justify-content: center;
  right: 0;
  top: 0;
  width: 30vh;
  height: 30vh;
  background-color: ${({ theme }) => theme.colorPalette.backgroundColor};
  border-radius: 0 0 0 30px;
  box-shadow: 0px 2px 20px 2px rgba(1, 1, 1, 0.08);

  @media screen and (min-width: 800px) {
    gap: 10px;
    position: relative;
    background-color: transparent;
    box-shadow: none;
    display: flex;
    width: 55%;
    height: 100px;
    flex-direction: row;
  }
`;

export const StyledNavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 100%;
  height: 30%;
  gap: 5px;

  @media screen and (min-width: 900px) {
    height: 100%;
    justify-content: space-around;
    flex-direction: row;

    .header-links {
      font-size: 18px;
      padding: 0 10px;
    }
  }

  @media screen and (min-width: 1000px) {
    justify-content: flex-end;
  }

  @media screen and (min-width: 1300px) {
    .header-links {
      font-size: 20px;
    }
  }
`;

export const StyledImagesContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 30%;
  justify-content: space-around;

  @media screen and (min-width: 800px) {
    width: fit-content;
    flex-direction: column;
    height: 100%;
    justify-content: center;
  }
  
  @media screen and (min-width: 1000px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 90px;

    .social-media-img {
      width: 30px;
      height: 30px;
    }
  }
`;
