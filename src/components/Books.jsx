import React from 'react';
import Book from './Book';

const Books = () => {
  const books = [
    {
      id: 1,
      title: 'Romeo and Julliet',
      author: 'William Shakespare',
      category: 'Romance',
    },
    {
      id: 2,
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      category: 'Action',
    },
  ];

  return (
    <ul>
      {books.map((book) => (
        <Book key={book.title} title={book.title} author={book.author} category={book.category} />
      ))}
    </ul>
  );
};

export default Books;
