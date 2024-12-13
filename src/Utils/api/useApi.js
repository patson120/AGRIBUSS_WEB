
import axios from '../axiosInstance'

export async function registerUser({data}){
	try{
		console.log(data)
		const response = await axios.post("/user/register", data);
		return {
			status: response.status,
			headers: response.headers,
			data: response.data
		}

	}catch(error){ 
		console.error(error)
	}
}