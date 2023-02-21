import Header from '@/components/Header';
import { ThemeProvider } from 'styled-components';
import TypeWriter from 'typewriter-effect';

const theme = {
  colorPalette: {
    headerColor: '#212336',
    // backgroundColor: #23263a, default setted on GlobalStyles file
    primaryColor: '#ff4a57',
  }
}

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <TypeWriter
        onInit={(typewriter) => {
          typewriter
            .changeDelay(50)
            .typeString("Hey, what's up?✌️")
            .pauseFor(1000)
            .deleteAll(10)
            .typeString("Welcome to my portfolio!")
            .pauseFor(1000)
            .deleteAll(10)
            .typeString("I'm a FullStack Developer.")
            .start()
        }}
      />
    </ThemeProvider>
  )
}
