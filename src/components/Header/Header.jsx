import React from "react";
import styles from "./Header.module.css";
import { useDarkMode } from "../../context/DarkModeContext";
import { HiMoon, HiSun } from "react-icons/hi";

export default function Header({ filters, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={styles.header}>
      <button onClick={toggleDarkMode} className={styles.toggle}>
        {darkMode && <HiMoon />}
        {!darkMode && <HiSun />}
      </button>

      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li key={index} className={styles.filter}>
            <button onClick={() => onFilterChange(value)} className={`${styles.button} ${filter === value && styles.selected}`}>
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
