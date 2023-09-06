import { styled } from 'styled-components'

type propsButton = {
  background: string
  width: string
  margin: string | undefined
  boxShadow: string
}

type propsTextButton = {
  fontSize: string
  color: string
}

export const ButtonContainer = styled.button<propsButton>`
  width: ${(props) => props.width};
  height: 52px;
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.background};
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  text-transform: uppercase;
  border: none;
  box-shadow: ${(props) => props.boxShadow};
  transition: 0.5s;
  &:hover {
    height: 70px;
  }
`

export const ButtonText = styled.p<propsTextButton>`
  font-size: 18px;
  font-weight: 400;
  color: #064635;
  font-family: 'Nunito', sans-serif;
`
