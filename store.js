import { configureStore } from '@reduxjs/toolkit';
import popupReducer from './src/redux/popupSlice';
import signInReducer from './src/redux/signInSlice';
import userReducer from './src/redux/userSlice';
;

export const store = configureStore({
  reducer: {
    popup: popupReducer,
    signIn: signInReducer,
    user: userReducer
  }
});