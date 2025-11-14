import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";
import { STATUS } from "../../App";

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState([
    { id: "123", text: "Add your first task", status: STATUS.TODO },
    { id: "124", text: "最初のタスクを追加しましょう", status: STATUS.TODO },
    { id: "125", text: "첫 할 일을 추가해보세요", status: STATUS.TODO },
    { id: "126", text: "添加你的第一个任务吧。", status: STATUS.TODO },
  ]);

  const handleAdd = (todo) => setTodos([...todos, todo]);
  const handleUpdate = (updated) => setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)));
  const handleDelete = (deleted) => setTodos(todos.filter((todo) => todo.id !== deleted.id));

  const filtered = getFilteredItems(todos, filter);

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((todo, index) => (
          <Todo index={index + 1} key={todo.id} todo={todo} onUpdate={handleUpdate} onDelete={handleDelete}>
            {todo.text}
          </Todo>
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

/* 🔽 보조함수는 아래쪽 */
function getFilteredItems(todos, filter) {
  if (filter.status === STATUS.ALL) return todos;
  return todos.filter((todo) => todo.status === filter.status);
}
