import styled from 'styled-components'
import Hero from '@/components/Hero'
import Wrapper from '@/components/Wrapper'
import Footer from '@/components/Footer'
import OptionButton from '@/components/OptionButton'
import { Answer, Question } from '@/types'
import { useState } from 'react'
import OptionAlternativeBtn from '@/components/OptionAltButton'

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  color: #231331;
  gap: 2rem;
  padding-inline: 2rem;
`

const Text = styled.p`
  font-size: 20px;
  line-height: 28px;
  font-weight: 300;
  margin: 0;
`

const GridLayout = styled.div<{ $columns: number }>`
  display: grid;
  grid-template-columns: repeat(${props => props.$columns}, 1fr);
  gap: 12px;
`

interface QuestionProps {
  clientName: string
  currentPage: number
  handlePage: (page: number) => void
  questions: Question[]
  handleData: (answer: Answer) => void
}

export default function QuestionPage({
  clientName,
  currentPage,
  handlePage,
  questions,
  handleData
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

  const handleAnswer = (option: string) => {
    handleData({ questionId: questions[indexQuestion].id, answer: option })
  }

  const withAlternatives = questions[indexQuestion].withAlternatives

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
        <GridLayout $columns={withAlternatives ? 1 : 2}>
          {questions[indexQuestion].options.map((option, index, options) =>
            withAlternatives ?
              <OptionAlternativeBtn
                key={index}
                letterKey={index}
                onClick={() => handleAnswer(option)}
              >
                {option}
              </OptionAlternativeBtn>
            : <OptionButton
                $colSpan={index === options.length - 1 && options.length % 2 !== 0 ? 2 : 1}
                key={index}
                onClick={() => handleAnswer(option)}
              >
                {option}
              </OptionButton>
          )}
        </GridLayout>
        <Footer handlePrev={handlePrev} handleNext={handleNext} />
      </Content>
    </Wrapper>
  )
}
