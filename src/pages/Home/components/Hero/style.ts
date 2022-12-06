import styled from 'styled-components'

export const HeroContainer = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 544px;
  gap: 5rem;

  background-image: url(Background.svg);
  background-position: top;
  background-size: cover;

  padding: 0 10rem;
`

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-style: normal;
    font-size: 48px;
    line-height: 130%;
    width: 600px;
    font-weight: 800;
  }
`

export const Advantages = styled.div`
  width: 600px;
  height: 84px;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  margin-top: 49px;
`
export const Advantage = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  span {
    font-size: 1rem;
    width: 250px;
  }

  img {
    width: 2rem;
    background-color: ${(props) => props.color};
    padding: 0.5rem;
    border-radius: 1000px;
  }
`

export const SpanAboutDelivery = styled.span`
  font-size: 1.25rem;
`
