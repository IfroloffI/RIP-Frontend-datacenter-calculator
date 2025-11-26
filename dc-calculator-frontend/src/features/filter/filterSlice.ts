import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface FilterState {
  query: string;
}

const initialState: FilterState = {
  query: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    clearQuery: (state) => {
      state.query = '';
    },
  },
});

export const { setQuery, clearQuery } = filterSlice.actions;
export default filterSlice.reducer;