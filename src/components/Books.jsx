import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const Books = () => {
  // const books = [
  //   {
  //     id: 1,
  //     title: 'Romeo and Julliet',
  //     author: 'William Shakespare',
  //     category: 'Romance',
  //   },
  //   {
  //     id: 2,
  //     title: 'The Hunger Games',
  //     author: 'Suzanne Collins',
  //     category: 'Action',
  //   },
  // ];

  const { bookItems } = useSelector((store) => store.books);

  return (
    <ul>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      {bookItems.map((item) => <Book key={item.item_id} {...item} />)}
    </ul>
  );
};

export default Books;
