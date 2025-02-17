import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./AddTodo.module.css";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = text.trim();
    if (todo.length === 0) {
      setText("");
      return;
    }
    onAdd({ id: uuidv4(), text: todo, status: "active" });
    setText("");
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input className={styles.input} type="text" placeholder="Type To-do" value={text} onChange={handleChange} />
      <button className={styles.button}>Add</button>
    </form>
  );
}
