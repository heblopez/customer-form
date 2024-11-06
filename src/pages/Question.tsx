import styled from 'styled-components'
import Hero from '@/components/Hero'
import Wrapper from '@/components/Wrapper'
import Footer from '@/components/Footer'
import OptionButton from '@/components/OptionButton'

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

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
`

interface QuestionProps {
  clientName: string
  questionsNumber: number
  // options: string[]
}

const options = [
  'Board member',
  'C-level',
  'Gerente',
  'Subgerente',
  'Jefe área',
  'Líder de área',
  'Ejecutivo / Analista',
  'Otro'
]
export default function QuestionPage({ clientName, questionsNumber }: QuestionProps) {
  return (
    <Wrapper>
      <Hero currentQuestion={1} totalQuestions={questionsNumber} />
      <Content>
        <Text>
          <strong>Genial {`${clientName}, `}</strong>ahora nos gustaría tener cierta info para
          diseñar una gran propuesta de valor para ti:
        </Text>
        <Text>¿Cuál es tu cargo/posición dentro de tu empresa?</Text>
        <GridLayout>
          {options.map((option, index) => (
            <OptionButton key={index}>{option}</OptionButton>
          ))}
        </GridLayout>
        <Footer handleClick={() => console.log('next')} />
      </Content>
    </Wrapper>
  )
}
