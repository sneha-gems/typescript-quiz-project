export enum ReducerActionType {
    NEXT_QUE,
    PRE_QUE,
    SET_ANS,
    SET_SCORE,
    SET_LOAD
}

export type ReducerAction = {
    type: ReducerActionType | undefined,
    payload: any | undefined
}