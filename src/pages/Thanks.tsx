import styled from 'styled-components'
import Hero from '@/components/Hero'
import Wrapper from '@/components/Wrapper'
import Button from '@/components/Button'

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  color: #231331;
  gap: 2rem;
  padding-inline: 2.5rem;
`

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
}

export default function ThanksPage({ questionsNumber }: ThanksProps) {
  const handleClick = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    window.location.href = 'https://www.customerscoops.com/'
  }

  return (
    <Wrapper>
      <Hero currentPage={questionsNumber + 2} totalPages={questionsNumber + 2} />
      <Content>
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
