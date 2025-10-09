import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import CounterReducer from './slices/CounterSlice';
import todoreducer from './slices/TodoSlice';

const store = configureStore({
  reducer: {
    count: CounterReducer,
    todos : todoreducer
  },
});
export default store