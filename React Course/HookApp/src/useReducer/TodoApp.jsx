import { useTodo } from "../hooks/useTodo";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

export const TodoApp = () => {

    const {todos, onNewTodo,
         handleDeleteTodo, handleToggleTodo,
        todosCount, pendingTodosCount} = useTodo();
    
    return (
        <>
            <h1>Todo App: {todosCount()} <small>, Pendientes : {pendingTodosCount()}</small></h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <ul className="list-group">
                        <TodoList todos={todos} 
                        onDeleteTodo={handleDeleteTodo}
                        onToggleTodo={handleToggleTodo}/>
                    </ul>
                </div>
                <div className="col-5">
                    <h4>Add TODO</h4>
                    <hr />
                    <TodoForm onNewTodo={onNewTodo}/>
                </div>
            </div>
        </>
    )
}
