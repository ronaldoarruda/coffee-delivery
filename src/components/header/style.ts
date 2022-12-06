import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 10rem;
`

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;

  gap: 12px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    width: 2.375rem;
    height: 2.375rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme['yellow-light']};
  }

  h3 {
    display: flex;
    align-items: center;
    font-size: 0.8rem;
    font-weight: 400;
    color: ${(props) => props.theme['purple-dark']};
    border-radius: 6px;
    padding: 0.5rem;
    gap: 0.25rem;

    background-color: ${(props) => props.theme['purble-light']};
    width: 9rem;
  }
`
