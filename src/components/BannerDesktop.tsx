import styled from 'styled-components'
import bannerImg from '@/assets/customer-desktop.svg'

const FigureBannerDesktop = styled.figure`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    margin: 0;
    position: absolute;
    right: 0;
    height: 100%;
    z-index: -7;
  }
`

const ImgDesktop = styled.img`
  height: 100%;
  margin: 0;
  object-fit: contain;
`

export default function BannerDesktop() {
  return (
    <FigureBannerDesktop>
      <ImgDesktop src={bannerImg} alt='customerScoops Banner' loading='lazy' />
    </FigureBannerDesktop>
  )
}
