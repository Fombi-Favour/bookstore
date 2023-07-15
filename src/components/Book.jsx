import React from 'react';
import PropTypes from 'prop-types';
import styles from '../style/Header.module.css';

const Book = ({ title, author, category }) => (
  <li className={styles.lesson_panel}>
    <div className={styles.text}>
      <span className={styles.category}>{category}</span>
      <span className={styles.title}>{title}</span>
      <span className={styles.author}>{author}</span>
    </div>
  </li>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
