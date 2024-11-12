import styled from 'styled-components'
import BackgroundPng from '@/assets/png/customer-bg-desktop.png'

const FigureBackground = styled.figure`
  position: absolute;
  margin: 0;
  padding: 0;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  z-index: -12;
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`

const ImgBackground = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: right;
`

export default function DesktopBackground() {
  return (
    <FigureBackground>
      <ImgBackground src={BackgroundPng} alt='customerScoops Background' loading='lazy' />
    </FigureBackground>
  )
}
