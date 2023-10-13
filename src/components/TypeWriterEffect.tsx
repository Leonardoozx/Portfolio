import TypeWriter from 'typewriter-effect';

interface ITypeWriterEffect {
  strings: string | string[];
  cursor?: string;
  delay?: number | 'natural';
  loop?: boolean;
  deleteSpeed?: number | 'natural';
}

export default function TypeWriterEffect({
  strings,
  cursor = '',
  delay = 70,
  loop = false,
  deleteSpeed = 'natural',
}: ITypeWriterEffect) {
  return (
    <TypeWriter
      options={{
        deleteSpeed,
        cursor,
        autoStart: true,
        strings,
        delay,
        loop,
      }}
    />
  );
}
