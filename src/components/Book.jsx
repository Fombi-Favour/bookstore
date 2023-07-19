import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import { useDispatch } from 'react-redux';
import styles from '../style/Header.module.css';
import 'react-circular-progressbar/dist/styles.css';
import { removeBookItems } from '../redux/books/booksSlice';

const Book = ({ books }) => {
  const { title, author, category } = books;
  const dispatch = useDispatch();
  const progressText = Math.floor(Math.random() * 101);

  const handleDelete = () => {
    dispatch(removeBookItems(books.item_id));
  };

  return (
    <section className={styles.lesson_panel}>
      <main className={styles.lesson_content}>
        <div>
          <div className={styles.text}>
            <span className={styles.category}>{category}</span>
            <span className={styles.title}>{title}</span>
            <span className={styles.author}>{author}</span>
          </div>
          <ul className={styles.action}>
            <li>
              <button type="button">Comments</button>
            </li>
            <li>
              <button type="button" onClick={handleDelete}>Remove</button>
            </li>
            <li>
              <button type="button">Edit</button>
            </li>
          </ul>
        </div>
        <div className={styles.progress}>
          <CircularProgressbar value={progressText} className={styles.progress_pic} />
          <div className={styles.progress_content}>
            <span className={styles.progress_text}>
              {progressText}
              %
            </span>
            <span className={styles.progress_complete}>Completed</span>
          </div>
        </div>
      </main>
      {/* <main className={styles.current}></main> */}
    </section>
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
