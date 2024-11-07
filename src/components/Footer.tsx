import styled from 'styled-components'
import Button from '@/components/Button'
import arrowSvg from '@/assets/left-arrow.svg'
import nextSvg from '@/assets/green-arrow.svg'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const PrevButton = styled.button`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  padding: 16px;
  border-radius: 50%;
  border: 1px solid #231331;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`
const PrevImg = styled.img`
  width: 18px;
  height: 18px;
`

const NextImg = styled.img`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    width: 16px;
    height: 16px;
  }
`

interface FooterProps {
  handleNext: () => void
  handlePrev: () => void
}

export default function Footer({ handleNext, handlePrev }: FooterProps) {
  return (
    <Wrapper>
      <PrevButton onClick={handlePrev}>
        <PrevImg src={arrowSvg} alt='previous' />
      </PrevButton>
      <Button onClick={handleNext}>
        Siguiente <NextImg src={nextSvg} alt='next' />
      </Button>
    </Wrapper>
  )
}
