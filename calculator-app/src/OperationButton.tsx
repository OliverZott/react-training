import { ACTIONS } from "./Actions";

export default function OperationButton({ operation, dispatch }: { operation: any; dispatch: any }) {
    return (
        <button
            onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })}
        >
            {operation}
        </button>
    )
}