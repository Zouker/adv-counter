const initialState = {
    startValue: 0,
    maxValue: 5,
    count: 0,
    isPreview: true,
}

type InitialStateType = typeof initialState

export type CounterStateType = {
    startValue: number,
    maxValue: number,
    count: number,
    isPreview: boolean,
}

export const counterReducer = (state: CounterStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'SET-START-VALUE':
            return {...state, startValue: action.startValue}
        case 'SET-MAX-VALUE':
            return {...state, maxValue: action.maxValue}
        case 'SET-COUNT-VALUE':
            return {...state, count: action.count}
        case 'SET-ISPREVIEW-VALUE':
            return {...state, isPreview: action.isPreview}
        default:
            return state
    }
}

export type ActionType =
    SetStartValueActionType
    | SetMaxValueActionType
    | SetCountValueActionType
    | SetIsPreviewActionType

export const setStartValueAC = (startValue: number) => ({type: 'SET-START-VALUE', startValue} as const)
export const setMaxValueAC = (maxValue: number) => ({type: 'SET-MAX-VALUE', maxValue} as const)
export const setCountAC = (count: number) => ({type: 'SET-COUNT-VALUE', count} as const)
export const isPreviewAC = (isPreview: boolean) => ({type: 'SET-ISPREVIEW-VALUE', isPreview} as const)

type SetStartValueActionType = ReturnType<typeof setStartValueAC>
type SetMaxValueActionType = ReturnType<typeof setMaxValueAC>
type SetCountValueActionType = ReturnType<typeof setCountAC>
type SetIsPreviewActionType = ReturnType<typeof isPreviewAC>