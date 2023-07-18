import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBookItems } from '../redux/books/booksSlice';
import Book from './Book';

const Books = () => {
  const { bookContent } = useSelector((state) => state.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookItems());
  }, [dispatch]);

  return (
    <div>
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
