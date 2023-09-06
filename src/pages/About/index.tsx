import {
  AboutText,
  Agroup,
  ButtonContainer,
  ButtonText,
  Container,
  Detail,
  Image,
  KnowMoreContainer,
  MaskIMage,
  Separator,
  Title,
  TitleContainer,
} from './styled'
import image from '../../assets/images/image 4.png'
import separatorImage from '../../assets/images/separator.svg'

export default function About() {
  return (
    <Container data-aos="fade-down-right" id="about">
      <Agroup>
        <MaskIMage>
          <Image src={image} />
        </MaskIMage>
        <KnowMoreContainer data-aos="fade-down-left">
          <TitleContainer>
            <Title>Sobre Nós</Title>
            <Separator src={separatorImage} />
          </TitleContainer>
          <AboutText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AboutText>
          <ButtonContainer>
            <ButtonText color="#064635">saiba mais</ButtonText>
          </ButtonContainer>
        </KnowMoreContainer>
        <Detail />
      </Agroup>
    </Container>
  )
}
