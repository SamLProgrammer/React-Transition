import { useMemo } from 'react';
import { useState } from 'react';
import { useCounter } from '../hooks'

const heavyMethod = (iterations = 1000) => {
    for(let i = 0; i < iterations; i++) {
        console.log(i);
    }
    return `${iterations} iterations completed`;
}

export const MemoHook = () => {
    const { counter, increment } = useCounter(1000);
    const [show, setShow] = useState(true);
    const {memorizeValue} = useMemo(() => {
        return heavyMethod(counter);
    }
    , [counter])

    return (
        <>
            <h1>Counter: <small>{counter}</small></h1>
            <h4>{memorizeValue}</h4>
            <button className='btn btn-primary'
                onClick={() => increment()}>
                +1
            </button>
            
            <button className='btn btn-primary'
                onClick={() => setShow((s) => !s)}>
                Show/Hide {JSON.stringify(show)}
            </button>

        </>
    )
}
