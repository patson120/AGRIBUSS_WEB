import axios from "../axiosInstance";


export async function registerUser(data) {
    try {
        console.log(data)
        const response = await axios.post('/auth/signup', data);
        console.log(response)
        return {
            status: response.status,
            data: response.data
        }
    } catch (error) {
        return Promise.reject(error.message ? { errorMessage: error.message, responseMessage: error.response.data.message } : "error")
    }
}

export async function createUser(data) {
    try {
        console.log(data)
        const response = await axios.post('/auth/create', data);
        console.log(response)
        return {
            status: response.status,
            data: response.data
        }
    } catch (error) {
        return Promise.reject(error.message ? { errorMessage: error.message, responseMessage: error.response.data.message } : "error")
    }
}

export async function userLogin(data) {
    console.log("Login request reach the user api")
    try {
        const response = await axios.post('/auth/login', data);
        return {
            status: response.status,
            data: response.data.data
        }
    } catch (error) {
        console.log(error);
        return Promise.reject(error.message ? error.message : "login error")
    }
}


export async function getUsers(role) {
    try {
        const response = await axios.get(`/users/${role}`)
        let data = response.data
        let status = response.status

        console.log(data)

        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function getAllUsers() {
    try {
        const response = await axios.get(`/users/`)
        let data = response.data
        let status = response.status

        console.log(data)

        return data;
    } catch (error) {
        console.error(error);
    }
}
