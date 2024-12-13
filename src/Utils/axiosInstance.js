

import axios from 'axios'
import store from '../redux/store';
import { getAuthToken } from '../redux/feature/userSlice';
import { NODE_APP_BASE_URL } from '.';

const axiosInstance = axios.create({
  baseURL: `${NODE_APP_BASE_URL}/api`,
});

// user
// email: 'agribussadmin@gmail.com',
// password: 'Admin@123',

axiosInstance.interceptors.request.use(
  (config) => {
    store.dispatch(getAuthToken())
    const state = store.getState();
    const token = state.user.token;
    
    const auth = token ? `Bearer ${token}` : '';
    config.headers['Authorization'] = auth;
    return config;
  },
  (error) => Promise.reject(error),
);

export default axiosInstance;
