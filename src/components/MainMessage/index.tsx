import TypeWriterEffect from '../TypeWriterEffect';
import { StyledMainMessageContainer } from './styled';

export default function MainMessage() {
  return (
    <StyledMainMessageContainer>
      <TypeWriterEffect strings={"Hey, what's up?✌️"} />
      <TypeWriterEffect
        strings={['Welcome to my portfolio!', "I'm a fullstack developer."]}
        delay={70}
        loop={true}
        deleteSpeed={20}
      />
    </StyledMainMessageContainer>
  );
}
