import { useState } from "react";
import "./App.css";
// import Appex from "./Appex";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import { DarkModeProvider } from "./context/DarkModeContext";

// 1) 상수 객체 (ENUM)
export const STATUS = {
  ALL: "All",
  TODO: "To-Do",
  DONE: "Done",
};
// 2) UI용 배열
export const STATUS_LIST = [STATUS.ALL, STATUS.TODO, STATUS.DONE];

function App() {
  const [filter, setFilter] = useState({
    status: STATUS.ALL,
  });
  return (
    <div className="app-container">
      <DarkModeProvider>
        <Header filter={filter} onFilterChange={(nextFilter) => setFilter((prev) => ({ ...prev, ...nextFilter }))} />
        <TodoList filter={filter} />
      </DarkModeProvider>
    </div>
  );
}

export default App;
