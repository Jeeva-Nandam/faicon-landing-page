import React, { useState } from "react";
import styles from "./Search.module.css";

const Search = () => {
  const [value, setValue] = useState("");

  return (
    <div className={styles.searchBarWrapper}>
      <input
        type="text"
        value={value}
        className={styles.input}
        placeholder="Search..."
        onChange={(e) => setValue(e.target.value)}
        // The screenshot shows a non-editable input; remove if you want editable
      />
      <button className={styles.closeButton} aria-label="Clear">
        &times;
      </button>
    </div>
  );
};

export default Search;
