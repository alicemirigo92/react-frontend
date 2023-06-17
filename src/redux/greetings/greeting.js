import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_GREETING = 'hello-rails-react/greeting/GET_GREETING';
const initialState = '';

export const fetchGreeting = createAsyncThunk(GET_GREETING, async () => {
  const data = await fetch('http://127.0.0.1:3000/api/greetings');
  const response = await data.json();
  return response;
});

// eslint-disable-next-line default-param-last
const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_GREETING}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

export default greetingReducer;
