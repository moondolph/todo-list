import "./Appex.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Appex() {
  const [todos, setTodos] = useState([
    { id: uuidv4(), text: "안녕", checked: false },
    { id: uuidv4(), text: "친구들", checked: false },
  ]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((prev) => [...prev, { id: uuidv4(), text: input, checked: false }]);
    setInput("");
  };

  const handleDelete = (e, deletedId) => {
    e.preventDefault();
    setTodos((prev) => prev.filter((todo) => todo.id !== deletedId));
  };

  const handleCheckboxToggle = (id) => {
    setTodos((prev) => prev.map((todo) => (id === todo.id ? { ...todo, checked: !todo.checked } : todo)));
  };

  const filters = ["all", "completed", "uncompleted"];
  const [filter, setFilter] = useState(filters[0]);
  const handleFilter = (type) => {
    setFilter(type);
  };

  function getFilteredItems(todos, filter) {
    if (filter === "all") {
      return todos;
    } else if (filter === "completed") {
      return todos.filter((todo) => todo.checked === true);
    } else if (filter === "uncompleted") {
      return todos.filter((todo) => todo.checked === false);
    }
  }

  const filtered = getFilteredItems(todos, filter);

  return (
    <div className="App">
      <header>
        <ul>
          <li>
            <input type="checkbox" id="all" name="all" checked={filter === "all"} onChange={() => handleFilter("all")} />
            <label htmlFor="all">All</label>
          </li>
          <li>
            <input type="checkbox" id="completed" name="completed" checked={filter === "completed"} onChange={() => handleFilter("completed")} />
            <label htmlFor="completed">Completed</label>
          </li>
          <li>
            <input type="checkbox" id="uncompleted" name="uncompleted" checked={filter === "uncompleted"} onChange={() => handleFilter("uncompleted")} />
            <label htmlFor="uncompleted">Uncompleted</label>
          </li>
        </ul>
      </header>
      <form onSubmit={handleSubmit}>
        <ul>
          {filtered.map((todo) => (
            <li key={todo.id} className="list">
              <input
                type="checkbox"
                className="checkbox"
                checked={todo.checked}
                onChange={() => handleCheckboxToggle(todo.id)} // `onClick` 대신 `onChange` 사용
                name="checkbox"
              />
              <p className="text">{todo.text}</p>
              <button type="button" className="delete" onClick={(e) => handleDelete(e, todo.id)}>
                🗑️
              </button>
            </li>
          ))}
        </ul>
        <div className="bottom">
          <input onChange={(e) => setInput(e.target.value)} value={input} name="input" />
          <button type="submit">입력</button>
        </div>
      </form>
    </div>
  );
}
