import { HeaderActions, HeaderContainer } from './style'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { useTheme } from 'styled-components'

export function Header() {
  const theme = useTheme()

  return (
    <HeaderContainer>
      <img src="logo-coffee-delivery.svg" alt="" />
      <HeaderActions>
        <h3>
          <MapPin size={22} color={theme.purple} weight="fill" /> Porto Alegre,
          RS
        </h3>
        <button>
          <ShoppingCart size={22} color={theme['yellow-dark']} weight="fill" />
        </button>
      </HeaderActions>
    </HeaderContainer>
  )
}
