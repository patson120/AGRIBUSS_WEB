import axios from '../axiosInstance.js'

export async function createCat(data) {
	console.log("inside thunk: ",data)


	try {
	    const response = await axios.post('/cat', data);
		console.log('category api', response) 
		return {
	        message: response.message,
	        data: response.data,
	      }
	} catch (error) {
	    console.error("error: ",error);
		if (error.response) {
			console.error('Response data:', error.response.data);
			console.error('Response status:', error.response.message);
		}
	}
}

export async function getCat() {
	try {
	    const response = await axios.get('/cat/')
	        let data = response.data
	       	let status = response.status

	        console.log(data)

	  	 return data;
	} catch (error) {
	    console.error(error);
	}
}