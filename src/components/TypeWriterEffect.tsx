import TypeWriter from 'typewriter-effect';

interface ITypeWriterEffect {
  strings: string | string[];
  cursor?: string;
  delay?: number | 'natural';
  loop?: boolean;
}

export default function TypeWriterEffect({
  strings,
  cursor = '',
  delay = 70,
  loop = false,
}: ITypeWriterEffect) {
  return (
    <TypeWriter
      options={{
        cursor,
        autoStart: true,
        strings,
        delay,
        loop,
      }}
    />
  );
}
