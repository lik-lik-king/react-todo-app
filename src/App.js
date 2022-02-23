import React, {useState, useEffect} from 'react';
import './App.css';
// Imported Components
import Form from './components/Form';
import ToDoList from './components/ToDoList';


function App() {
  //Functions & State

// State

  // Adding a "text" state for the data I need
  // "inputText": is the actual value. This state value is what we want to be able to change. And the information is actually stored somewhere in the application
  // setInputText is where it allows you to change the value. This is the function/state that will be passed down in order for us to update the "inputText". This is our data that we will inject into our "inputText". 
  // And the cool part is you can use "setInputText" anywhere in the application because you of your state. And it will automatically update the application
  const [inputText, setInputText] = useState("");

  // Here I am adding a "todos" state and inside the function will be an array of objects.
  const [todos, setTodos] = useState([])

  // Here I am adding a state "status" that will allow us to filter through All, Completed & Uncompleted dropdown items
  const [status, setStatus] = useState('all');
  // Now here we are adding the todos that were either completed, all or uncompleted and instead of only having them in the "todo" state array. We also want to have them added to the filteredTodos state array which will be the one rendered out in the end.
  // Now with the logic in this coming from DevEd. He is wanting to have the two arrays for the todos because for example: if we have 10 todos and completed 5. We dont want to get rid of them and be only left with the 5 others that are left because when we toggle showing all we wont be able to get the information back. So we have both state arrays recording data but only one rendering out the information needed for the selected dropdown value
  const [filteredTodos, setFilteredTodos] = useState([]);

  // Use Effect
  // Runs once when the app starts
  useEffect(()=> {
    getLocalTodos()
  }, []);
// useEffect allows you to run a function every time a piece of state changes.
// So Every time you have a completed, uncompleted or all changes it will run the filterHandler function. 
// Every time a new object gets added we run the function filterHandler again.
// The whole function "useEffect(() => {},[todos, status])" is an argument and the first argument.
// The second argument is the empty array. And what that means is that the "useEffect" function will only run only once. When the component is first rendered.
// The power of using useEffect whenever you want is by adding a value in the empty array.
// In this app we have added todo so every time you add a new todo and hit submit the useEffect function is run again
// Make sure to view the updated data in your console
useEffect(() => {
  filterHandler();
  saveLocalTodos();
},[todos, status]);


  // Functions
  
  // Simply filtering what I explained above where we are taking a function named filterHandler and calling a switch statement with the value status and adding the case "completed", "uncompleted" & "all" which then filters through the todos using the setFilteredTodos state. And then add the todos to the filteredTodos state.
  const filterHandler = () =>{
    switch(status){
      case "completed":
      setFilteredTodos(todos.filter(todo => todo.completed === true))
      break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
        default: 
        setFilteredTodos(todos);
        break;
    };
  }
  
  // Save to Local
  // Here we are now saving the data that is being pushed in the new todo and the local storage
  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos))};

  // Here we add the getLocalTodos function and check the storage and set it to an empty array. However if we do have a todo added we need to add a variable in this case let "todoLocal". 
  // Also in this case we need to parse through this function using JSON.parse
  // Which we can then set the state or the setTodos to the todoLocal  
  const getLocalTodos = () => {
  if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(
      localStorage.getItem('todos')); setTodos(todoLocal);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Malik's ToDo List {inputText}</h1>
      </header>

      {/* Components being passed down using props*/}
      <Form 
      inputText = {inputText} 
      todos = {todos} 
      setTodos = {setTodos} 
      setInputText = {setInputText} setStatus = {setStatus}
      />
      <ToDoList 
      setTodos = {setTodos} 
      todos = {todos} 
      filteredTodos = {filteredTodos}
      />
      
    </div>
    )
  }

export default App;

