import { Header } from '../../components/header'
import { Hero } from './components/Hero'
import { CoffeeCard } from './components/CoffeeCard'
import { HomeContainer } from './style'

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <Hero />
      <CoffeeCard />
    </HomeContainer>
  )
}
