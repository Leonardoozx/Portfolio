import TypeWriterEffect from '@/components/TypeWriterEffect';
import TypeWriter from 'typewriter-effect';

export default function Home() {
  return (
    <div>
      <TypeWriterEffect strings={"Hey, what's up?✌️"} />
      <TypeWriter
        onInit={(typewriter) => {
          typewriter
            .changeDelay(50)
            .typeString('Welcome to my portfolio!')
            .pauseFor(1000)
            .deleteAll(10)
            .typeString("I'm a FullStack Developer.")
            .start();
        }}
      />
    </div>
  );
}
