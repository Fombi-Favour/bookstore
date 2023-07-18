import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const Books = () => {
  const { books } = useSelector((state) => state.book);

  return (
    <div>
      {books.map((item) => (
        <Book
          key={item.itemId}
          title={item.title}
          author={item.author}
          category={item.category}
        />
      ))}
    </div>
  );
};

export default Books;
