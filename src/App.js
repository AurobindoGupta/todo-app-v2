import { useState } from "react";
import Todos from './Todos';
import Addform from './AddForm';


function App() {

  const[state,setState]= useState({
    todos:[
      {id:1, content:'milk'},
      {id:2, content:'water'}
    ]
  })
  
 const deleteTodo = (id) =>{
    const todos = state.todos.filter(todo => {
      return(todo.id !== id)
    });

    setState({todos : todos})
  }

  const addTodo = (todo)=>{
    todo.id = Math.random();
    let todos = [...state.todos,todo];
    setState({todos: todos});
  }
  return (
    <div className="App">
    <h1>TODO's</h1>
    <Todos todos={state.todos} deleteTodo={deleteTodo}/>
      <Addform addTodo={addTodo}/>
  </div>
  )
}

export default App;
