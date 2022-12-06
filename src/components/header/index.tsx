import { HeaderActions, HeaderContainer } from './style'
import { FaShoppingCart } from 'react-icons/fa'
import { ImLocation } from 'react-icons/im'
import { useTheme } from 'styled-components'

export function Header() {
  const theme = useTheme()

  return (
    <HeaderContainer>
      <img src="logo-coffee-delivery.svg" alt="" />
      <HeaderActions>
        <h3>
          <ImLocation size={22} color={theme.purple} /> Porto Alegre, RS
        </h3>
        <button>
          <FaShoppingCart size={22} color={theme['yellow-dark']} />
        </button>
      </HeaderActions>
    </HeaderContainer>
  )
}
