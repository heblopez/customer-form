import styled from 'styled-components'
import bannerImg from '@/assets/png/customer-banner.png'

const Header = styled.div`
  position: relative;
  width: 100%;

  @media (min-width: 1024px) {
    display: none;
  }
`
const BannerImage = styled.img`
  width: 100%;
  height: auto;
  padding-left: 8px;
  object-fit: contain;
`

const ScreenNumber = styled.span`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 1rem;
  color: #000;
  font-weight: 700;
  font-family: 'SF Pro';
`

interface HeroProps {
  currentPage: number
  totalPages: number
}

export default function Hero({ currentPage, totalPages }: HeroProps) {
  const pages = totalPages < 10 ? `0${totalPages}` : totalPages
  const currentPageNumber = currentPage < 10 ? `0${currentPage}` : currentPage

  return (
    <Header>
      <BannerImage src={bannerImg} alt='customerScoops Banner' loading='lazy' />
      <ScreenNumber>{`${currentPageNumber} | ${pages}`}</ScreenNumber>
    </Header>
  )
}
