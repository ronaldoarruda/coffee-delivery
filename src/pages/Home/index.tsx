import { Header } from '../../components/header'
import { Hero } from './components/Hero'
import { OurCoffes } from './components/OurCoffees'
import { HomeContainer } from './style'

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <Hero />
      <OurCoffes />
    </HomeContainer>
  )
}
