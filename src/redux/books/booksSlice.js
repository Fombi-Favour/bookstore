import { createSlice } from '@reduxjs/toolkit';

export const bookItems = [
  {
    itemId: 'item1',
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    itemId: 'item2',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    itemId: 'item3',
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
  },
];

const initialState = {
  books: bookItems,
  isLoading: false,
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const book = action.payload;
      state.books.push(book);
    },
    removeBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.itemId !== id);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
