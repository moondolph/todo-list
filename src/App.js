import { useState } from "react";
import "./App.css";
// import Appex from "./Appex";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import { DarkModeProvider } from "./context/DarkModeContext";

const filters = ["All", "To-Do", "Done"];
function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <div className="app-container">
      <DarkModeProvider>
        <Header filters={filters} filter={filter} onFilterChange={(filter) => setFilter(filter)} />
        <TodoList filter={filter} />
      </DarkModeProvider>
    </div>
  );
}

export default App;
