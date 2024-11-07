import { Answer, Data } from '@/types'
import { SurveyContext } from './SurveyContext'
import { useState } from 'react'

export default function SurveyProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<Data>({ clientName: '', answers: [] })
  const [currentPage, setCurrentPage] = useState(1)

  const handlePage = (page: number) => {
    setCurrentPage(page)
  }

  const handleName = (name: string) => {
    setData({ ...data, clientName: name })
  }

  const handleAnswers = (answers: Answer[]) => {
    setData({ ...data, answers })
  }

  const clientName = data.clientName
  const answers = data.answers

  return (
    <SurveyContext.Provider
      value={{
        clientName,
        answers,
        currentPage,
        handlePage,
        handleName,
        handleAnswers
      }}
    >
      {children}
    </SurveyContext.Provider>
  )
}
