import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBookItems } from '../redux/books/booksSlice';
import Book from './Book';
import styles from '../style/Header.module.css';

const Books = () => {
  const { bookContent } = useSelector((state) => state.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookItems());
  }, [dispatch]);

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
