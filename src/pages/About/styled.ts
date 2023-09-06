import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 530px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background-color: #f6fbf4;

  @media (max-width: 768px) {
    height: 468px;
  }

  @media (max-width: 475px) {
    height: 449px;
  }
`

export const Agroup = styled(Container)`
  height: 290px;

  @media (max-width: 490px) {
    margin-top: -30%;
  }

  @media (max-width: 460px) {
    justify-content: center;
  }
`

export const MaskIMage = styled.div`
  margin-right: 49px;
  overflow: hidden;

  @media (max-width: 1140px) {
    margin-left: -19%;
  }

  @media (max-width: 960px) {
    margin-left: -29%;
  }

  @media (max-width: 871px) {
    margin-left: -40%;
  }

  @media (max-width: 801px) {
    margin-left: -64%;
  }

  @media (max-width: 681px) {
    margin-left: -74%;
  }

  @media (max-width: 643px) {
    margin-left: -84%;
  }

  @media (max-width: 610px) {
    margin-left: -90%;
  }

  @media (max-width: 590px) {
    margin-left: -100%;
  }

  @media (max-width: 560px) {
    display: none;
  }
`

export const Image = styled.img`
  @media (max-width: 800px) {
    margin-left: 49%;
  }
`

export const KnowMoreContainer = styled.div`
  width: 432px;
  height: 288px;
  margin-left: -16%;

  @media (max-width: 1300px) {
    margin-left: 0;
  }

  @media (max-width: 1140px) {
    margin-left: -15%;
  }

  @media (max-width: 1060px) {
    margin-left: -5%;
  }

  @media (max-width: 560px) {
    margin-left: 5%;
  }

  @media (max-width: 515px) {
    width: 375px;
  }

  @media (max-width: 460px) {
    margin: 0 auto;
    z-index: 2;
    height: auto;
    display: flex;
    flex-direction: column;
  }
`
export const TitleContainer = styled.div`
  width: 163px;
  height: 60px;
  margin-bottom: 14px;

  @media (max-width: 460px) {
    margin: 0 auto 50px;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 375px) {
    margin-bottom: 33px;
  }
`
export const Title = styled.h3`
  color: #064635;
  font-family: 'Playfair Display';
  font-size: 36px;
  font-weight: 400;
  width: inherit;
  height: 48px;
`
export const Separator = styled.img`
  width: 50px;
  height: 2px;
`

export const AboutText = styled.p`
  width: 432px;
  height: 123px;
  color: #3f3b34;
  font-family: 'Nunito';
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 39px;

  @media (max-width: 515px) {
    width: 364px;
  }

  @media (max-width: 460px) {
    font-size: 14px;
    width: 309px;
    height: 96px;
    margin: 0 auto;
    margin-bottom: 60px;
  }

  @media (max-width: 375px) {
    width: 231px;
    height: 134px;
    margin-bottom: 30px;
  }
`
export const Detail = styled.div`
  background: #519259;
  width: 52px;
  height: 289px;

  @media (max-width: 460px) {
    position: absolute;
    width: 351px;
    height: 156px;
    border-radius: 10px;
    margin: 30px 0 0;
    z-index: 1;
  }

  @media (max-width: 375px) {
    width: 263px;
    height: 146px;
  }
`

export const ButtonContainer = styled.button`
  width: 162px;
  height: 52px;
  margin: 0;
  background-color: #f0bb62;
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

  @media (max-width: 460px) {
    width: 213px;
    margin: 30px auto 0;
  }

  @media (max-width: 375px) {
    margin-top: 0;
  }
`

export const ButtonText = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: ${(props) => props.color};
  font-family: 'Nunito', sans-serif;
`
