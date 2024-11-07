import { useState } from 'react'
import WelcomePage from './pages/Welcome'
import QuestionPage from './pages/Question'
import { Answer, Data, Question } from './types'
import ThanksPage from './pages/Thanks'

const questions: Question[] = [
  {
    id: 1,
    question: '¿Cuál es tu cargo/posición dentro de tu empresa?',
    options: [
      'Board member',
      'C-level',
      'Gerente',
      'Subgerente',
      'Jefe área',
      'Líder de área',
      'Ejecutivo / Analista',
      'Otro'
    ]
  },
  {
    id: 2,
    question: '¿Cuáles son tus principales desafíos para 2024?',
    options: [
      'Aumentar conversión de leads a clientes',
      'Reducir customer churn',
      'Implementar un programa VoC',
      'Reducir costos en gestión de reclamos',
      'Optimizar procesos comerciales',
      'Optimizar procesos operativos',
      'Otro'
    ]
  },
  {
    id: 3,
    question: '¿Cuál CRM están utilizando en tu empresa?',
    options: [
      'SAP',
      'Salesforce',
      'Zoho',
      'Monday',
      'Microsoft Dynamics',
      'HubSpot',
      'Netsuite(Oracle)',
      'CRM Propio',
      'No tengo CRM'
    ]
  },
  {
    id: 4,
    question: '¿A cuál industria pertenece tu empresa?',
    options: [
      'Tecnología',
      'Software',
      'Servicios',
      'Financiera',
      'Telecomunicaciones',
      'Producción/Fabricación',
      'Logística',
      'Consumo Masivo',
      'Mayorista',
      'Retail',
      'Otro'
    ]
  }
]

function App() {
  const [currentPage, setCurrentPage] = useState(1)
  const [data, setData] = useState<Data>({ clientName: '', answers: [] })

  const handleName = (name: string) => {
    setData({ ...data, clientName: name })
    console.log(data)
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
