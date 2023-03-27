import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

    const {counter, increment, decrement, reset} = useCounter();

    const handleAddClick = () => {
        increment(2);
    }

    const handleResetClick = () => {
        reset();
    }

    const handleSubClick = () => {
        if(counter == 0) return;
        decrement(2);
    }

    return (
        <>
            <h1>Counter Hook</h1>
            <h2>{counter}</h2>
            <button onClick={handleSubClick}>-1</button>
            <button onClick={handleResetClick}>Reset</button>
            <button onClick={handleAddClick}>+1</button>
        </>
    )
}
