import { styled } from 'styled-components'

type InputContainer = {
  width: string
  height: string
}

export const Container = styled.div`
  width: 100%;
  height: 993px;
  padding-top: 150px;
  display: flex;
  background-color: #f6fbf4;

  @media (max-width: 768px) {
    justify-content: center;
    padding-top: 70px;
    height: 845px;
  }

  @media (max-width: 379px) {
    height: 910px;
  }

  @media (max-width: 298px) {
    height: 950px;
  }
`
export const ContactContainer = styled.div`
  width: 1062px;
  height: 727px;
  margin: 0 auto;
  display: flex;

  @media (max-width: 1100px) {
    margin-left: 70px;
  }

  @media (max-width: 768px) {
    justify-content: center;
    width: 768px;
    margin-left: 0;
  }

  @media (max-width: 710px) {
    width: 100%;
  }
`

export const FormContainer = styled.div`
  width: 432px;
  height: 727px;
  margin-right: 198px;

  @media (max-width: 1100px) {
    margin-right: 65px;
  }

  @media (max-width: 768px) {
    width: 668px;
    margin-right: 0;
  }

  @media (max-width: 710px) {
    width: 80%;
  }
`

export const TitleContainer = styled.div`
  width: 342px;
  height: 114px;
  margin-bottom: 39px;

  @media (max-width: 768px) {
    width: 604px;
    height: 66px;
  }

  @media (max-width: 710px) {
    width: 100%;
    height: auto;
  }
`
export const Title = styled.h2`
  color: #064635;
  font-family: 'Playfair Display';
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 342px;
  margin-bottom: 14px;
  height: 96px;

  @media (max-width: 768px) {
    width: 604px;
    height: auto;
  }

  @media (max-width: 710px) {
    width: 100%;
  }
`
export const Separator = styled.img`
  @media (max-width: 768px) {
    width: 88px;
  }
`

export const InputsContainer = styled.form`
  width: 432px;
  height: 574px;
  display: flex;
  flex-direction: column;
  row-gap: 27px;

  @media (max-width: 768px) {
    width: 668px;
  }

  @media (max-width: 710px) {
    width: 100%;
  }
`
export const InputContainer = styled.div<InputContainer>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-bottom: 1px solid #064635;

  @media (max-width: 768px) {
    width: 668px;
  }

  @media (max-width: 710px) {
    width: 100%;
  }
`
export const Label = styled.label`
  color: #064635;
  font-family: Nunito;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 18px;
`
export const Input = styled.input`
  width: 432px;
  height: 52px;
  border: none;
  outline: none;
  color: #f0bb62;
  font-family: 'Nunito';
  background: #f6fbf4;
  font-size: 16px;

  @media (max-width: 768px) {
    width: 668px;
  }

  @media (max-width: 710px) {
    width: 100%;
  }
`
export const TextArea = styled.textarea`
  width: 432px;
  height: 208px;
  border: none;
  outline: none;
  color: #f0bb62;
  font-family: 'Nunito';
  background: #f6fbf4;
  font-size: 16px;

  @media (max-width: 768px) {
    width: 668px;
  }

  @media (max-width: 710px) {
    width: 100%;
  }
`
export const ImageRight = styled.img`
  box-shadow: 0px 4px 8px 0px rgba(6, 70, 53, 0.25);

  @media (max-width: 1100px) {
    width: 30%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export const ButtonContainer = styled.button`
  width: 432px;
  height: 52px;
  margin: 0;
  background-color: #064635;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  text-transform: uppercase;
  border: none;
  box-shadow: 0px 4px 8px 0px rgba(6, 70, 53, 0.25);
  transition: 0.5s;

  &:hover {
    height: 70px;
  }

  @media (max-width: 768px) {
    width: 668px;
  }

  @media (max-width: 710px) {
    width: 100%;
  }
`

export const ButtonText = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: ${(props) => props.color};
  font-family: 'Nunito', sans-serif;
`
