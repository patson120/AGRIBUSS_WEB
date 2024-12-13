import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  answers: [],
  status: 'idle',
  error: null,
};

// Async thunk to fetch answers for a specific question
export const fetchAnswers = createAsyncThunk(
  'answers/fetchAnswers',
  async (questionId) => {
    const response = await axios.get(`http://localhost:5000/api/questions/${questionId}/answers`);
    return response.data;
  }
);

// Slice
const answersSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {
    addAnswer: (state, action) => {
      state.answers.push(action.payload);
    },
    // Other reducers if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnswers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAnswers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.answers = action.payload;
      })
      .addCase(fetchAnswers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addAnswer } = answersSlice.actions;
export default answersSlice.reducer;