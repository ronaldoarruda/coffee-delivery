import { Header } from '../../components/header'
import { Hero } from './components/Hero'
import { CoffeeList } from './components/CoffeeList'
import { HomeContainer } from './style'

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <Hero />
      <CoffeeList />
    </HomeContainer>
  )
}
