import axios from '../axiosInstance.js'

export async function askQuestion(data) {
	console.log("inside thunk: ",data)


	try {
	    const response = await axios.post('/question', data, {
			headers: {
				"Content-Type": "multipart/form-data"
			}
		
		});
		console.log('question api', response) 
		return response
	} catch (error) {
	    console.error("error: ",error);
		if (error.response) {
			console.error('Response data:', error.response.data);
			console.error('Response status:', error.response.message);
		}
	}
}

export async function getQuestion() {
	try {
	    const response = await axios.get('/question/')
	        let data = response.data
	       	let status = response.status

	        console.log(data)

	  	 return data;
	} catch (error) {
	    console.error(error);
	}
}

export async function getQuestionByUser() {
	try {
	    const response = await axios.get('/question/user')
	        let data = response.data
	       	let status = response.status

	        console.log(data)

	  	 return data;
	} catch (error) {
	    console.error(error);
	}
}