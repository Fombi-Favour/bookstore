import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from '../style/Header.module.css';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({
  itemId, title, author, category,
}) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.lesson_panel}>
      <div className={styles.text}>
        <span className={styles.category}>{category}</span>
        <span className={styles.title}>{title}</span>
        <span className={styles.author}>{author}</span>
      </div>
      <div>
        <button type="button">Comments</button>
        <button type="button" onClick={() => dispatch(removeBook(itemId))}>Remove</button>
        <button type="button">Edit</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  itemId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
