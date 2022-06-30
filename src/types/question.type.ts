export type questionProps = {
    question?: string,
    answers?: string[],
    callBack?: any,
    userAnswer?: boolean,
    questionNo?: number,
    totalQuestion?: number

}

export type SingleQue = {
    category: string,
    correct_answer: string,
    incorrect_answers: string[],
    question: string,
    type: string 
}

export type QuestionState = SingleQue & { answers: string[]}