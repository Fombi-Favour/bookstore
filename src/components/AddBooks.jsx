import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

const AddBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const addNew = () => {
    const newBook = {
      itemId: uuid(),
      title,
      author,
      category,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <div>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Book Title" />
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="other">Category</option>
          <option value="action">Action</option>
          <option value="fiction">Fiction</option>
          <option value="nonfiction">Nonfiction</option>
        </select>
        <button type="button" onClick={addNew}>ADD BOOK</button>
      </div>
    </div>
  );
};

export default AddBooks;
