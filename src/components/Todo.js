import React from 'react';

const Todo = ({text, todo, todos, setTodos}) => {
    // Events
    const deleteHandler = () => {
        // Here I am comparing the element that i'm clicking on to match the element from the state. 
        // Im using filter to filter through the state trying to find the element with (todo) what we are clicking on. 
        setTodos(todos.filter((el) => el.id !== todo.id));
        console.log(todo)
    };
    // Below is for the completed checkmark
       const completeHandler = () => {
        // Here we will map over the state and have access to each individual (todo) item/element
           setTodos(todos.map(item => {
            // Here we are adding an if statement that needs to match exactly from the item.id to the todo.id
                if(item.id === todo.id){
                    // If this is true then we return an object and pass in the properties the item has already had using the rest parameters for item. 
                    // By using the (rest parameters/property) ...item we are narrowing down to the property that we want to modify which is changing the false to true
                    return{
                        ...item, completed: !item.completed
                    };
                }
                return item;
           }))
       }

    return(
        <div className='todo'>
        <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
        <button onClick={completeHandler} className="complete-btn"> 
            <i className='fas fa-check'></i>
        </button>
        <button onClick={deleteHandler} className='trash-btn'>
            <i className = 'fas fa-trash'></i>
        </button>
    </div>
    );
};

export default Todo