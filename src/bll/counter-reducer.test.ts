import {
    counterReducer,
    CounterStateType,
    isPreviewAC,
    setCountAC,
    setMaxValueAC,
    setStartValueAC
} from './counter-reducer';

test('start value should be setted', ()=>{
    const initialState: CounterStateType = {
        startValue: 0,
        maxValue: 5,
        count: 0,
        isPreview: true,
    }

    const endState = counterReducer(initialState, setStartValueAC(18))

    expect(initialState.startValue).toBe(0)
    expect(endState.startValue).toBe(18)
})

test('max value should be setted', ()=>{
    const initialState: CounterStateType = {
        startValue: 0,
        maxValue: 5,
        count: 0,
        isPreview: true,
    }

    const endState = counterReducer(initialState, setMaxValueAC(25))

    expect(initialState.maxValue).toBe(5)
    expect(endState.maxValue).toBe(25)
})

test('count value should be setted', ()=>{
    const initialState: CounterStateType = {
        startValue: 0,
        maxValue: 5,
        count: 0,
        isPreview: true,
    }

    const endState = counterReducer(initialState, setCountAC(18))

    expect(initialState.count).toBe(0)
    expect(endState.count).toBe(18)
})

test('isPreview should be changed to display settings', ()=>{
    const initialState: CounterStateType = {
        startValue: 0,
        maxValue: 5,
        count: 0,
        isPreview: true,
    }

    const endState = counterReducer(initialState, isPreviewAC(false))

    expect(initialState.isPreview).toBe(true)
    expect(endState.isPreview).toBe(false)
})

