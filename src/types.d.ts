export type Question = {
    id: number
    question: string
    options: string[]
    withAlternatives?
}

export type Answer = {
    questionId: number
    answer: string
}

export type Data = {
    clientName: string
    answers: Answer[]
}