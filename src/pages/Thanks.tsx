import styled from 'styled-components'
import Hero from '@/components/Hero'
import Wrapper from '@/components/Wrapper'
import Button from '@/components/Button'
import CSLogo from '@/components/Logo'
import Content from '@/components/Content'
import BackgroundPng from '@/assets/png/customer-bg-desktop.png'
import { useEffect } from 'react'

const Heading = styled.h1`
  font-size: 30px;
  line-height: 0;
  font-weight: 700;
  margin: 0;
  margin-bottom: -12px;
`

const Text = styled.p`
  font-size: 20px;
  line-height: 28px;
  font-weight: 300;
  margin: 0;
`

interface ThanksProps {
  questionsNumber: number
  onSubmit: () => void
}

export default function ThanksPage({ questionsNumber, onSubmit }: ThanksProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    onSubmit()
    window.location.href = 'https://www.customerscoops.com/'
  }

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      document.body.style.backgroundImage = `url(${BackgroundPng})`
      document.body.style.backgroundSize = 'cover'
      document.body.style.backgroundPosition = 'center right'
    }

    return () => {
      document.body.style.backgroundImage = ''
      document.body.style.backgroundSize = ''
      document.body.style.backgroundPosition = ''
    }
  }, [])

  return (
    <Wrapper>
      <Hero currentPage={questionsNumber + 2} totalPages={questionsNumber + 2} />
      <Content>
        <CSLogo />
        <Heading>Muchas Gracias</Heading>
        <Text>
          por querer ser parte
          <br /> de la familia Scoopers.
        </Text>
        <Text>¡Nos vemos pronto!</Text>
        <Button onClick={handleClick}>Finalizar</Button>
      </Content>
    </Wrapper>
  )
}
