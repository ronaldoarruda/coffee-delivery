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
      name: 'Expresso Cremoso',
      type: 'TRADICIONAL',
      img: 'expresso-cremoso.png',
      details: 'Café expresso tradicional com espuma cremosa',
      valor: 9.99,
    },
    {
      id: 4,
      name: 'Expresso Gelado',
      type: 'GELADO',
      img: 'expresso-gelado.png',
      details: 'Bebida preparada com café expresso e cubos de gelo',
      valor: 9.99,
    },
    {
      id: 5,
      name: 'Café com Leite',
      type: 'COM LEITE',
      img: 'cafe-com-leite.png',
      details: 'Meio a meio de expresso tradicional com leite vaporizado',
      valor: 9.99,
    },
    {
      id: 6,
      name: 'Latte',
      type: 'COM LEITE',
      img: 'latte.png',
      details:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      valor: 9.99,
    },
    {
      id: 7,
      name: 'Capuccino',
      type: 'COM LEITE',
      img: 'capuccino.png',
      details:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      valor: 9.99,
    },
    {
      id: 8,
      name: 'Macchiato',
      type: 'COM LEITE',
      img: 'macchiato.png',
      details: 'Café expresso misturado com um pouco de leite quente e espuma',
      valor: 9.99,
    },
    {
      id: 9,
      name: 'Mocaccino',
      type: 'COM LEITE',
      img: 'mocaccino.png',
      details: 'Café expresso com calda de chocolate, pouco leite e espuma',
      valor: 9.99,
    },
    {
      id: 10,
      name: 'Chocolate Quente',
      type: 'COM LEITE',
      img: 'chocolate-quente.png',
      details: 'Bebida feita com chocolate dissolvido no leite quente e café',
      valor: 9.99,
    },
    {
      id: 11,
      name: 'Cubano',
      type: 'ALCOÓLICO',
      img: 'cubano.png',
      details:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      valor: 9.99,
    },
    {
      id: 12,
      name: 'Havaiano',
      type: 'ESPECIAL',
      img: 'havaiano.png',
      details: 'Bebida adocicada preparada com café e leite de coco',
      valor: 9.99,
    },
    {
      id: 13,
      name: 'Árabe',
      type: 'ESPECIAL',
      img: 'arabe.png',
      details: 'Bebida preparada com grãos de café árabe e especiarias',
      valor: 9.99,
    },
    {
      id: 14,
      name: 'Irlandês',
      type: 'ALCOÓLICO',
      img: 'irlandes.png',
      details: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
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
