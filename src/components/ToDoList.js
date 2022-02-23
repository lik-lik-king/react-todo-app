import React from 'react';
// Importing components
import Todo from './Todo';


const ToDoList = ({todos, setTodos, filteredTodos}) => {
    console.log(todos)
    return (
    <div className='todo-container'>
        <ul className='todo-list'>
            {/* Here we are mapping our todos function/component to be able to have access and update our todos. So for each todo from the state. It will render out a Todo component  */}
            {filteredTodos.map(todo => (
                // In our Todo component we are now passing in our props in order for the function to render the information.
            <Todo 
            setTodos={setTodos}
            todos={todos}
            key={todo.id} 
            todo={todo}
            text={todo.text} 
            /> 
            ))}
        </ul>
</div>

    );
};

export default ToDoList;