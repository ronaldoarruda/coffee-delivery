import {
  CoffeeListContainer,
  Card,
  CardContent,
  ShoppingCard,
  Interaction,
  SoSoButton,
  ButtonCart,
  SpanCard,
  ActionButton,
  ItemCounter,
  CoffeeCard,
  TitleCoffee,
} from './style'

import { Plus, Minus, ShoppingCart } from 'phosphor-react'
import { useTheme } from 'styled-components'

export function CoffeeList() {
  const theme = useTheme()

  const coffees = [
    {
      id: 1,
      name: 'Expresso Tradicional',
      type: 'TRADICIONAL',
      img: 'expresso-tradicional.png',
      details: 'O tradicional café feito com água quente e grãos moídos',
      valor: 9.99,
    },
    {
      id: 2,
      name: 'Expresso Americano',
      type: 'TRADICIONAL',
      img: 'expresso-americano.png',
      details: 'Expresso diluído, menos intenso que o tradicional',
      valor: 9.99,
    },
    {
      id: 3,
      name: 'Expresso Gelado',
      type: 'GELADO',
      img: 'expresso-gelado.png',
      details: 'Bebida preparada com café expresso e cubos de gelo',
      valor: 9.99,
    },
    {
      id: 4,
      name: 'Café com Leite',
      type: 'COM LEITE',
      img: 'cafe-com-leite.png',
      details: 'Meio a meio de expresso tradicional com leite vaporizado',
      valor: 9.99,
    },
    {
      id: 5,
      name: 'Latte',
      type: 'COM LEITE',
      img: 'latte.png',
      details:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      valor: 9.99,
    },
  ]

  return (
    <CoffeeListContainer>
      <TitleCoffee>Nossos cafés</TitleCoffee>
      <CoffeeCard>
        {coffees.map((coffee) => {
          return (
            <Card key={coffee.id}>
              <CardContent>
                <img src={coffee.img} alt="asdasd" />
                <h4>{coffee.type}</h4>
                <h3>{coffee.name}</h3>
                <span>{coffee.details}</span>
              </CardContent>
              <ShoppingCard>
                <SpanCard>
                  <pre>R$</pre>
                  {coffee.valor}
                </SpanCard>
                <Interaction>
                  <SoSoButton>
                    <ActionButton>
                      <Minus size={14} color={theme.purple} />
                    </ActionButton>
                    <ItemCounter>1</ItemCounter>
                    <ActionButton>
                      <Plus size={14} color={theme.purple} />
                    </ActionButton>
                  </SoSoButton>
                  <ButtonCart>
                    <ShoppingCart
                      weight="fill"
                      color={theme['base-card']}
                      size={20}
                    />
                  </ButtonCart>
                </Interaction>
              </ShoppingCard>
            </Card>
          )
        })}
      </CoffeeCard>
    </CoffeeListContainer>
  )
}
