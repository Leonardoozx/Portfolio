import Image from "next/image";
import { StyledHeader, StyledImagesContainer, StyledNav } from "./styled";

export default function Header() {
  return (
    <StyledHeader>
      <h2>Leonardo G. Urci</h2>
      <StyledNav>
        <div>
        <a className="header-links" href="#">{"<Home />"}</a>
        <a className="header-links" href="#">{"<About />"}</a>
        <a className="header-links" href="#">{"<Projects />"}</a>
        </div>
        <StyledImagesContainer>
          <Image src="https://imgur.com/sHEHc7v.png" alt="LinkedIn" width={25} height={25} />
          <Image src="https://imgur.com/ZsNt1NJ.png" alt="GitHub" width={25} height={25} />
        </StyledImagesContainer>
      </StyledNav>

    </StyledHeader>
  );
}
