import Header from './components/Header'
import Hero from './components/Hero'
import { GlobalCss, Container } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <Container>
        <Header />
      </Container>
        <Hero />
    </>
  )
}

export default App
