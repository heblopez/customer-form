import { useState } from 'react'
import WelcomePage from './pages/Welcome'
import QuestionPage from './pages/Question'
import { Answer, Data, Question } from './types'
import ThanksPage from './pages/Thanks'
import questionsData from '@/assets/data/questions.json'

const questions: Question[] = questionsData

function App() {
  const [currentPage, setCurrentPage] = useState(1)
  const [data, setData] = useState<Data>({ clientName: '', answers: [] })

  const handleName = (name: string) => {
    setData({ ...data, clientName: name })
  }

  const handleAnswer = (answer: Answer) => {
    const index = data.answers.findIndex(a => a.questionId === answer.questionId)
    if (index !== -1) {
      data.answers[index] = answer
    } else {
      setData({ ...data, answers: [...data.answers, answer] })
    }
  }

  const handleSubmitData = () => {
    console.log(data)
  }

  return (
    currentPage === 1 ?
      <WelcomePage
        questionsNumber={questions.length}
        clientName={data.clientName}
        handleData={handleName}
        nextPage={() => setCurrentPage(current => current + 1)}
      />
    : currentPage === questions.length + 2 ?
      <ThanksPage onSubmit={handleSubmitData} questionsNumber={questions.length} />
    : <QuestionPage
        clientName={data.clientName}
        questions={questions}
        currentPage={currentPage}
        handlePage={setCurrentPage}
        handleData={handleAnswer}
      />
  )
}

export default App
