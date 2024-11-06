import styled from 'styled-components'
import bannerImg from '@/assets/customer-banner.svg'

const Header = styled.div`
  position: relative;
  width: 100%;
`
const BannerImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 0 0 20px 20px;
  padding-left: 16px;
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
  currentQuestion: number
  totalQuestions: number
}

export default function Hero({ currentQuestion, totalQuestions }: HeroProps) {
  const pages = totalQuestions < 10 ? `0${totalQuestions}` : totalQuestions
  const currentPage = currentQuestion < 10 ? `0${currentQuestion}` : currentQuestion

  return (
    <Header>
      <BannerImage src={bannerImg} alt='customerScoops Banner' />
      <ScreenNumber>{`${currentPage} | ${pages}`}</ScreenNumber>
    </Header>
  )
}
