import { ThemeProvider } from 'styled-components'
import React, { createContext, useReducer } from 'react'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { produce } from 'immer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home'
import { Request } from './pages/Request'

export interface ProductsType {
  id: number
  name: string
  type: string
  img: string
  details: string
  amount: number
  value: number
}

interface CartType {
  products: ProductsType[]
  value: number
  amount: number
  shipping: number
}

interface CoffeeStateType {
  products: ProductsType[]
  cart: CartType
}

interface CoffeeContextType {
  coffee: CoffeeStateType
  dispatch: React.Dispatch<any>
}

export const CoffeeContext = createContext({} as CoffeeContextType)

export type CoffeeActionType = {
  type: 'INCREMENT' | 'DECREMENT' | 'PUTINCART'
  payload: any
}

export function CoffeeReducer(
  state: CoffeeStateType,
  action: CoffeeActionType,
) {
  switch (action.type) {
    case 'INCREMENT': {
      return produce(state, (draft) => {
        const coffeeAtivatedIndex = draft.products.findIndex((product) => {
          return product.id === action.payload.id
        })
        const coffeeAtivated = draft.products[coffeeAtivatedIndex]
        coffeeAtivated.amount++
      })
    }
    case 'DECREMENT': {
      return produce(state, (draft) => {
        const coffeeActivatedIndex = draft.products.findIndex((product) => {
          return product.id === action.payload.id
        })
        const coffeeActivated = draft.products[coffeeActivatedIndex]
        if (coffeeActivated.amount > 1) {
          coffeeActivated.amount--
        }
      })
    }
    case 'PUTINCART': {
      return produce(state, (draft) => {
        draft.cart.products.push(action.payload.coffee)
      })
    }
    default:
      return state
  }
}

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  {
    path: '/request',
    element: <Request />,
  },
])

export function App() {
  const coffeeInitalValue = {
    products: [
      {
        id: 1,
        name: 'Expresso Tradicional',
        type: 'TRADICIONAL',
        img: 'expresso-tradicional.png',
        details: 'O tradicional caf?? feito com ??gua quente e gr??os mo??dos',
        amount: 1,
        value: 9.99,
      },
      {
        id: 2,
        name: 'Expresso Americano',
        type: 'TRADICIONAL',
        img: 'expresso-americano.png',
        details: 'Expresso dilu??do, menos intenso que o tradicional',
        amount: 1,
        value: 9.99,
      },
      {
        id: 3,
        name: 'Expresso Cremoso',
        type: 'TRADICIONAL',
        img: 'expresso-cremoso.png',
        details: 'Caf?? expresso tradicional com espuma cremosa',
        amount: 1,
        value: 9.99,
      },
      {
        id: 4,
        name: 'Expresso Gelado',
        type: 'GELADO',
        img: 'expresso-gelado.png',
        details: 'Bebida preparada com caf?? expresso e cubos de gelo',
        amount: 1,
        value: 9.99,
      },
      {
        id: 5,
        name: 'Caf?? com Leite',
        type: 'COM LEITE',
        img: 'cafe-com-leite.png',
        details: 'Meio a meio de expresso tradicional com leite vaporizado',
        amount: 1,
        value: 9.99,
      },
      {
        id: 6,
        name: 'Latte',
        type: 'COM LEITE',
        img: 'latte.png',
        details:
          'Uma dose de caf?? expresso com o dobro de leite e espuma cremosa',
        amount: 1,
        value: 9.99,
      },
      {
        id: 7,
        name: 'Capuccino',
        type: 'COM LEITE',
        img: 'capuccino.png',
        details:
          'Bebida com canela feita de doses iguais de caf??, leite e espuma',
        amount: 1,
        value: 9.99,
      },
      {
        id: 8,
        name: 'Macchiato',
        type: 'COM LEITE',
        img: 'macchiato.png',
        details:
          'Caf?? expresso misturado com um pouco de leite quente e espuma',
        amount: 1,
        value: 9.99,
      },
      {
        id: 9,
        name: 'Mocaccino',
        type: 'COM LEITE',
        img: 'mocaccino.png',
        details: 'Caf?? expresso com calda de chocolate, pouco leite e espuma',
        amount: 1,
        value: 9.99,
      },
      {
        id: 10,
        name: 'Chocolate Quente',
        type: 'COM LEITE',
        img: 'chocolate-quente.png',
        details: 'Bebida feita com chocolate dissolvido no leite quente e caf??',
        amount: 1,
        value: 9.99,
      },
      {
        id: 11,
        name: 'Cubano',
        type: 'ALCO??LICO',
        img: 'cubano.png',
        details:
          'Drink gelado de caf?? expresso com rum, creme de leite e hortel??',
        amount: 1,
        value: 9.99,
      },
      {
        id: 12,
        name: 'Havaiano',
        type: 'ESPECIAL',
        img: 'havaiano.png',
        details: 'Bebida adocicada preparada com caf?? e leite de coco',
        amount: 1,
        value: 9.99,
      },
      {
        id: 13,
        name: '??rabe',
        type: 'ESPECIAL',
        img: 'arabe.png',
        details: 'Bebida preparada com gr??os de caf?? ??rabe e especiarias',
        amount: 1,
        value: 9.99,
      },
      {
        id: 14,
        name: 'Irland??s',
        type: 'ALCO??LICO',
        img: 'irlandes.png',
        details: 'Bebida a base de caf??, u??sque irland??s, a????car e chantilly',
        amount: 1,
        value: 9.99,
      },
    ],

    cart: {
      products: [],
      value: 0,
      amount: 0,
      shipping: 0,
    },
  }

  const [coffee, dispatch] = useReducer(CoffeeReducer, coffeeInitalValue)

  return (
    <ThemeProvider theme={defaultTheme}>
      <CoffeeContext.Provider value={{ coffee, dispatch }}>
        <RouterProvider router={router} />
        <GlobalStyle />
      </CoffeeContext.Provider>
    </ThemeProvider>
  )
}

export default App
