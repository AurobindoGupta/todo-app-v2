import { useState } from "react";
import Todos from './Todos';


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
  return (
    <div className="App">
    <h1>TODO's</h1>
    <Todos todos={state.todos} deleteTodo={deleteTodo}/>
      
  </div>
  )
}

export default App;
