// import Image from "next/image";
import { StyledHeader, StyledImagesContainer, StyledNav } from "./styled";

export default function Header() {
  return (
    <StyledHeader>
      <h2>Leonardo G. Urci</h2>
      <StyledNav>
        <a className="header-links" href="#">{"<Home />"}</a>
        <a className="header-links" href="#">{"<About />"}</a>
        <a className="header-links" href="#">{"<Projects />"}</a>
      </StyledNav>
      <StyledImagesContainer>
          {/* <Image src="##" alt="LinkedIn" width={500} height={500} /> */}
          {/* <Image src="##" alt="GitHub" width={500} height={500} /> */}
      </StyledImagesContainer>
    </StyledHeader>
  );
}
