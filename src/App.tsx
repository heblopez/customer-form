import { useState } from 'react'
import WelcomePage from './pages/Welcome'
import QuestionPage from './pages/Question'

function App() {
  const [clientName, setClientName] = useState('')
  const [currentQuestion, setCurrentQuestion] = useState(1)

  const handleClientName = (name: string) => {
    setClientName(name)
    setCurrentQuestion(current => current + 1)
  }

  return currentQuestion === 1 ?
      <WelcomePage questionsNumber={10} onClientName={handleClientName} />
    : <QuestionPage clientName={clientName} questionsNumber={10} />
}

export default App
