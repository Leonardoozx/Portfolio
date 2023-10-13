import { StyledFooter } from './styled';

export default function Footer() {
  return (
    <StyledFooter>
      <p>
        {'<MadeBy '}
        <a
          href="http://github.com/leonardoozx"
          target="_blank"
          rel="noopener noreferrer"
        >
          {'person="Leonardoozx" />'}
        </a>
      </p>
    </StyledFooter>
  );
}
