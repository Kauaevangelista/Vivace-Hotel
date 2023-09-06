import {
  AboutContainer,
  Address,
  AgroupAll,
  ButtonContainer,
  ButtonText,
  Container,
  EmailParagraph,
  ExploreContainer,
  InputContainerNewsLetter,
  InputLabelContainerNewsLetter,
  Logo,
  NavLinksContainer,
  NewsLetterContainer,
  NewsLetterInput,
  NewsLetterLabel,
  NumberParagraph,
  ParagraphExplore,
  Separator,
  Title,
  TitleContainer,
  TitleContainerNewsLetter,
  TitleNewsLetter,
} from './styled'
import separatorImg from '../../assets/images/separator.svg'

function Footer() {
  return (
    <Container>
      <AgroupAll data-aos="zoom-out-down">
        <AboutContainer data-aos="zoom-out-up">
          <Logo>vivace</Logo>
          <Address>Rua Qualquer Uma nº 60, Centro</Address>
          <NumberParagraph>( 11 ) 99999-9999</NumberParagraph>
          <EmailParagraph>contato@pousadavivace.com</EmailParagraph>
        </AboutContainer>
        <ExploreContainer>
          <TitleContainer>
            <Title>Explore</Title>
            <Separator src={separatorImg} />
          </TitleContainer>
          <NavLinksContainer>
            <ParagraphExplore href="#about" width="85px" height="25px">
              Sobre Nós
            </ParagraphExplore>
            <ParagraphExplore href="#rooms" width="130px" height="25px">
              Nossos Quartos
            </ParagraphExplore>
            <ParagraphExplore href="#contact" width="143px" height="25px">
              Faça Sua Reserva
            </ParagraphExplore>
          </NavLinksContainer>
        </ExploreContainer>
        <NewsLetterContainer>
          <TitleContainerNewsLetter>
            <TitleNewsLetter>Não Perca Nossas Novidades</TitleNewsLetter>
            <Separator src={separatorImg} />
          </TitleContainerNewsLetter>
          <InputContainerNewsLetter>
            <InputLabelContainerNewsLetter>
              <NewsLetterLabel>Digite seu melhor email</NewsLetterLabel>
              <NewsLetterInput type="email" />
            </InputLabelContainerNewsLetter>
            <ButtonContainer>
              <ButtonText color="#FFF">enviar</ButtonText>
            </ButtonContainer>
          </InputContainerNewsLetter>
        </NewsLetterContainer>
      </AgroupAll>
    </Container>
  )
}

export default Footer
