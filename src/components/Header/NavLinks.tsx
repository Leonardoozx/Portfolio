import TypeWriterEffect from '../TypeWriterEffect';
import { StyledNavLinks } from './styled';

export default function NavLinks() {
  return (
    <StyledNavLinks>
      <a className="header-links" href="#">
        <TypeWriterEffect strings={'Home'} />
      </a>
      <a className="header-links" href="#">
        <TypeWriterEffect strings={'About'} />
      </a>
      <a className="header-links" href="#">
        <TypeWriterEffect strings={'Projects'} />
      </a>
    </StyledNavLinks>
  );
}
