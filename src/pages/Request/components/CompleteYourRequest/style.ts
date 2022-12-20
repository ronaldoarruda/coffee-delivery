import styled from 'styled-components'

export const CompleteYourRequestContainer = styled.form`
  background-color: grey;
  color: white;
`

export const TagComplete = styled.h2`
  font-size: 18px;
  font-family: 'Baloo 2', cursive;
  line-height: 130%;
  font-weight: 700;

  color: ${(props) => props.theme['base-subtitle']};
`
