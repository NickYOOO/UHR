import { configureStore } from '@reduxjs/toolkit';
import systemModal from '../modules/systemModalSlice';

const store = configureStore({
  reducer: {
    systemModal,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
