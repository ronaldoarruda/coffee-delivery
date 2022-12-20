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
import { useContext } from 'react'
import { CoffeeContext, ProductsType } from '../../../../App'

export function CoffeeList() {
  const theme = useTheme()

  const { coffee, dispatch } = useContext(CoffeeContext)

  function increment(id: number) {
    dispatch({
      type: 'INCREMENT',
      payload: { id },
    })
  }

  function decrement(id: number) {
    dispatch({
      type: 'DECREMENT',
      payload: { id },
    })
  }

  function putInCart(coffee: ProductsType) {
    dispatch({
      type: 'PUTINCART',
      payload: { coffee },
    })
  }

  return (
    <CoffeeListContainer>
      <TitleCoffee>Nossos cafés</TitleCoffee>
      <CoffeeCard>
        {coffee.products.map((coffee) => {
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
                  {coffee.value}
                </SpanCard>
                <Interaction>
                  <SoSoButton>
                    <ActionButton onClick={() => decrement(coffee.id)}>
                      <Minus size={14} color={theme.purple} />
                    </ActionButton>
                    <ItemCounter>{coffee.amount}</ItemCounter>
                    <ActionButton onClick={() => increment(coffee.id)}>
                      <Plus size={14} color={theme.purple} />
                    </ActionButton>
                  </SoSoButton>
                  <ButtonCart onClick={() => putInCart(coffee)}>
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
