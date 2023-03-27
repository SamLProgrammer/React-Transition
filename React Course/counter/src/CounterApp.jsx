import PropTypes from 'prop-types'
import { useState } from 'react';

export const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(value);
    
    const handleAddClick = (evt) => {
        setCounter((c) => c+1);
    }

    const handleSubClick = (evt) => {
        setCounter((c) => c-1);
    }

    const handleResetClick = (evt) => {
        setCounter(value);
    }

    return (
        <>
            <h1>Counter App</h1>
            <h2>{counter}</h2>
            <button onClick={(evt) => handleAddClick(evt)}>+1</button>
            <button onClick={(evt) => handleSubClick(evt)}>-1</button>
            <button onClick={(evt) => handleResetClick(evt)}>Reset</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}