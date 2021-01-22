import { configureStore } from '@reduxjs/toolkit';
import numberReducer from '$redux-toolkit/slice/number';

const reducer = {
  number: numberReducer
};
const store = configureStore({ reducer });

export default store;