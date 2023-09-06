import {
  ButtonContainer,
  ButtonText,
  ContactContainer,
  Container,
  FormContainer,
  ImageRight,
  Input,
  InputContainer,
  InputsContainer,
  Label,
  Separator,
  TextArea,
  Title,
  TitleContainer,
} from './styled'
import SeparatorImage from '../../assets/images/separator.svg'
import imageRight from '../../assets/images/image 9.jpg'

export default function Contact() {
  return (
    <Container id="contact">
      <ContactContainer data-aos="flip-up">
        <FormContainer data-aos="flip-down">
          <TitleContainer data-aos="flip-up">
            <Title>Entre Em Contato e Faça Sua Reserva</Title>
            <Separator src={SeparatorImage} />
          </TitleContainer>
          <InputsContainer data-aos="flip-down">
            <InputContainer height="95px" width="432px">
              <Label translate="no">Nome</Label>
              <Input type="text" />
            </InputContainer>
            <InputContainer height="95px" width="432px">
              <Label>E-mail</Label>
              <Input type="email" />
            </InputContainer>
            <InputContainer height="251px" width="432px">
              <Label>Mensagem</Label>
              <TextArea maxLength={1000} />
            </InputContainer>
            <ButtonContainer>
              <ButtonText color="#FFF">enviar</ButtonText>
            </ButtonContainer>
          </InputsContainer>
        </FormContainer>
        <ImageRight data-aos="flip-up" src={imageRight} />
      </ContactContainer>
    </Container>
  )
}
