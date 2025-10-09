// import React from 'react';
// import { configureStore } from '@reduxjs/toolkit';
// import CounterReducer from './slices/CounterSlice';
// import todoreducer from './slices/TodoSlice';

// const store = configureStore({
//   reducer: {
//     counter: CounterReducer,
//     todos : todoreducer
//   },
// });
// export default store

import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../redux/slices/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;