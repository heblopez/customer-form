import WelcomePage from './pages/Welcome'
import QuestionPage from './pages/Question'
import { Question } from './types'
import ThanksPage from './pages/Thanks'
import questionsData from '@/assets/data/questions.json'
import { useContext } from 'react'
import { SurveyContext } from './context/SurveyContext'

const questions: Question[] = questionsData

function App() {
  const { currentPage, answers } = useContext(SurveyContext)

  const handleSubmitData = () => {
    console.log(answers)
  }

  return (
    currentPage === 1 ? <WelcomePage questionsNumber={questions.length} />
    : currentPage === questions.length + 2 ?
      <ThanksPage onSubmit={handleSubmitData} questionsNumber={questions.length} />
    : <QuestionPage questions={questions} />
  )
}

export default App
