import { useState } from 'react';

import Api from './Api';
import './App.css';
import Question from './components/Question';
import { buttonEvent } from './types/button.type';
import { QuestionState } from './types/question.type';

function App() {
  const {quizeQue} = Api()
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState<QuestionState[]>([])
  const [number, setNumber] = useState(0)
  const [userAnswer, setUserAnswer] = useState(false)
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)
  

  // const initialState:questionProps = {
  //   question: "Test question",
  //   answers: ["true", "false"],
  //   callBack: "",
  //   userAnswer: false,
  //   questionNo: 1,
  //   totalQuestion: 10
  // }
  // const [state, dispatch]= useReducer(reducer, initialState!)

  const startTriv = async () => {
    setLoading(true)
    setGameOver(false)
    const questions = await quizeQue()
    setQuestions(questions)
    setLoading(false)
  }

  const checkAns = (e: buttonEvent) => {
if(e.currentTarget.value === questions[number]?.correct_answer){
  setScore(score + 1)
  alert("User Answer is right")
  setNumber(number +1)
  return true
}else{
  alert("User Answer is Wrong")
  return false
}
  }

  const nextQue = (e: buttonEvent) => {
    setNumber(number +1)
  }


  if(loading){
    return(<>...Loading</>)
  }

  return (
    <div className="App">
      <h1>REACT QUIZ</h1>
      <button onClick={startTriv}>Start</button>
      <p>Score: {score}</p>
      {questions && !gameOver && (
        <>
      <Question
        key={number}
        questionNo={number +1}
        question={questions[number]?.question}
        answers= {questions[number]?.answers}
        callBack={checkAns}
        userAnswer={userAnswer ? userAnswer : false}
        totalQuestion={10}
      />
      <button onClick={nextQue}>Next Question</button> 
      </>
      )}

      <div></div>
    </div>
  );
}

export default App;
