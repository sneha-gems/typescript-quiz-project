import { SingleQue } from "./types/question.type"
import { shuffleArray } from "./utils"


export default function Api(){
    const quizeQue = async () => {
       const result = await fetch("https://opentdb.com/api.php?amount=10&category=10&difficulty=easy&type=multiple").then((res) => res.json()).catch((err) => console.log(err))

       return result.results.map((ques: SingleQue) =>  (
           {
           ...ques,
           answers: shuffleArray([...ques.incorrect_answers, ques.correct_answer])
       }))
    }

    return{
        quizeQue
    }
}