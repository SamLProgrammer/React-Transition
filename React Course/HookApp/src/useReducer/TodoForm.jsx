import React, { useRef } from 'react'

export const TodoForm = ({onNewTodo}) => {
    
    const inputRef = useRef();

    const handleNewTodo = (evt) => {
        evt.preventDefault();
        const newTodo = {
            id: new Date().getTime(),
            description: inputRef.current.value,
            done: false,
        }
        onNewTodo(newTodo);
        inputRef.current.value = null;
    }

    return (
        <form>
            <input ref={inputRef} type="text"
                placeholder="What would you like to do"
                className="form-control"></input>
            <button type="submit" 
            className="btn btn-outline-primary mt-1"
            onClick={handleNewTodo}>
                Add Todo
            </button>
        </form>
    )
}
