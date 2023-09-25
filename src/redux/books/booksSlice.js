import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/HJsXdwhH2cAEZqBOs2T3/books';

const initialState = {
  bookContent: [],
  isLoading: false,
};

export const getBookItems = createAsyncThunk('book/getBookItems', async (thunkAPI) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    thunkAPI.rejectWithValue(err);
    return err;
  }
});

export const postBookItems = createAsyncThunk('book/postBookItems', async (book, thunkAPI) => {
  const newBook = {
    item_id: book.item_id,
    title: book.title,
    author: book.author,
    category: book.category,
  };

  try {
    const response = await axios.post(url, newBook);
    thunkAPI.dispatch(getBookItems());
    return { book, response };
  } catch (err) {
    thunkAPI.rejectWithValue(err);
    return err;
  }
});

export const removeBookItems = createAsyncThunk('book/removeBookItems', async (id, thunkAPI) => {
  try {
    const res = await axios.delete(`${url}/${id}`, id);
    thunkAPI.dispatch(getBookItems());
    return { id, response: res.data };
  } catch (err) {
    thunkAPI.rejectWithValue(err);
    return err;
  }
});

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const book = action.payload;
      state.bookContent.push(book);
    },
    removeBook: (state, action) => {
      const id = action.payload;
      state.books = state.bookContent.filter((book) => book.itemId !== id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBookItems.pending, (state) => {
      state.isLoading = true;
    })
      .addCase(getBookItems.fulfilled, (state, action) => {
        state.isLoading = false;
        const getBookData = Object.keys(action.payload).map((data) => {
          const item = {};
          item.item_id = data;
          item.title = action.payload[data][0].title;
          item.author = action.payload[data][0].author;
          item.category = action.payload[data][0].category;
          return item;
        });
        state.bookContent = getBookData;
      })
      .addCase(getBookItems.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(postBookItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postBookItems.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(postBookItems.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(removeBookItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeBookItems.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(removeBookItems.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
