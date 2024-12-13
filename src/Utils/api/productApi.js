import axios from '../axiosInstance.js'

export async function createProd(data) {
	console.log("inside thunk: ",data)


	try {
	    const response = await axios.post('/products', data, {
			headers: {
				"Content-Type": "multipart/form-data"
			}
		
		});
		console.log('product api', response) 
		return response.data
	} catch (error) {
	    console.error("error: ",error);
		if (error.response) {
			console.error('Response data:', error.response.data);
			console.error('Response status:', error.response.message);
		}
	}
}

export async function getProd() {
	try {
	    const response = await axios.get('/products/')
	        let data = response.data
	       	let status = response.status

	        console.log(data)

	  	 return data;
	} catch (error) {
	    console.error(error);
	}
}

export async function getProdByFarmer() {
	try {
	    const response = await axios.get('/products/farmer')
	        let data = response.data
	       	let status = response.status

	        console.log(data)

	  	 return response;
	} catch (error) {
	    console.error(error);
	}
}

export async function deleteProd(id) {
	try {
	    const response = await axios.delete(`/products/${id}`)

	        let data = response.data
	       	let status = response.status

	        console.log("delted",data)

	  	 return data;
	} catch (error) {
	    console.error(error);
	}
}


export async function updateProd(id, data) {
	console.log("inside thunk: ",data)


	try {
	    const response = await axios.patch(`/products/${id}`, data, {
			headers: {
				"Content-Type": "multipart/form-data"
			}
		
		});
		console.log('product api', response) 
		return response.data
	} catch (error) {
	    console.error("error: ",error);
		if (error.response) {
			console.error('Response data:', error.response.data);
			console.error('Response status:', error.response.message);
		}
	}
}