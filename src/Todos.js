
const Todos = ({todos, deleteTodo}) =>{

    const todoList = todos.length ? (
        todos.map(todo=> {return (
            <div key= {todo.id}>
            <span onClick={()=>{deleteTodo(todo.id)}}>{todo.content}</span>
            </div>
        )})
    ): (
        <p> You have no TODOS left</p>
    ) 
    return(
        <div className='todos collection'>
            {todoList}
        </div>
    )

}

export default Todos;