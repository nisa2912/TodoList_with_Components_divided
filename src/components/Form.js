import React from 'react';

function Form(props) {
    // const [todoTitle, setTodoTitle] = useState("");

    const createTodoHandler = () => {
        if (props.todoTitle !== '') {
          const newTodo = {
            id: Date.now(),
            title: props.todoTitle,
            isComplete: false
          };
    
          props.setTodoList([...props.todoList, newTodo]);
          props.setTodoTitle("");
    
        } else {
          alert("Enter a valid todo item")
        }
      }

      const updateTodoHandler = () => {

        props.setTodoList(props.todoList.map((todo) => {
          if(todo.id === props.editableTodo.id){
            todo.title = props.todoTitle;
            return todo;
          }
            return todo;
          
        }))
    
        props.setEditMode(false);
        props.setTodoTitle("");
        props.setEditableTodo(null);  
    
      }
    

  return (
    <form onSubmit={(e) => e.preventDefault()}>
          <input 
          type="text"
           value={props.todoTitle} 
           onChange = {(event) => props.setTodoTitle(event.target.value)} />
          <button onClick={() =>{ props.editMode ? updateTodoHandler() : createTodoHandler()}}> {props.editMode ? "Edit todo" : "Add todo"}
          </button>
          
    </form>
  )
}

export default Form