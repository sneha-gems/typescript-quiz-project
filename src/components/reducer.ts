import { Reducer } from "react";

import { questionProps } from "../types/question.type";
import { ReducerAction, ReducerActionType } from "../types/reducer.type";

export const reducer: Reducer<questionProps[] |undefined, ReducerAction |undefined> = (state = [], action) => {
    switch(action!.type){
        case ReducerActionType.NEXT_QUE:
            return[...state, action!.payload]

        default:
            return state

    }

}