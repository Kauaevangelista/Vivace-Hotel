import { styled } from 'styled-components'

type ParagraphAtributes = {
  width: string
  height: string
}

export const Container = styled.div`
  width: 100%;
  height: auto;
  background: #f4eea9;
  padding: 10% 0 13%;

  @media (max-width: 500px) {
    padding-bottom: 20%;
  }

  @media (max-width: 500px) {
    padding-bottom: 25%;
  }
`
export const AgroupAll = styled.div`
  margin: 0 auto;
  width: 77.5%;
  height: auto;
  display: flex;

  @media (max-width: 1385px) {
    flex-wrap: wrap;
  }

  @media (max-width: 1378px) {
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 548.719px;
  }

  @media (max-width: 600px) {
    width: 450px;
  }

  @media (max-width: 500px) {
    width: 381.245px;
  }

  @media (max-width: 425px) {
    width: 336.393px;
  }

  @media (max-width: 370px) {
    width: 286.857px;
  }

  @media (max-width: 310px) {
    width: 251px;
  }
`
export const AboutContainer = styled.div`
  width: 23.8%;
  height: 229px;
  display: flex;
  flex-direction: column;
  row-gap: 27px;
  color: #064635;
  margin-right: 108px;

  @media (max-width: 768px) {
    margin: 0;
    width: 537.417px;
    margin-bottom: 28px;
    border-bottom: 2px solid #064635;
    padding-bottom: 19px;
    height: auto;
  }

  @media (max-width: 600px) {
    width: 450px;
  }

  @media (max-width: 500px) {
    width: 373.393px;
  }

  @media (max-width: 425px) {
    width: 329.464px;
  }

  @media (max-width: 370px) {
    width: 98%;
  }
`
export const Logo = styled.h3`
  font-family: 'Playfair Display';
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 125px;
  height: 48px;
  text-transform: uppercase;
`

export const Address = styled.p`
  color: #064635;
  font-family: 'Nunito';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 252px;
  height: 50px;

  @media (max-width: 1024px) {
    width: 264px;
    height: 20px;
  }

  @media (max-width: 310px) {
    width: 211px;
    height: 50px;
  }
`
export const NumberParagraph = styled(Address)`
  width: 152px;
  height: 25px;
`
export const EmailParagraph = styled(NumberParagraph)`
  width: 234px;
`
export const ExploreContainer = styled(AboutContainer)`
  width: 14%;
  height: 180px;
  margin-right: 127px;
  row-gap: 18px;

  @media (max-width: 768px) {
    margin: 0;
    width: 537.417px;
    margin-bottom: 28px;
    border-bottom: 2px solid #064635;
    padding-bottom: 19px;
    height: auto;
  }

  @media (max-width: 600px) {
    width: 450px;
  }

  @media (max-width: 500px) {
    width: 373.393px;
  }

  @media (max-width: 425px) {
    width: 329.464px;
  }

  @media (max-width: 370px) {
    width: 98%;
  }
`
export const TitleContainer = styled.div`
  width: 90px;
  height: 51px;

  @media (max-width: 1024px) {
    width: 130px;
    height: 63px;
  }
`
export const Title = styled.h3`
  width: 90px;
  height: 33px;
  color: #064635;
  font-family: 'Nunito';
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 1024px) {
    width: 130px;
    font-size: 36px;
    height: 49px;
  }
`
export const Separator = styled.img`
  width: 50px;

  @media (max-width: 768px) {
    width: 82px;
  }
`

export const NavLinksContainer = styled(ExploreContainer)`
  width: 143px;
  height: 111px;

  @media (max-width: 768px) {
    margin: 0;
    width: 143px;
    margin-bottom: 0;
    border-bottom: none;
    padding-bottom: 0;
    height: 111px;
  }
`

export const ParagraphExplore = styled.a<ParagraphAtributes>`
  color: #064635;
  font-family: Nunito;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  text-decoration: none;
  transition: 0.6s;
  border-bottom: 1px solid transparent;
  &:hover {
    border-bottom-color: #064635;
  }
`
export const NewsLetterContainer = styled(ExploreContainer)`
  width: 432px;
  height: 180px;
  row-gap: 37px;
  margin-right: 0;

  @media (max-width: 1378px) {
    margin: 4% auto 0;
  }

  @media (max-width: 768px) {
    margin: 0;
    width: 537.417px;
    margin-bottom: 0;
    border-bottom: none;
    padding-bottom: 0;
    height: 253px;
  }

  @media (max-width: 600px) {
    width: 450px;
  }

  @media (max-width: 500px) {
    width: 373.393px;
  }

  @media (max-width: 425px) {
    width: 329.464px;
  }

  @media (max-width: 370px) {
    width: 98%;
  }
`
export const TitleContainerNewsLetter = styled(NewsLetterContainer)`
  width: 329px;
  height: 48px;
  row-gap: 15px;

  @media (max-width: 768px) {
    margin: 0;
    width: 484.461px;
    height: 59px;
    margin-bottom: 0;
    border-bottom: none;
    padding-bottom: 0;
  }

  @media (max-width: 500px) {
    width: 336.6px;
    height: 108px;
  }

  @media (max-width: 370px) {
    width: 281.143px;
    height: 76px;
  }
`
export const TitleNewsLetter = styled.h3`
  width: 329px;
  height: 33px;
  color: #064635;
  font-family: Nunito;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 768px) {
    width: 484.461px;
    font-size: 36px;
    height: 49px;
  }

  @media (max-width: 600px) {
    font-size: 30px;
  }

  @media (max-width: 500px) {
    width: 336.6px;
    height: 98px;
    font-size: 36px;
  }

  @media (max-width: 370px) {
    width: 100%;
    height: 66px;
    font-size: 24px;
  }
`
export const FormNewsLetterContainer = styled.div`
  width: 100%;
  height: 95px;
  row-gap: 0;
`
export const InputContainerNewsLetter = styled.form`
  width: 432px;
  height: 95px;
  row-gap: 0;
  column-gap: 18px;
  display: flex;
  flex-direction: row;

  @media (max-width: 500px) {
    flex-direction: column;
    width: 373.393px;
    height: 172px;
    column-gap: 0;
    row-gap: 18px;
  }

  @media (max-width: 425px) {
    width: 329.464px;
  }

  @media (max-width: 370px) {
    width: 100%;
  }
`

export const InputLabelContainerNewsLetter = styled.div`
  width: 291px;
  height: 95px;

  @media (max-width: 500px) {
    width: 373.393px;
    height: 77px;
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`

export const NewsLetterLabel = styled.label`
  color: #064635;
  font-family: Nunito;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
export const NewsLetterInput = styled.input`
  width: 291px;
  height: 52px;
  flex-shrink: 0;
  outline: none;
  border: none;
  border-bottom: 1px solid #064635;
  background: #f4eea9;
  color: #064635;
  font-weight: bold;
  font-family: 'Nunito';
  font-size: 16px;

  @media (max-width: 500px) {
    width: 373.393px;
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`
export const ButtonContainer = styled.button`
  width: 123px;
  height: 52px;
  margin: 26px 0 0;
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

  @media (max-width: 500px) {
    margin: 0;
    width: 373.393px;
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`

export const ButtonText = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: ${(props) => props.color};
  font-family: 'Nunito', sans-serif;
`
