import { getCat, createCat } from '../../Utils/api/categoryApi.js';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { askQuestion, getQuestion, getQuestionByUser } from '../../Utils/api/questionApi.js';

const initialState = {
    questions: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
};

// Async thunk to create a new product
export const createQuestion = createAsyncThunk('question/createQuestion', async (data) => {
    const response = await askQuestion(data);
    return response; // Ensure response is the product object
});

// Async thunk to fetch products
export const getQuestions = createAsyncThunk('question/getquestion', async () => {
    const data = await getQuestion();
    return data; // Ensure data is the array of products
});

// Async thunk to fetch products
export const getUserQuestions = createAsyncThunk('question/getUserQuestion', async () => {
    const data = await getQuestionByUser();
    return data; // Ensure data is the array of products
});

// Slice for product state
export const questionSlice = createSlice({
    name: 'question',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getQuestions.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getQuestions.fulfilled, (state, action) => {
                state.status = 'succeeded';
                // Assuming action.payload is an array of products
                state.products = action.payload;
            })
            .addCase(getQuestions.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(createQuestion.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createQuestion.fulfilled, (state, action) => {
                state.status = 'succeeded';
                // Assuming action.payload is the created product
                state.products.push(action.payload.data);
            })
            .addCase(createQuestion.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

// Selector to access products
export const allCategories = (state) => state.category.categories;

// Export the reducer
export default questionSlice.reducer;