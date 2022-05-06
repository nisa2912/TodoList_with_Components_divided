import {useState} from 'react';
import Form from './Form';
import TodoList from './TodoList';

function TodoApp() {
    const [todoTitle, setTodoTitle] = useState("");

    const [todoList, setTodoList] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [editableTodo, setEditableTodo] = useState(null);

  return (
    <div className ="todo-app">

        <Form
        todoTitle={todoTitle}
        setTodoTitle={setTodoTitle} 
        todoList={todoList}
        setTodoList={setTodoList}
        editMode={editMode}
        setEditMode={setEditMode}
        editableTodo={editableTodo}
        setEditableTodo={setEditableTodo}/> 
        
        <TodoList
         setTodoTitle={setTodoTitle} 
         todoList={todoList}
         setTodoList={setTodoList}
         editMode={editMode}
         setEditMode={setEditMode}
         editableTodo={editableTodo}
         setEditableTodo={setEditableTodo}/>

    </div>
  )
}

export default TodoApp