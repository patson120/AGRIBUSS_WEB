import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getNotification } from '../../Utils/api/notificationApi';

// Define an initial state
const initialState = {
  notifications: [],
  status: 'idle', // idle | loading | succeeded | failed
  error: null,
};

// Async thunk to fetch products
export const fetchNotifications = createAsyncThunk('notification/getNotification', async () => {
    const data = await getNotification();
    return data; // Ensure data is the array of products
});

// // Async thunk to fetch notifications
// export const fetchNotifications = createAsyncThunk(
//   'notifications/fetchNotifications',
//   async (userId) => {
//     const response = await axios.get(`http://localhost:5000/api/notifications/${userId}`);
//     return response.data;
//   }
// );

// Create a slice
const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    markAsRead: (state, action) => {
      const notification = state.notifications.find(notif => notif._id === action.payload);
      if (notification) {
        notification.isRead = true;
      }
    },
    addNotification: (state, action) => {
      state.notifications.unshift(action.payload); // Add new notification to the start of the list
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotifications.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNotifications.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.notifications = action.payload;
      })
      .addCase(fetchNotifications.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Export actions and reducer
export const { markAsRead, addNotification } = notificationSlice.actions;
export default notificationSlice.reducer;