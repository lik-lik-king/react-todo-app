import React from 'react';

//  Now we gain access to our props that was passed down to our Form component. By adding "props" and then adding "props.setInputText" below the "inputTextHandler" function. Or by adding "{setInputText}" into our parentheses where we added the "setInputText".

// Now we want to submit this and create an object with the data
const Form = ({setInputText, todos, setTodos, inputText, setStatus}) => {
    // Now this is where your component will arrive. And in here run a function that updates the "state"
    // This is where the javascript code is written 
    // Im naming all of the functions with handler in the name so you know which function is correlated with one another
    const inputTextHandler = (e) => {
        // Here I am console logging "e" as in "event" to show what is happening to the function when its gets executed.
        // And what happens is it now counts how many times the inputTextHandler function is being changed , hence onChange. Or it will tell you when something is happening and when you use dot notation for wanting something that has specifically happened such as you wanting to see the value or target. Try console.log(e.value) or console.log(e.target.value)
        // In my JSX below you will see that I have input the function name in order for my function to execute 
        // Every time the input changes this function is being ran
        console.log(e.target.value);
        // Here I am calling my props "setInputText" in order for the information or data to be passed
        setInputText(e.target.value)
    };
    const submitTodoHandler = (e) =>{
        e.preventDefault();
        setTodos([...todos, {text: inputText, completed: false, id: Math.random() * 1000 }
        ])
        setInputText("");
    };
    // Here I am adding a selection and passing the event (e) to then link with the "select" element. I am then importing the setStatus alongside my Form components props and adding the event along with the actual value hence e.target. value. This allows it to update to the correct status. 
    const statusHandler = (e) => {
        setStatus(e.target.value);
        console.log(e.target.value)
    }
    return (
        <form>
            {/* Below is the JSX. You can add the event handlers to the elements below in order for my elements to execute properly*/}
            {/* Here I have passed in the "inputTextHandler" for onChange */}
            {/* After passing in the inputText into our Form component. Here we are adding to our input the value of inputText so that way our UI updates as well. */}

            <input value={inputText} onChange={inputTextHandler} type='text' className='todo-input' />
            {/* Here I have passed "submitTodoHandler" for onClick */}
            <button onClick={submitTodoHandler} className='todo-button' type='submit'>
                <i className='fas fa-plus-square'></i>
            </button>
            <div className='select'>
                {/* Passing the "statusHandler" with the onChange event */}
                <select onChange={statusHandler} name='todos' className='filter-todo'>
                <option value='all'>All</option>
                <option value='completed'>Completed</option>
                <option value='uncompleted'>Uncompleted</option>
                </select>
            </div>
        </form>
        )
    }

export default Form