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
        typewriter.typeString('leonardo').start()
        }}
      />
    </ThemeProvider>
  )
}
