import React from 'react';
import styles from '../style/Header.module.css';

// eslint-disable-next-line react/prop-types
const Book = ({ title, author, category }) => (
  <li className={styles.lesson_panel}>
    <div className={styles.text}>
      <span className={styles.category}>{category}</span>
      <span className={styles.title}>{title}</span>
      <span className={styles.author}>{author}</span>
    </div>
  </li>
);

export default Book;
