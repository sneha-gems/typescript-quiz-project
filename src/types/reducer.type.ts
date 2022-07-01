export enum ReducerActionType {
    NEXT_QUE,
    START_GAME,
    CHECK_ANS,
    SET_SCORE,
    SET_LOAD
}

export type ReducerAction = {
    type: ReducerActionType | undefined,
    payload: any | undefined
}