import { ButtonContainer, ButtonText } from './styled'

type props = {
  buttonText: string
  background: string
  width: string
  fontSize: string
  color: string
  margin?: string
  boxShadow: string
  type?: 'submit' | 'button'
}

const DefaultButton = ({
  buttonText,
  background,
  color,
  fontSize,
  width,
  margin,
  boxShadow,
  type,
}: props) => {
  return (
    <ButtonContainer
      background={background}
      width={width}
      margin={margin}
      boxShadow={boxShadow}
      type={type}
    >
      <ButtonText fontSize={fontSize} color={color}>
        {buttonText}
      </ButtonText>
    </ButtonContainer>
  )
}

export default DefaultButton
