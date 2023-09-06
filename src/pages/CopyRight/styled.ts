import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 90px;
  background: #f0bb62;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
export const Paragraph = styled.p`
  color: #064635;
  font-family: Nunito;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 35px 0 36px 152px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`
