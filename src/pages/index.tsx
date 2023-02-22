import TypeWriter from 'typewriter-effect';

export default function Home() {
  return (
    <>
      <TypeWriter
        onInit={(typewriter) => {
          typewriter
            .changeDelay(50)
            .typeString("Hey, what's up?✌🏼")
            .pauseFor(1000)
            .deleteAll(10)
            .typeString("Welcome to my portfolio!")
            .pauseFor(1000)
            .deleteAll(10)
            .typeString("I'm a FullStack Developer.")
            .start()
        }}
      />
    </>
  )
}
