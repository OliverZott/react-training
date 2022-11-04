import { ACTIONS } from './App'

export default function DigitButton({ dispatch, digit }: { dispatch: any; digit: any }) {
    return (
        <button
            onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
        >
            {digit}
        </button>
    )
} 