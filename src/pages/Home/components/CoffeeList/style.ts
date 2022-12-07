import styled from 'styled-components'

export const CoffeeListContainer = styled.main`
  display: flex;
  flex-direction: column;

  padding: 32px 160px;
  gap: 54px;
`
export const TitleCoffee = styled.h2`
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  font-size: 32px;
  color: ${(props) => props.theme['base-subtitle']};
  line-height: 130%;
`

export const CoffeeCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`

export const Card = styled.section`
  display: flex;
  align-items: center;
  border-radius: 6px 36px;

  flex-direction: column;
  background-color: ${(props) => props.theme['base-card']};
  width: 256px;

  padding: 20px 24px;

  gap: 33px;
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  margin-top: -2.5rem;

  gap: 0.5rem;

  img {
    width: 120px;
  }

  h4 {
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 100px;

    font-size: 10px;
    font-weight: 700;
    line-height: 130%;

    width: 81px;
    height: 21px;

    margin-top: 4px;
    margin-bottom: 8px;

    color: ${(props) => props.theme['yellow-dark']};
    background-color: ${(props) => props.theme['yellow-light']};
  }

  h3 {
    font-family: 'Baloo 2', cursive;
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 20px;
    font-weight: 700;
    line-height: 130%;
  }

  span {
    color: ${(props) => props.theme['base-label']};
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    text-align: center;
  }
`

export const ShoppingCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 23px;
`

export const SpanCard = styled.span`
  display: flex;
  align-items: flex-end;
  gap: 0.15rem;

  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  font-size: 20px;
  color: ${(props) => props.theme['base-text']};

  pre {
    font-weight: 100;
    font-size: 14px;
    font-family: 'Roboto';
  }
`

export const SoSoButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme['base-button']};

  border-radius: 6px;

  gap: 5.53px;
  width: 72px;
  height: 38px;

  button {
    width: 2rem;
    cursor: pointer;

    background-color: ${(props) => props.theme['base-button']};
    border: none;
  }
`

export const Interaction = styled.div`
  display: flex;
  gap: 0.5rem;

  button {
  }
`

export const ButtonCart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme['purple-dark']};
  width: 38px;
  height: 38px;
  border: none;
  border-radius: 6px;
`
export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ItemCounter = styled.h3`
  font-size: 16px;
  color: ${(props) => props.theme['base-title']};
  font-weight: 400;
`
