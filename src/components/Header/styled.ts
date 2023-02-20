import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  height: 65px;
  border: 1px solid red;
`;

export const StyledNav = styled.nav`
  display: flex;
  height: 100%;
  flex-direction: column;
  border: 1px solid black;
  align-items: center;
  justify-content: space-around;
  
  .header-links {
    letter-spacing: 0.5px;
  }
`;

export const StyledImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;