import Header from '@/components/Header';
import { ThemeProvider } from 'styled-components';
import TypeWriter from 'typewriter-effect';

const theme = {
  mainColor: 'black'
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
