import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from '../style/Header.module.css';
import { removeBookItems } from '../redux/books/booksSlice';

const Book = ({ books }) => {
  const { title, author, category } = books;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeBookItems(books.item_id));
  };

  return (
    <div className={styles.lesson_panel}>
      <div className={styles.text}>
        <span className={styles.category}>{category}</span>
        <span className={styles.title}>{title}</span>
        <span className={styles.author}>{author}</span>
      </div>
      <div>
        <button type="button">Comments</button>
        <button type="button" onClick={handleDelete}>Remove</button>
        <button type="button">Edit</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  books: PropTypes.objectOf(PropTypes.string).isRequired,
  // item_id: PropTypes.string.isRequired,
  // title: PropTypes.string.isRequired,
  // author: PropTypes.string.isRequired,
  // category: PropTypes.string.isRequired,
};

export default Book;
