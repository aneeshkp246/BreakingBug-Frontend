import { configureStore } from '@reduxjs/toolkit';
import {userReducer} from './userSlice'; // Adjust the import path according to your project structure

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
