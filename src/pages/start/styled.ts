import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 689px;
  display: flex;
  flex-wrap: wrap;
  filter: drop-shadow(0px 4px 4px rgba(6, 70, 53, 0.5));
`

export const ContainerLeft = styled.div`
  width: 45%;
  height: inherit;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: #064635;
  color: #f6fbf4;
  position: relative;

  @media (max-width: 1138px) {
    width: 50%;
  }

  @media (max-width: 860px) {
    position: initial;
    width: 100%;
  }

  @media (max-width: 491px) {
    height: 640px;
  }
`

export const Logo = styled.h2`
  font-size: 36px;
  font-family: 'Playfair Display';
  margin: 5% 10% 6% 22%;
  width: 125px;
  font-weight: 400;

  @media (max-width: 1024px) {
    margin-left: 10%;
  }

  @media (max-width: 531px) {
    margin: 5% auto 6%;
  }

  @media (max-width: 291px) {
    margin-right: 44%;
  }
`

export const TextMain = styled.h1`
  font-size: 48px;
  font-family: 'Playfair Display';
  width: 360px;
  margin: 0 10% 6% 22%;
  font-weight: 400;

  @media (max-width: 1024px) {
    margin-left: 10%;
  }

  @media (max-width: 860px) {
    width: 465px;
    margin-bottom: 2%;
  }

  @media (max-width: 531px) {
    font-size: 36px;
    width: 276.78px;
    margin-top: 6%;
    margin-bottom: 4%;
  }

  @media (max-width: 450px) {
    margin-top: 11%;
  }

  @media (max-width: 376px) {
    margin-top: 15%;
  }

  @media (max-width: 326px) {
    font-size: 30px;
  }
`

export const TextSecondary = styled.p`
  font-family: 'Nunito';
  font-size: 24px;
  margin: 0 43px 35px 150px;
  margin: 0 10% 5% 22%;
  width: 411px;

  @media (max-width: 1024px) {
    margin-left: 10%;
    z-index: 2;
  }

  @media (max-width: 531px) {
    font-size: 18px;
    width: 299px;
  }

  @media (max-width: 326px) {
    font-size: 18px;
    width: 232px;
  }
`

export const ButtonContainer = styled.button`
  width: 254px;
  height: 52px;
  margin: 0 0 0 22%;
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

  @media (max-width: 1024px) {
    margin-left: 10%;
  }

  @media (max-width: 860px) {
    width: 324px;
    height: 96px;
    z-index: 2;
  }

  @media (max-width: 691px) {
    width: 271px;
    height: 52px;
  }

  @media (max-width: 326px) {
    width: 204px;
  }
`

export const ButtonText = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: ${(props) => props.color};
  font-family: 'Nunito', sans-serif;

  @media (max-width: 860px) {
    font-size: 24px;
  }

  @media (max-width: 691px) {
    font-size: 18px;
  }
`

export const ButtonContainerTwo = styled(ButtonContainer)`
  background-color: #064635;
  width: 162px;
  margin: 0 0 0 63px;

  @media (max-width: 1024px) {
    margin-left: 5%;
  }

  @media (max-width: 970px) {
    margin-left: 5%;
    display: none;
  }

  @media (max-width: 860px) {
    display: flex;
    background-color: #f0bb62;
    width: 162px;
    height: 52px;
    margin-left: 0;
  }

  @media (max-width: 691px) {
    display: none;
  }
`

export const ButtonTextTwo = styled(ButtonText)`
  @media (max-width: 860px) {
    color: #064635;
    font-size: 18px;
  }
`

export const ContainerRight = styled(ContainerLeft)`
  width: 55%;
  background-color: #f0bb62;

  @media (max-width: 1138px) {
    width: 50%;
  }

  @media (max-width: 860px) {
    width: 0%;
  }
`
export const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 523px;
  height: 52px;
  margin: 5% 10% 6% 11%;

  @media (max-width: 1138px) {
    margin-left: 6%;
  }

  @media (max-width: 1110px) {
    margin-left: 0%;
  }

  @media (max-width: 860px) {
    position: absolute;
    left: 33%;
    margin-left: -5%;
  }

  @media (max-width: 531px) {
    left: 5%;
    margin-left: 0;
    bottom: 76%;
  }

  @media (max-width: 491px) {
    left: 2%;
  }

  @media (max-width: 450px) {
    left: -8%;
  }

  @media (max-width: 376px) {
    left: -16%;
  }

  @media (max-width: 326px) {
    left: -26%;
    bottom: 78%;
  }

  @media (max-width: 291px) {
    left: -35%;
    bottom: 79%;
  }
`
export const LinksNav = styled.nav`
  width: 297;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 42px;

  @media (max-width: 1024px) {
    gap: 32px;
  }

  @media (max-width: 970px) {
    gap: 42px;
    margin-right: 18%;
  }

  @media (max-width: 860px) {
    margin-right: 8%;
  }

  @media (max-width: 531px) {
    gap: 69%;
  }

  @media (max-width: 491px) {
    gap: 50%;
  }

  @media (max-width: 450px) {
    gap: 30%;
  }

  @media (max-width: 375px) {
    gap: 20%;
  }

  @media (max-width: 326px) {
    gap: 35%;
  }

  @media (max-width: 291px) {
    gap: 25%;
  }
`
export const TextNav = styled.a`
  color: #064635;
  font-size: 18px;
  text-decoration: none;
  font-family: 'Nunito';
  transition: 0.5s;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom-color: #064635;
  }

  @media (max-width: 860px) {
    color: #f0bb62;

    &:hover {
      border-bottom-color: #f0bb62;
    }
  }

  @media (max-width: 326px) {
    font-size: 14px;
  }
`

export const MaskImage = styled.div`
  position: absolute;
  width: 82%;
  height: 563px;
  bottom: 0;
  right: 0;
  border-radius: 180px 0px 0px 0px;
  overflow: hidden;

  @media (max-width: 860px) {
    z-index: 1;
    width: 554px;
    height: 324px;
  }

  @media (max-width: 591px) {
    width: 367px;
    height: 307px;
  }

  @media (max-width: 491px) {
    bottom: 7%;
  }

  @media (max-width: 376px) {
    width: 324.609px;
    height: 307px;
  }

  @media (max-width: 326px) {
    width: 277px;
    height: 307px;
  }

  @media (max-width: 290px) {
    width: 274px;
    height: 307px;
  }
`
export const ImageStart = styled.img`
  position: absolute;
  right: 0%;

  @media (max-width: 1355px) {
    left: -10%;
  }

  @media (max-width: 1274px) {
    left: -17%;
  }

  @media (max-width: 1194px) {
    left: -25%;
  }

  @media (max-width: 1024px) {
    left: -38%;
  }

  @media (max-width: 860px) {
    left: 0%;
    width: 100%;
    height: 100%;
    transform: scale(1);
  }

  @media (max-width: 326px) {
    left: -8%;
    transform: scale(1.3);
  }
`
