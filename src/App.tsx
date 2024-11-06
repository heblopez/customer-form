import styled from 'styled-components'
import Hero from './components/Hero'
import Wrapper from './components/Wrapper'
import { useRef } from 'react'
import Input from './components/Input'
import Button from './components/Button'

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  color: #231331;
  gap: 2rem;
  padding-inline: 2.5rem;
`

const Text = styled.p`
  font-size: 20px;
  line-height: 28px;
  font-weight: 300;
  margin: 0;
`

function App() {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleClick = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log(inputRef.current?.value)
  }

  return (
    <Wrapper>
      <Hero currentQuestion={1} totalQuestions={8} />
      <Content>
        <Text>
          Muchas gracias por tu interés en conocer <strong>customerScoops</strong>, que a través de
          Formularios Conversacionales Inteligente te ayudamos a aumentar el revenue y rentabilidad
          de tu negocio.
        </Text>
        <Text>Queremos conocerte, ¿cuál es tu nombre?</Text>
        <Input ref={inputRef} placeholder='Nombre' />
        <Button onClick={handleClick}>Comenzar</Button>
      </Content>
    </Wrapper>
  )
}

export default App
