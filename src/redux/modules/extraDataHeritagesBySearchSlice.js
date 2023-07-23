import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentPage: 1,
  totalItems: 0,
};

const ExtraDataHeritagesBySearchSlice = createSlice({
  name: 'extraDataHeritagesBySearch',
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      return { ...state, currentPage: action.payload };
    },
    setTotalItems: (state, action) => {
      return { ...state, totalItems: action.payload };
    },
  },
});

export default ExtraDataHeritagesBySearchSlice.reducer;
export const { setCurrentPage, setTotalItems } = ExtraDataHeritagesBySearchSlice.actions;
