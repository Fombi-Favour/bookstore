import React from 'react';
import styles from '../style/Header.module.css';

const Books = () => (
  <div className={styles.lesson_panel}>
    <div className={styles.row_1}>
      <div>
        <div className={styles.text}>
          <span className={styles.category}>Action</span>
          <span className={styles.title}>The Hunger Games</span>
          <span className={styles.author}>Suzanne Collins</span>
        </div>
        <ul className={styles.action}>
          <li>
            <button type="button">
              Comments
            </button>
          </li>
          <li>
            <button type="button">
              Remove
            </button>
          </li>
          <li>
            <button type="button">
              Edit
            </button>
          </li>
        </ul>
      </div>
      <div className={styles.progress}>
        <p />
        <div className={styles.progress_text}>
          <span>64%</span>
          <span>Completed</span>
        </div>
      </div>
    </div>
    <div className={styles.row_2}>CURRENT CHAPTER</div>
  </div>
);

export default Books;
