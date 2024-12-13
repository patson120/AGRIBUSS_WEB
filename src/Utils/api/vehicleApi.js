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
        return Promise.reject(error.message ? {errorMessage:error.message, responseMessage:error.response.data.message} : "error")
    }
}

export async function createVehicle(data) {
    try {
        console.log(data)
        const response = await axios.post('/vehicle', data);
        console.log(response)
        return {
            status: response.status,
            data: response.data
        }
    } catch (error) {
        return Promise.reject(error.message ? {errorMessage:error.message, responseMessage:error.response.data.message} : "error")
    }
}

export async function getVehicle() {
    try {
        const response = await axios.get(`/vehicle/`)
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
