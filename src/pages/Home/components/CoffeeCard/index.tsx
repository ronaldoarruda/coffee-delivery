import {
  CoffeeCardContainer,
  Card,
  CardContent,
  ShoppingCard,
  Interaction,
  SoSoButton,
  ButtonCart,
  SpanCard,
  ActionButton,
  ItemCounter,
} from './style'

import { Plus, Minus, ShoppingCart } from 'phosphor-react'
import { useTheme } from 'styled-components'

export function CoffeeCard() {
  const theme = useTheme()

  return (
    <CoffeeCardContainer>
      <h1>Nossos cafés</h1>
      <Card>
        <CardContent>
          <img src="expresso-tradicional.png" alt="asdasd" />
          <h4>TRADICIONAL</h4>
          <h3>Expresso Tradicional</h3>
          <span>O tradicional café feito com água quente e grãos moídos</span>
        </CardContent>
        <ShoppingCard>
          <SpanCard>
            <pre>R$</pre>9,99
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
    </CoffeeCardContainer>
  )
}
