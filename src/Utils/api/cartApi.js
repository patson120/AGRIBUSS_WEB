import axios from '../axiosInstance.js'

export async function addCartApi(data) {
	
	console.log("inside thunk: ",data)


	try {
	    const response = await axios.post('/cart', data);
		console.log('cart api', response.data) 
		return response.data
	} catch (error) {
	    console.error("error: ",error);
		if (error.response) {
			console.error('Response data:', error.response.data);
			console.error('Response status:', error.response.message);
		}
	}
}

export async function getCart() {
	try {
	    const response = await axios.get('/cart')
	        let data = response.data
	       	let status = response.status

	        console.log(data)

	  	 return data;
	} catch (error) {
	    console.error(error);
	}
}


export async function updateCartApi(id, data) {
	console.log("inside thunk: ",data)


	try {
	    const response = await axios.patch(`/cart/${id}`, data);
		console.log('cart api', response) 
		return response.data
	} catch (error) {
	    console.error("error: ",error);
		if (error.response) {
			console.error('Response data:', error.response.data);
			console.error('Response status:', error.response.message);
		}
	}
}

export async function removeCartApi(id) {

	try {
	    const response = await axios.delete(`/cart/${id}`);
		console.log('cart api', response) 
		return response.data
	} catch (error) {
	    console.error("error: ",error);
		if (error.response) {
			console.error('Response data:', error.response.data);
			console.error('Response status:', error.response.message);
		}
	}
}
export async function incrementCartApi(id) {

	try {
	    const response = await axios.delete(`/cart/increment/${id}`);
		console.log('cart api', response) 
		return response.data
	} catch (error) {
	    console.error("error: ",error);
		if (error.response) {
			console.error('Response data:', error.response.data);
			console.error('Response status:', error.response.message);
		}
	}
}
export async function decrementCartApi(id) {

	try {
	    const response = await axios.delete(`/cart/decrement/${id}`);
		console.log('cart api', response) 
		return response.data
	} catch (error) {
	    console.error("error: ",error);
		if (error.response) {
			console.error('Response data:', error.response.data);
			console.error('Response status:', error.response.message);
		}
	}
}

