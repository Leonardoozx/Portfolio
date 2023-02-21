import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  height: 170px;
  background-color: ${({ theme }) => theme.colorPalette.headerColor};

  @media screen and (min-width: 700px) {
    flex-direction: row;
    padding: 10px 10%;
    justify-content: space-between;
    height: 52%;
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
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  width: 100%;
  height: 100px;
  gap: 10px;

  @media screen and (min-width: 700px) {
    width: 55%;
    flex-direction: row;
  }
`;

export const StyledNavLinks = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  width: 100%;
  gap: 5px;

  @media screen and (min-width: 500px) {
    flex-direction: row;
  }

  @media screen and (min-width: 900px) {
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
      font-size: 22.5px;
    }
    
  }
`;

export const StyledImagesContainer = styled.div`
  display: flex;
  margin: 0 auto;
  gap: 10px;
  width: 30%;
  justify-content: space-around;

  @media screen and (min-width: 700px) {
    width: fit-content;
    flex-direction: column;
    height: 100%;
    justify-content: center;
  }

  @media screen and (min-width: 1000px) {
    flex-direction: row;
    align-items: center;

    .social-media-img {
      width: 30px;
      height: 30px;
    }
  }
`;
