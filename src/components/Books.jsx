import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const Books = () => {
  const { books } = useSelector((state) => state.book);
  console.log(books);

  return (
    <div>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      {books.map((item) => <Book key={item.item_id} {...item} />)}
    </div>
  );
};

export default Books;
