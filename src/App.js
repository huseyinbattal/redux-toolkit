import "./App.css";
import { useState } from "react";
import { useTodo } from "./redux";

function App() {
  const [todo, setTodo] = useState("");
  // const { todos } = useSelector((state) => state.todo);
  // const dispatch = useDispatch();

  const  { todos, addTodo, deleteTodo } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo || todos.includes(todo)) {
      alert("Please enter a valid todo");
      return;
    }
    (addTodo(todo));
    setTodo("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button>Add ToDo</button>
      </form>
      <ol>
        {todos.map((todo, index) => (
          <div style={{ background: "yellow", width: "100px" }} key={index}>
            <li>
              <p>{todo}</p>
              <button onClick={() => deleteTodo(todo)}>Delete</button>
            </li>
          </div>
        ))}
      </ol>
    </div>
  );
}

export default App;
