import Image from "next/image";
import { StyledHeader, StyledImagesContainer, StyledNav, StyledNavLinks } from "./styled";

export default function Header() {
  return (
    <StyledHeader>
      <h2 id="name">Leonardo G. Urci</h2>
      <StyledNav>

        {/* all links to other page paths, such as '/', '/about' and '/projects' */}
        <StyledNavLinks>
          <a className="header-links" href="#">{"<Home />"}</a>
          <a className="header-links" href="#">{"<About />"}</a>
          <a className="header-links" href="#">{"<Projects />"}</a>
        </StyledNavLinks>

        {/* all links to other social medias */}
        <StyledImagesContainer>
          {/* LinkedIn link */}
          <a href="https://linkedin.com/in/leonardoozx" target="_blank" rel="noopener noreferrer">
            <Image src="https://imgur.com/KHYYe8Q.png" alt="LinkedIn" width={25} height={25} className="social-media-img" />
          </a>
          {/* GitHub link */}
          <a href="https://github.com/Leonardoozx" target="_blank" rel="noopener noreferrer">
            <Image src="https://imgur.com/TY8NF0x.png" alt="GitHub" width={25} height={25} className="social-media-img" />
          </a>
        </StyledImagesContainer>
      </StyledNav>
    </StyledHeader>
  );
}
