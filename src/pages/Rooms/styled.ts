import { styled } from 'styled-components'
import separatorImage from '../../assets/images/separator-white.svg'

type HighlightsContainerWidth = {
  width: string
}

export const Container = styled.div`
  width: 100%;
  height: 573px;
  background: #064635;
  padding-top: 107px;
  position: relative;
  overflow-x: hidden;

  @media (max-width: 1011px) {
    height: 817px;
    padding-top: 50px;
  }

  @media (max-width: 775px) {
    height: 775px;
  }

  @media (max-width: 431px) {
    padding-top: 18px;
    height: 753px;
  }

  @media (max-width: 340px) {
    height: 830px;
  }
`
export const AgroupAll = styled.div`
  height: 342px;
  width: inherit;
  display: flex;

  @media (max-width: 1011px) {
    height: 547px;
    flex-direction: column;
  }

  @media (max-width: 431px) {
    height: 523px;
    row-gap: 30px;
  }

  @media (max-width: 340px) {
    row-gap: 29px;
  }
`

export const OurRoomsContainer = styled.div`
  width: 342px;
  height: 177px;
  padding: 0 0 0 152px;

  @media (max-width: 1024px) {
    padding-left: 0;
  }

  @media (max-width: 431px) {
    margin: 0 auto;
    width: 317px;
    height: 282px;
  }

  @media (max-width: 340px) {
    width: 228px;
    height: 333px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
export const TitleContainer = styled.div`
  width: 252px;
  height: 60px;
  margin-bottom: 14px;
  margin-left: 60px;

  @media (max-width: 431px) {
    margin-bottom: 18px;
    margin-left: 40px;
  }

  @media (max-width: 340px) {
    width: 141px;
    height: 119px;
    margin-left: 0;
  }
`
export const Title = styled.h3`
  color: #f6fbf4;
  font-family: 'Playfair Display';
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 252px;
  height: 48px;

  @media (max-width: 340px) {
    width: 141px;
    height: 98px;
  }
`
export const Separator = styled.img.attrs({
  src: separatorImage,
})``

export const RoomsText = styled.p`
  width: 342px;
  height: 103px;
  color: #f6fbf4;
  font-family: 'Nunito';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-right: 1px;
  margin-left: 60px;

  @media (max-width: 431px) {
    width: 215px;
    height: 150px;
    color: #064635;
    margin: 0;
  }

  @media (max-width: 340px) {
    width: 184px;
    height: 150px;
  }
`

export const BgRoomsText = styled.div`
  width: 317px;
  height: 196px;
  border-radius: 10px;
  background: #f0bb62;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 23px 51px;
  margin: 0 auto;

  @media (max-width: 340px) {
    width: 228px;
    height: 196px;
    padding: 23px 22px;
  }
`

export const Detail = styled.div`
  background: #519259;
  width: 150px;
  height: 338px;
`

export const Div = styled.div`
  display: flex;
  padding-top: 30px;
`

export const HighlightsContainer = styled.div`
  width: 90%;
  height: 135px;
  background-color: #f0bb62;
  border-radius: 20px;
  box-shadow: 0px 4px 8px 0px rgba(6, 70, 53, 0.25);
  margin: -70px auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 1011px) {
    background-color: transparent;
  }
`
export const AgroupAllHighlights = styled.div`
  width: 882.209px;
  height: 72px;
  display: flex;
  column-gap: 30.68px;
  position: relative;

  @media (max-width: 1011px) {
    width: 90%;
    height: 319px;
    flex-direction: column;
    column-gap: 0;
    row-gap: 14px;
    margin: -150px auto 0;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 768px) {
    margin-top: -160px;
  }

  @media (max-width: 340px) {
    padding-top: 0px;
  }
`
export const InfoContainer = styled.div<HighlightsContainerWidth>`
  width: ${(props) => props.width};
  height: 85px;
  display: flex;
  column-gap: 18px;
  border-bottom: 2px solid transparent;
  transition: 0.6s;
  &:hover {
    border-bottom-color: #064635;
  }

  @media (max-width: 1011px) {
    column-gap: 40px;
    width: 585.999px;
    height: 97px;
    border-radius: 20px;
    background: #f0bb62;
    box-shadow: 0px 4px 8px 0px rgba(6, 70, 53, 0.25);
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 620px) {
    column-gap: 20px;
    width: 509px;
    padding: 10px;
  }

  @media (max-width: 540px) {
    width: 325px;
    height: 97px;
  }

  @media (max-width: 375px) {
    width: 275px;
  }

  @media (max-width: 320px) {
    width: 264px;
    column-gap: 15px;
    padding: 10px 5px;
  }

  @media (max-width: 286px) {
    column-gap: 10px;
    padding: 10px 5px;
    width: 254px;
  }
`
export const ImgHighlight = styled.img`
  width: 72px;
  height: 72px;

  @media (max-width: 1011px) {
    width: 80px;
    height: 80px;
  }

  @media (max-width: 620px) {
    width: 70px;
    height: 70px;
  }

  @media (max-width: 540px) {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 375px) {
    width: 55px;
    height: 55px;
  }

  @media (max-width: 320px) {
    width: 54px;
    height: 54px;
  }
`

export const Paragraph = styled.p<HighlightsContainerWidth>`
  width: ${(props) => props.width};
  height: 66px;
  color: #064635;
  font-family: 'Nunito';
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 1011px) {
    width: 402px;
    height: 35.55px;
    font-size: 30px;
  }

  @media (max-width: 620px) {
    font-size: 30px;
  }

  @media (max-width: 540px) {
    width: 209px;
    height: 66px;
    font-size: 24px;
  }

  @media (max-width: 375px) {
    width: 183px;
  }

  @media (max-width: 320px) {
    width: 184px;
  }
`
