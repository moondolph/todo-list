import React from "react";
import { GoTrash } from "react-icons/go";
import styles from "./Todo.module.css";
import { STATUS } from "../../App";

export default function Todo({ index, todo, onUpdate, onDelete }) {
  const { id, text, status } = todo;
  const handleChange = (e) => {
    onUpdate({ ...todo, status: e.target.checked ? STATUS.DONE : STATUS.TODO });
  };

  const handleDelete = () => onDelete(todo);

  return (
    <li className={styles.todo}>
      <span className={styles.number}>{index}</span>
      <input className={styles.checkbox} type="checkbox" id={id} checked={status === STATUS.DONE} onChange={handleChange} />
      <label className={styles.text} htmlFor={id}>
        {text}
      </label>
      <button className={styles.button} onClick={handleDelete}>
        <GoTrash />
      </button>
    </li>
  );
}
