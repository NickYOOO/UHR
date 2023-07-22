import { createSlice } from '@reduxjs/toolkit';

// type = confirm: true, alert: false
const initialState = {
  isOpen: false,
  type: false,
  msg: '',
};

const systemModalSlice = createSlice({
  name: 'systemModal',
  initialState,
  reducers: {
    setSystemModal: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export default systemModalSlice.reducer;
export const { setSystemModal } = systemModalSlice.actions;
