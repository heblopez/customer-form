import styled from 'styled-components'
import Hero from '@/components/Hero'
import Wrapper from '@/components/Wrapper'
import Footer from '@/components/Footer'
import OptionButton from '@/components/OptionButton'
import { Question } from '@/types'
import { useState } from 'react'

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
  currentPage: number
  handlePage: (page: number) => void
  questions: Question[]
}

export default function QuestionPage({
  clientName,
  currentPage,
  handlePage,
  questions
}: QuestionProps) {
  const [indexQuestion, setIndexQuestion] = useState(0)

  const handleNext = () => {
    setIndexQuestion(prev => prev + 1)
    handlePage(currentPage + 1)
  }

  const handlePrev = () => {
    setIndexQuestion(prev => prev - 1)
    handlePage(currentPage - 1)
  }

  return (
    <Wrapper>
      <Hero currentPage={currentPage} totalPages={questions.length + 2} />
      <Content>
        {indexQuestion === 0 && (
          <Text>
            <strong>Genial {`${clientName}, `}</strong>ahora nos gustaría tener cierta info para
            diseñar una gran propuesta de valor para ti:
          </Text>
        )}
        <Text>{questions[indexQuestion].question}</Text>
        <GridLayout>
          {questions[indexQuestion].options.map((option, index) => (
            <OptionButton key={index}>{option}</OptionButton>
          ))}
        </GridLayout>
        <Footer handlePrev={handlePrev} handleNext={handleNext} />
      </Content>
    </Wrapper>
  )
}
