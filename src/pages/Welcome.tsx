import { useContext, useRef } from 'react'
import styled from 'styled-components'
import Hero from '@/components/Hero'
import Wrapper from '@/components/Wrapper'
import Input from '@/components/Input'
import Button from '@/components/Button'
import BannerDesktop from '@/components/DesktopBanner'
import Content from '@/components/Content'
import CSLogo from '@/components/Logo'
import { SurveyContext } from '@/context/SurveyContext'

const Text = styled.p`
  font-size: 20px;
  line-height: 28px;
  font-weight: 300;
  margin: 0;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

interface WelcomeProps {
  questionsNumber: number
}

export default function WelcomePage({ questionsNumber }: WelcomeProps) {
  const { clientName, handleName, handlePage } = useContext(SurveyContext)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleClick = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (!inputRef.current?.value) return
    handlePage(2)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleName(e.target.value)
  }

  return (
    <Wrapper>
      <Hero currentPage={1} totalPages={questionsNumber + 2} />
      <Content>
        <CSLogo />
        <Text>
          Muchas gracias por tu interés en conocer <strong>customerScoops</strong>, que a través de
          Formularios Conversacionales Inteligentes te ayudamos a aumentar el revenue y rentabilidad
          de tu negocio.
        </Text>
        <Text>Queremos conocerte, ¿cuál es tu nombre?</Text>
        <Form>
          <Input ref={inputRef} value={clientName} onChange={handleChange} placeholder='Nombre' />
          <Button disabled={!clientName || clientName.length < 3} onClick={handleClick}>
            Comenzar
          </Button>
        </Form>
      </Content>
      <BannerDesktop />
    </Wrapper>
  )
}
