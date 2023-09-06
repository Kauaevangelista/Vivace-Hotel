import {
  AgroupAll,
  AgroupAllHighlights,
  BgRoomsText,
  Container,
  Detail,
  Div,
  HighlightsContainer,
  ImgHighlight,
  InfoContainer,
  OurRoomsContainer,
  Paragraph,
  RoomsText,
  Separator,
  Title,
  TitleContainer,
} from './styled'
import './index.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import image1 from '../../assets/images/image 5.png'
import image2 from '../../assets/images/image 6.png'
import image3 from '../../assets/images/visualsofdana-pP4RHq87C-k-unsplash 1.png'
import image4 from '../../assets/images/reisetopia-aI6Su7Mu9Ro-unsplash 1.jpg'
import image5 from '../../assets/images/point3d-commercial-imaging-ltd-oxeCZrodz78-unsplash 1.jpg'
import image6 from '../../assets/images/vojtech-bruzek-Yrxr3bsPdS0-unsplash 1.jpg'
import coffee from '../../assets/images/coffee.svg'
import credit from '../../assets/images/credit-card.svg'
import hearth from '../../assets/images/hearth.svg'
import { useEffect, useState } from 'react'

const circle = document.getElementsByClassName(
  '.swiper-pagination-bullet-active',
)

console.log(circle)

