import { Reducer } from "react";

import {ReducerActionType } from "../types/reducer.type";
import { TOTAL_QUES } from "../utils";

export const reducer: Reducer<any, any> = (state = [], action) => {
    switch(action!.type){
        case ReducerActionType.NEXT_QUE:
            if(action?.payload?.number === TOTAL_QUES){
                return {
                    ...state,
                    loading: false,
                    gameOver: true,
                    message: "You skip some questions."
                }
            }
            return {...state, ...action!.payload}

        case ReducerActionType.START_GAME:
            if(action?.payload?.questions){
                return {
                    ...state,
                    stateQues: action?.payload
                }  
            }   
            return{...state, stateQues: []}


        case ReducerActionType.CHECK_ANS:
            const {value} = action?.payload
            const {stateQues, number,score} = state
            if(value === stateQues?.questions[number]?.correct_answer){
                if(number+1 === TOTAL_QUES){
                    return {...state, score: score +1, gameOver: true, message: "You Won"}
                }
                return {...state, number: number+1, score: score+1, message: "" }
            }
            return {...state, message: "Wrong Answer"}
            

        default:
            return state

    }

}