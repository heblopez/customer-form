import { Answer } from '@/types'
import { createContext } from 'react'

interface ISurveyContext {
  currentPage: number
  handlePage: (page: number) => void
  clientName: string
  answers: Answer[]
  handleName: (name: string) => void
  handleAnswers: (answers: Answer[]) => void
}

export const SurveyContext = createContext<ISurveyContext>({} as ISurveyContext)
