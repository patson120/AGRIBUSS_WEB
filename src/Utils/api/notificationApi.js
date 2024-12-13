import axios from '../axiosInstance.js'

export async function getNotification() {
	try {
	    const response = await axios.get('/notifications/')
	        console.log(response)

	  	 return response;
	} catch (error) {
	    console.error(error);
	}
}