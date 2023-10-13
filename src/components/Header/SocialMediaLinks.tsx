import Image from 'next/image';
import { StyledImagesContainer } from './styled';

export default function SocialMediaLinks() {
  return (
    <StyledImagesContainer>
      {/* LinkedIn link */}
      <a
        href="https://linkedin.com/in/leonardoozx"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="https://imgur.com/KHYYe8Q.png"
          alt="LinkedIn"
          width={25}
          height={25}
          className="social-media-img"
        />
      </a>
      {/* GitHub link */}
      <a
        href="https://github.com/Leonardoozx"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="https://imgur.com/TY8NF0x.png"
          alt="GitHub"
          width={25}
          height={25}
          className="social-media-img"
        />
      </a>
    </StyledImagesContainer>
  );
}
