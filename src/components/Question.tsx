import React from 'react'

import { questionProps } from '../types/question.type'

const Question: React.FC<questionProps> = ({question, answers, questionNo, callBack, totalQuestion, userAnswer}) => {
    return(
    <>
    <p>Question: {questionNo}/{totalQuestion}</p>
    <p dangerouslySetInnerHTML={{__html: question!}} />
    <div>
        {answers!.map((answer, index) =>(
            <div key={index}>
                <button disabled={userAnswer} onClick={callBack} value={answer}>
                    <span dangerouslySetInnerHTML={{__html: answer}} />
                </button>
            </div>

        ))}
    </div>
    </>
    )
}

export default Question