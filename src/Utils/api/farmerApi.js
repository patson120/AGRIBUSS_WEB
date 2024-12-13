import axios from "../axiosInstance";

export async function createFarmer(data){
    try{

        const response = await axios.post('/farmer/', data);
        return {
            status: response.status,
            data: response.data
        }

    }catch(error){
        return Promise.reject(error.message ? {errorMessage:error.message, responseMessage:error.response.data.message} : "error")
    }
}

export async function getFarmer() {
	try {
	    const response = await axios.get('/farmer/')
	        let data = response.data
	       	let status = response.status
	  	 return data;
	} catch (error) {
	    console.error(error);
	}
}


