// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import quizReducer from './reducers/quizReducer';

const store = configureStore({
  reducer: {
    quizReducer: quizReducer,
  },
});

export default store;
