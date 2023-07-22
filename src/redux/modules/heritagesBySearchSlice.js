import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const HeritagesBySearchSlice = createSlice({
  name: 'heritagesBySearch',
  initialState,
  reducers: {
    setHeritagesBySearch: (state, action) => {
      return [...action.payload];
    },
  },
});

export default HeritagesBySearchSlice.reducer;
export const { setHeritagesBySearch } = HeritagesBySearchSlice.actions;
