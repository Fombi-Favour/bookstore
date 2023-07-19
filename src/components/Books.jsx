import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBookItems } from '../redux/books/booksSlice';
import Book from './Book';
import styles from '../style/Header.module.css';

const Books = () => {
  const { bookContent, isLoading } = useSelector((state) => state.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookItems());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className={styles.loading}>
        <div className={styles.circular}>circular</div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className={styles.list}>
      {bookContent.map((item) => (
        <Book
          key={item.item_id}
          books={item}
        />
      ))}
    </div>
  );
};

export default Books;
