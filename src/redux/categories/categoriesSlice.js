import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: 'Under construction',
};

const categoriesSlices = createSlice({
  name: 'catgories',
  initialState,
  reducers: {
    statusCheck: (state, action) => {
      state.categories = action.payload === 'Under construction' ? 'Under construction' : state.categories;
    },
  },
});

export const { statusCheck } = categoriesSlices.actions;

export default categoriesSlices.reducer;