export default function Rooms() {
  const images = [
    { id: '1', image: image1 },
    { id: '2', image: image2 },
    {
      id: '3',
      image: image3,
    },
    {
      id: '4',
      image: image4,
    },
    {
      id: '45',
      image: image5,
    },
    {
      id: '6',
      image: image6,
    },
  ]

  const [slidesPerView, setSlidesPerView] = useState(3)
  const [spaceBetween, setSpaceBetween] = useState(-490)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1280) {
        setSlidesPerView(2)
      } else {
        setSlidesPerView(3)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const handleSpace = () => {
      const width = window.innerWidth

      if (width > 1500) {
        setSpaceBetween(-490)
        console.log({ spaceBetween }, { width })
      } else if (width < 1500 && width >= 1380) {
        setSpaceBetween(-350)
        console.log({ spaceBetween }, { width })
      } else if (width < 1380 && width >= 1280) {
        setSpaceBetween(-250)
        console.log({ spaceBetween }, { width })
      } else if (width < 1280 && width >= 1185) {
        setSpaceBetween(-500)
        console.log({ spaceBetween }, { width })
      } else if (width < 1185 && width >= 1086) {
        setSpaceBetween(-400)
        console.log({ spaceBetween }, { width })
      } else if (width < 1086 && width >= 1024) {
        setSpaceBetween(-330)
        console.log({ spaceBetween }, { width })
      } else if (width < 1024 && width >= 1011) {
        setSpaceBetween(-300)
        console.log({ spaceBetween }, { width })
      } else if (width < 1011 && width >= 985) {
        setSpaceBetween(-300)
        console.log({ spaceBetween }, { width })
      } else if (width < 985 && width >= 890) {
        setSpaceBetween(-200)
        console.log({ spaceBetween }, { width })
      } else if (width < 890 && width >= 785) {
        setSpaceBetween(-100)
        console.log({ spaceBetween }, { width })
      } else if (width < 785 && width >= 684) {
        setSpaceBetween(-0)
        console.log({ spaceBetween }, { width })
      } else if (width < 684 && width >= 431) {
        setSpaceBetween(-600)
        console.log({ spaceBetween }, { width })
      } else if (width < 431 && width >= 321) {
        setSpaceBetween(-750)
        console.log({ spaceBetween }, { width })
      } else if (width < 321 && width >= 280) {
        setSpaceBetween(-830)
        console.log({ spaceBetween }, { width })
      }
    }

    handleSpace()

    window.addEventListener('resize', handleSpace)

    return () => {
      window.removeEventListener('resize', handleSpace)
    }
  }, [])

  return (
    <>
      <Container data-aos="fade-down-right" id="rooms">
        {window.innerWidth < 1011 ? (
          <AgroupAll>
            {window.innerWidth < 431 ? (
              <>
                <OurRoomsContainer data-aos="fade-down-left">
                  <TitleContainer>
                    <Title>Nossos Quartos</Title>
                    <Separator />
                  </TitleContainer>
                  <BgRoomsText>
                    <RoomsText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </RoomsText>
                  </BgRoomsText>
                </OurRoomsContainer>
                <Div>
                  <Swiper
                    slidesPerView={slidesPerView}
                    pagination={{ clickable: true }}
                    spaceBetween={spaceBetween}
                    navigation
                    loop={true}
                    className="SwiperContainer"
                    height={340}
                    width={window.innerWidth < 684 ? 1300 : window.innerWidth}
                  >
                    {images.map((item) => (
                      <SwiperSlide key={item.id}>
                        <img
                          src={item.image}
                          alt="Quarto"
                          className="slide-item"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </Div>
              </>
            ) : (
              <>
                <OurRoomsContainer data-aos="fade-down-left">
                  <TitleContainer>
                    <Title>Nossos Quartos</Title>
                    <Separator />
                  </TitleContainer>
                  <RoomsText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </RoomsText>
                </OurRoomsContainer>
                <Div>
                  <Detail />
                  <Swiper
                    slidesPerView={slidesPerView}
                    pagination={{ clickable: true }}
                    spaceBetween={spaceBetween}
                    navigation
                    loop={true}
                    className="SwiperContainer"
                    height={340}
                    width={window.innerWidth < 684 ? 1300 : window.innerWidth}
                  >
                    {images.map((item) => (
                      <SwiperSlide key={item.id}>
                        <img
                          src={item.image}
                          alt="Quarto"
                          className="slide-item"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </Div>
              </>
            )}
          </AgroupAll>
        ) : (
          <AgroupAll>
            <OurRoomsContainer data-aos="fade-down-left">
              <TitleContainer>
                <Title>Nossos Quartos</Title>
                <Separator />
              </TitleContainer>
              <RoomsText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </RoomsText>
            </OurRoomsContainer>

            <Swiper
              slidesPerView={slidesPerView}
              pagination={{ clickable: true }}
              spaceBetween={spaceBetween}
              navigation
              loop={true}
              className="SwiperContainer"
              height={340}
              width={window.innerWidth}
            >
              {images.map((item) => (
                <SwiperSlide key={item.id}>
                  <img src={item.image} alt="Quarto" className="slide-item" />
                </SwiperSlide>
              ))}
            </Swiper>
          </AgroupAll>
        )}
      </Container>
      {window.innerWidth < 1011 ? (
        <AgroupAllHighlights data-aos="flip-left">
          <InfoContainer width="265.318px">
            <ImgHighlight src={coffee} />
            <Paragraph width="175.318px">Com Café Da Manhã Incluso</Paragraph>
          </InfoContainer>
          <InfoContainer width="265.318px">
            <ImgHighlight src={credit} />
            <Paragraph width="175.318px">Várias Formas De Pagamento</Paragraph>
          </InfoContainer>
          <InfoContainer width="290.209px">
            <ImgHighlight src={hearth} />
            <Paragraph width="200.209px">Hóspedes 100% Satisfeitos</Paragraph>
          </InfoContainer>
        </AgroupAllHighlights>
      ) : (
        <HighlightsContainer data-aos="flip-right">
          <AgroupAllHighlights data-aos="flip-left">
            <InfoContainer width="265.318px">
              <ImgHighlight src={coffee} />
              <Paragraph width="175.318px">Com Café Da Manhã Incluso</Paragraph>
            </InfoContainer>
            <InfoContainer width="265.318px">
              <ImgHighlight src={credit} />
              <Paragraph width="175.318px">
                Várias Formas De Pagamento
              </Paragraph>
            </InfoContainer>
            <InfoContainer width="290.209px">
              <ImgHighlight src={hearth} />
              <Paragraph width="200.209px">Hóspedes 100% Satisfeitos</Paragraph>
            </InfoContainer>
          </AgroupAllHighlights>
        </HighlightsContainer>
      )}
    </>
  )
}
