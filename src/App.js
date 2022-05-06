import './App.css';
import TodoApp from './components/TodoApp';

function App() {

  // const [todoTitle, setTodoTitle] = useState("");
  // const [todoList, setTodoList] = useState([]);
  // const [editMode, setEditMode] = useState(false);
  // const [editableTodo, setEditableTodo] = useState(null);

  // const createTodoHandler = () => {
  //   if (todoTitle !== '') {
  //     const newTodo = {
  //       id: Date.now(),
  //       title: todoTitle,
  //       isComplete: false
  //     };

  //     setTodoList([...todoList, newTodo]);
  //     setTodoTitle("");

  //   } else {
  //     alert("Enter a valid todo item")
  //   }
  // }

  // const deleteTodoHandler = (id) => {

  //   //all the items returned except the item the user wanted to be deleted
  //   const newTodoList = todoList.filter((item) => item.id !== id);


  //   setTodoList(newTodoList);

  // }

  // const editTodoHandler = (id) => {
  //   const tobeEdited = todoList.find((item) => item.id === id);
  //   setEditMode(true);
  //   setEditableTodo(tobeEdited);
  //   setTodoTitle(tobeEdited.title);

  // }

  // const updateTodoHandler = () => {

  //   setTodoList(todoList.map((todo) => {
  //     if(todo.id === editableTodo.id){
  //       todo.title = todoTitle;
  //       return todo;
  //     }
  //       return todo;
      
  //   }))

  //   setEditMode(false);
  //   setTodoTitle("");
  //   setEditableTodo(null);  

  // }

  return (
    <div className ="App">
      <TodoApp />
         
    </div>
  );
}

export default App;
