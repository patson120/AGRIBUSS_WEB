import FormInput from '../../../components/inputs/FormInput.jsx'
import Input from '../../../components/inputs/Input.jsx'

export default function Contact(){
	return(
		<div className="p-8">
			<div className="flex p-12">
				<div className="w-1/2">GOOGLE MAP LOCATION</div>
				<div className="w-1/2 px-12">
					<h1 className="text-center font-bold text-2xl py-4">Contact Us</h1>
					<p className=""> Get in touch with us and send us a message</p>
					<form className="flex w-[80%] m-auto flex-col gap-y-4">
						<FormInput
							label="Full Name"
							type="text"
							placeholder="Enter your full name"
							name="fullname"
						/>
						<FormInput
							label="Email"
							type="email"
							placeholder="Enter your Email"
							name="email"
						/>
						<FormInput
							label="Phone Number"
							type="text"
							placeholder="Enter your phone number"
							name="phoneNb"
						/>
						<div className="flex flex-col w-full"> 
							<label className="text-black font-normal"> Message</label>
							<textarea
								className="mt-1 border pb-5 text-grey w-full text-md h-32 hover:shadow-md focus:shadow-md border-inputB rounded-md outline-none w-full p-4"						
							></textarea>

						</div><div className="flex flex-col w-full"> 
							<label className="text-black font-normal"> Attachement</label>
							<input
								type="file"
								name="file"
								className="mt-1 border pb-5 text-grey w-full text-md hover:shadow-md focus:shadow-md border-inputB rounded-md outline-none w-full h-10 p-4"						
							/>

						</div>
						<Input value="Send"/>
					</form>
				</div>
			</div>
		</div>
	)
}