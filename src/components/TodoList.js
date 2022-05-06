import React from 'react';

function TodoList(props) {

    const deleteTodoHandler = (id) => {

        //all the items returned except the item the user wanted to be deleted
        const newTodoList = props.todoList.filter((item) => item.id !== id);
    
    
        props.setTodoList(newTodoList);
    
      }
    
      const editTodoHandler = (id) => {
        const tobeEdited = props.todoList.find((item) => item.id === id);
        props.setEditMode(true);
        props.setEditableTodo(tobeEdited);
        props.setTodoTitle(tobeEdited.title);
    
      }
    
  return (
    <ul className='todo-list'>
          {props.todoList.map(todo => 
            <li>
              <span>{todo.title}</span>
              <button onClick = {() => editTodoHandler(todo.id)}>
              Edit
              </button>
              <button onClick={() => deleteTodoHandler(todo.id)}>
               Delete
              </button>
            </li>

            )}
    </ul>

  )
}

export default TodoList