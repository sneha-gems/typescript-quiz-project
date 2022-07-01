import { useEffect, useReducer, useState } from 'react';

import Api from './Api';
import './App.css';
import Question from './components/Question';
import { reducer } from './components/reducer';
import { buttonEvent } from './types/button.type';
import { QuestionState } from './types/question.type';
import { ReducerActionType } from './types/reducer.type';
import { initialState, TOTAL_QUES } from './utils';

function App() {
  const {quizeQue}= Api()
  const [questions, setQuestions] = useState<QuestionState[]>([])
  const [state, dispatch]= useReducer(reducer, initialState!)
  const {loading, gameOver, stateQues, number, score, message} = state

  const handleRefresh = () => {
    window.location.reload()
  }


  useEffect(() => {
    const data = async () => {
      const result = await quizeQue()
      setQuestions(result)
      return result
    }
    data()
  }, [])

  if(gameOver){
    return (
      <>
      <h1>Score: {score}</h1>
      <p>{message}</p>
      <button onClick={handleRefresh}>Restart</button>

      </>
    )
  }


  if(loading){
    return(<>...Loading</>)
  }

  return (
    <div className="App">
      <h1>REACT QUIZ</h1>
      <button onClick={() => dispatch({type:ReducerActionType.START_GAME, payload: {questions: questions } })}>Start</button>
      <p>Score: {score ? score : '0'}</p>
      {stateQues && !gameOver && (
        <>
      <Question
        key={number}
        questionNo={number +1}
        question={stateQues?.questions[number]?.question}
        answers= {stateQues?.questions[number]?.answers}
        callBack={(e: buttonEvent) => dispatch({type: ReducerActionType.CHECK_ANS, payload: {value: e.currentTarget.value }})}
        userAnswer={undefined}
        totalQuestion={TOTAL_QUES}
      />
      <p>{message}</p>
      <button onClick={() => dispatch({type: ReducerActionType.NEXT_QUE, payload: {number: number+1}})}>Next Question</button> 
      </>
      )}

      <div></div>
    </div>
  );
}

export default App;
