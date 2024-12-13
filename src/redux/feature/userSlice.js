import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerUser, userLogin, getUsers, getAllUsers} from "../../Utils/api/userApi";

// const navigate = useNavigate();

const initialState = {
    users: [],
    userInfo:{},
    token:'',
    role: {},
    status: 'idle',
    error: null 
}


// Async thunk to fetch products
export const getUserr = createAsyncThunk('user/role', async (role) => {
    const data = await getUsers(role);
    return data; // Ensure data is the array of products
});

// Async thunk to fetch products
export const getAllUser = createAsyncThunk('user/allUsers', async () => {
    const data = await getAllUsers();
    return data; // Ensure data is the array of products
});

export const register = createAsyncThunk('user/register', async (data) => {
    console.log(data);
    const response = await registerUser(data);
    return response;
})

export const login = createAsyncThunk('user/login', async (data) => {
    console.log("Login request reach user slice")
    const response = await userLogin(data);
    return response;
})


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getAuthToken: (state, action) => {
            let token = sessionStorage.getItem('agribuss_auth_token')
            token ? state.token = token : state.token = '' 
        },
        getUser: (state, action) => {
            let user = JSON.parse(sessionStorage.getItem('agribuss_user'))
            user ? state.user = user : state.user = {}
            return user
        },
        getRole: (state, action) => {
            let role = JSON.parse(sessionStorage.getItem('agribuss_user_role'))
            role ? state.role = role : state.role = {}
        },
        // Clear user data on logout
        logout: (state) => {
            state.token = '';
            state.userInfo = {};
            state.role = {};
            sessionStorage.removeItem('agribuss_auth_token');
            sessionStorage.removeItem('agribuss_user');
            sessionStorage.removeItem('agribuss_user_role');
        }
    },
    extraReducers(builder) {
        builder
            .addCase(getAllUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getAllUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                // Assuming action.payload is an array of products
                state.users = action.payload;
            })
            .addCase(getAllUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(login.fulfilled, (state, action) => {
                console.log(action)
                state.error = null
                state.status = 'success'
                state.userInfo = action.payload.data.responseUser
                state.token = action.payload.data.token
                state.role = action.payload.data.role
                sessionStorage.setItem('agribuss_user', JSON.stringify(action.payload.data.responseUser))
                sessionStorage.setItem('agribuss_auth_token', action.payload.data.token)
                sessionStorage.setItem('agribuss_user_role', JSON.stringify(action.payload.data.role))
            })
            .addCase(login.rejected, (state, action) => {
                console.log(action)
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const { getAuthToken, getUser, getRole, logout } = userSlice.actions

export const userErrorSelector = state => state.user.error
export const userStatusSelector = state => state.user.status
export const userAuthToken = state => state.user.token
export const currentUser = state => state.user.userInfo
export const userRole = state => state.user.role
export const allUsers = (state) => state.user.users;

export default userSlice.reducer;
