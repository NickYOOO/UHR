import { configureStore } from '@reduxjs/toolkit';
import systemModal from '../modules/systemModalSlice';
import heritagesBySearch from '../modules/heritagesBySearchSlice';
import extraDataHeritagesBySearch from '../modules/extraDataHeritagesBySearchSlice';

const store = configureStore({
  reducer: {
    systemModal,
    heritagesBySearch,
    extraDataHeritagesBySearch,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
