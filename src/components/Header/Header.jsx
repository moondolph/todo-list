import React from "react";
import styles from "./Header.module.css";
import { useDarkMode } from "../../context/DarkModeContext";
import { HiMoon, HiSun } from "react-icons/hi";
import { STATUS_LIST } from "../../App";

export default function Header({ filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={styles.header}>
      <button onClick={toggleDarkMode} className={styles.toggle}>
        {darkMode && <HiMoon />}
        {!darkMode && <HiSun />}
      </button>

      <ul className={styles.filters}>
        {STATUS_LIST.map((value, index) => (
          <li key={index} className={styles.filter}>
            <button onClick={() => onFilterChange({ status: value })} className={`${styles.button} ${filter.status === value && styles.selected}`}>
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
