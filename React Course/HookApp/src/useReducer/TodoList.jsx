import { TodoItem } from "./TodoItem"

export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
    return (
        <ul>
            {
                
                todos.length > 0 && todos.map((todo) => {
                    return (<TodoItem key={todo.id}
                        id={todo.id}
                        description={todo.description}
                        done={todo.done} 
                        onDeleteTodo={onDeleteTodo}
                        onToggleTodo={onToggleTodo}/>)
                })
            }
        </ul>
    )
}
