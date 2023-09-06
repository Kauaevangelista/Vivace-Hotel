import {
  Container,
  ContainerLeft,
  ContainerRight,
  Logo,
  TextMain,
  TextSecondary,
  NavigationContainer,
  LinksNav,
  TextNav,
  MaskImage,
  ImageStart,
  ButtonContainer,
  ButtonText,
  ButtonContainerTwo,
  ButtonTextTwo,
} from './styled'

import imageStart from '../../assets/images/Vector.jpg'

export const Start = () => {
  return (
    <Container>
      <ContainerLeft>
        <Logo>VIVACE</Logo>
        <TextMain>O Descanso Que Você Merece</TextMain>
        <TextSecondary>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </TextSecondary>
        <ButtonContainer>
          <ButtonText color="#064635">faça sua reserva</ButtonText>
        </ButtonContainer>
      </ContainerLeft>
      <ContainerRight>
        <NavigationContainer>
          <LinksNav>
            <TextNav href="#about" translate="no">
              Sobre
            </TextNav>
            <TextNav href="#rooms">Quartos</TextNav>
            <TextNav href="#contact">Contato</TextNav>
          </LinksNav>
          <ButtonContainerTwo>
            <ButtonTextTwo color="#FFF">reservar</ButtonTextTwo>
          </ButtonContainerTwo>
        </NavigationContainer>
        <MaskImage>
          <ImageStart src={imageStart} />
        </MaskImage>
      </ContainerRight>
    </Container>
  )
}

export default Start
