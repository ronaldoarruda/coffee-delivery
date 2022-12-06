import { useTheme } from 'styled-components'
import {
  Advantage,
  Advantages,
  HeroContainer,
  HeroContent,
  SpanAboutDelivery,
} from './style'

export function Hero() {
  const theme = useTheme()

  const advantagesSpan = [
    {
      id: 1,
      text: 'Compra simples e segura',
      img: 'shopping-cart-icon.svg',
      color: theme['yellow-dark'],
    },
    {
      id: 2,
      text: 'Entrega rápida e rastreada',
      img: 'clock-icon.svg',
      color: theme.yellow,
    },
    {
      id: 3,
      text: 'Embalagem mantém o café intacto',
      img: 'box-icon.svg',
      color: theme['base-text'],
    },
    {
      id: 4,
      text: 'O café chega fresquinho até você',
      img: 'coffee-icon.svg',
      color: theme.purple,
    },
  ] // TODO: fazer a implementação dos icones utilizandoa lib do phosphor-react

  return (
    <HeroContainer>
      <HeroContent>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <SpanAboutDelivery>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </SpanAboutDelivery>
        <Advantages>
          {advantagesSpan.map((object) => {
            return (
              <Advantage key={object.id} color={object.color}>
                <img src={object.img} alt="" />
                <span>{object.text}</span>
              </Advantage>
            )
          })}
        </Advantages>
      </HeroContent>
      <img src="hero-coffee-delivery.svg" alt="" />
    </HeroContainer>
  )
}
