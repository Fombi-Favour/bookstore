import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlices = createSlice({
  name: 'catgories',
  initialState,
});

export default categoriesSlices;
