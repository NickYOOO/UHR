import { createSlice } from '@reduxjs/toolkit';

// type = confirm: true, alert: false
const initialState = {
  isOpen: false,
  type: false,
  isConfirm: false,
  msg: '비밀번호를 확인해 주세요',
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
