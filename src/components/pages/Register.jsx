import FormInput from '../inputs/FormInput.jsx'
import { useState, useRef } from 'react'
import { parse, isDate } from "date-fns"
import Input from '../inputs/Input.jsx'
import { Outlet, Link, redirect, useNavigate } from "react-router-dom";
import { Carousel } from "@material-tailwind/react"
import img from '../../assets/images/watch.png'
import img2 from '../../assets/images/afri.png'
import img3 from '../../assets/images/food.png'
import img4 from '../../assets/images/honey1.png'
import img5 from '../../assets/images/honey3.png'
import { useForm, FormProvider } from "react-hook-form";
import dayjs from 'dayjs'
import {Toast} from 'primereact/toast'
import * as Yup from "yup"
import { useFormik } from "formik" 
import { registerUser } from '../../Utils/api/userApi.js';
import { useDispatch } from 'react-redux';

export default function Register() {

	const { checked, setChecked } = useState(false)
	const navigate = useNavigate()

	const [isLoading, setIsLoading] = useState(false)

	const dispatch = useDispatch()

	const toast = useRef(null)

	const tenYearsAgo = dayjs().subtract(10, "year").format("YYYY-MM-DD");

	function parseDateString(value, originalValue) {
		const parsedDate = isDate(originalValue)
			? originalValue : parse(originalValue, "yyyy-MM-dd", new Date())
		return parsedDate;
	}

	function invalidDate(value) {
		if (value > today)
			return false
		return true
	}

	const today = new Date()

	const initialValues = {
		firstname: "Tongo",
		lastname: "Gasto",
		email: "gastont@gmail.com",
		tel: "690004012",
		dob: "2000-05-16",
		gender: "male",
		password: "Gaston@1230",
		cpassword: "Gaston@1230",
		roles: "",
	}
	const validationSchema = Yup.object().shape({
		firstname: Yup.string()
			.required("Field is required")
			.matches(/^[A-Za-z ]*$/, 'please enter alphabetic characters')
			.min(3, "first name must be atleast 3 characters"),
		lastname: Yup.string()
			.matches(/^[A-Za-z ]*$/, 'please enter alphabetic characters')
			.required("Field is required"),
		email: Yup.string()
			.required("Field is required")
			.matches(/^(([\w.-]+)@(\[(\d{1, 3}\.){3}|(gmail|yahoo|outlook)((\.)+))(com|net|org)(\]?))$/,"invalid format"),
		tel: Yup.string()
			.matches(/^6(5|7|8|9)[0-9]{7}/, "invalid phone number")
			.required('Field is required'),
		dob: Yup.date()
			.transform(parseDateString)
			.max(tenYearsAgo || today, "invalid date: must be at least 15yrs")
			.required('Field is required'),
		gender: Yup.string()
			.required('Field is required'),
		roles: Yup.string(),
		password: Yup.string()
			.required('Field is required')
			.matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/, "must have alphanumeric and special characters")
			.min(8, "Password must be atleast 8 characters")
			.max(16, "Password must be atmost 16 characters"),
		cpassword: Yup.string()
			.required('Field is required')
			.oneOf([Yup.ref('password'), null], 'Confirm password not match'),
		workplace: Yup.string(),
		location: Yup.string(),
		website: Yup.string(),

	})

	const onSubmit = async (values) => {
          const { cpassword, ...data } = values;
		setIsLoading(true)
		try {
			console.log("starta")
			const response = await registerUser(data)
			console.log(response)
			toast.current.show({severity: "success", summary: "Registration Successfull" ,detail: response.data.message,  life: 3000})
			setTimeout(() => {
				navigate("/login")
			},3000)
		} catch (error) {
			toast.current.show({severity: "error", summary: "Registration Failed", detail: error.responseMessage, life: 3000})
		}
		finally{
			setIsLoading(false)
		}
	}

	function handleClick(e) { return navigate("/login"); }
	const [role, setRole] = useState(null)

	const formik = useFormik({
		initialValues,
		onSubmit,
		validationSchema
	})

	return (
		<>
			<div className="flex flex-row bg-white w-full">
				<Toast ref={toast}/>
				<div className=" w-6/12 h-screen flex-initial hidden lg:flex flex-col ">
					<div className="h-2/4 bg-primary rounded-br-full">
						<img
							src={img}
							alt="imaage5"
							className="w-full h-full z-0 object-cover  rounded-br-full object-center"
						/>
					</div>
				</div>
				<form className="w-full h-full flex-auto" method="POST" onSubmit={formik.handleSubmit}>
					<div className=" rounded p-10 lg:px-20 w-full lg:w-[80%] m-auto pt-10" >
						<div>
							<h4 className="text-black font-bold text-2xl py-8 text-center">Agri<span className="text-primary">BUSS</span></h4>
						</div>
						<h2 className="text-black font-semibold text-3xl text-center">Create Account</h2>
						{/* <p className="text-createText text-justify pb-4"> Enter your information to create an account</p> */}
						<div className="flex  overflow-scroll md:overflow-hidden pt-6 flex-col gap-4 md:grid grid-col-2 grid-row-4 md:gap-x-12 md:gap-y-4 mt-3">

							<div>
								<FormInput
									value={formik.values.firstname}
									onBlur={formik.handleBlur("firstname")}
									onChange={formik.handleChange("firstname")}
									type="text"
									placeholder="Enter your first name"
									label="First name"
								/>
								{formik.errors.firstname && formik.touched.firstname && <p className="text-red-500 mt-2 text-sm">{formik.errors.firstname}</p>}
							</div>
							<div>

								<FormInput
									value={formik.values.lastname}
									onBlur={formik.handleBlur("lastname")}
									onChange={formik.handleChange("lastname")}
									type="text"
									placeholder="Enter your last name"
									label="Last name"
								/>
								{formik.errors.lastname && formik.touched.lastname && <p className="text-red-500 mt-2 text-sm">{formik.errors.lastname}</p>}

							</div>
							<div>
								<FormInput
									type="email"
									value={formik.values.email}
									onBlur={formik.handleBlur("email")}
									onChange={formik.handleChange("email")}
									placeholder="ex. abd@gmail.com"
									label="Email address"
								/>
								{formik.errors.email && formik.touched.email && <p className="text-red-500 mt-2 text-sm">{formik.errors.email}</p>}

							</div>
							<div>
								<FormInput
									type="text"
									value={formik.values.tel}
									onBlur={formik.handleBlur("tel")}
									onChange={formik.handleChange("tel")}
									placeholder="Enter your phone number"
									label="Phone number"
								/>
								{formik.errors.tel && formik.touched.tel && <p className="text-red-500 mt-2 text-sm">{formik.errors.tel}</p>}
							</div>
							<div>
								<FormInput
									type="date"
									value={formik.values.dob}
									onBlur={formik.handleBlur("dob")}
									onChange={formik.handleChange("dob")}
									placeholder="Enter your date of birth"
									label="Date of birth"
								/>
								{formik.errors.dob && formik.touched.dob && <p className="text-red-500 mt-2 text-sm">{formik.errors.dob}</p>}
							</div>
							<div>
								
								<label className="text-black font-normal">Gender</label>
								<select
									value={formik.values.gender}
									onBlur={formik.handleBlur("gender")}
									onChange={formik.handleChange("gender")}
									className="mt-1 border text-grey w-full text-md hover:shadow-md focus:shadow-md border-inputB rounded-md outline-none h-10 pl-3"	>
									<option>female</option>
									<option>male</option>
								</select>
								{formik.errors.gender && formik.touched.gender && <p className="text-red-500 mt-2 text-sm">{formik.errors.gender}</p>}
							</div>

							<div>
								<FormInput
									type="password"
									value={formik.values.password}
									onBlur={formik.handleBlur("password")}
									onChange={formik.handleChange("password")}
									placeholder="Enter your password"
									label="Password"
								/>
								{formik.errors.password && formik.touched.password && <p className="text-red-500 mt-2 text-sm">{formik.errors.password}</p>}
							</div>
							<div>
								<FormInput
									type="password"
									value={formik.values.cpassword}
									onBlur={formik.handleBlur("cpassword")}
									onChange={formik.handleChange("cpassword")}
									placeholder="Confirm your password"
									label="Confirm password"
								/>
								{formik.errors.cpassword && formik.touched.cpassword && <p className="text-red-500 mt-2 text-sm">{formik.errors.cpassword}</p>}
							</div>
                            <div>
                                <label className="text-black font-normal">Role</label>
                                <select
                                    value={formik.values.roles}
                                    onBlur={formik.handleBlur("roles")}
                                    onChange={(e) => {
                                        setRole(e.target.value);
                                        formik.setFieldValue("roles", e.target.value); // Update formik value
                                    }}
                                    className="mt-1 border text-grey text-md hover:shadow-md focus:shadow-md border-inputB rounded-md outline-none w-full h-10 pl-3">
                                    <option value="client">Client</option>
                                    <option value="consultant">Consultant</option>
                                </select>
                                {formik.errors.roles && formik.touched.roles && <p className="text-red-500 mt-2 text-sm">{formik.errors.roles}</p>}
                            </div>
                            {role === 'consultant' && ( // Conditional rendering for workplace field
								<>
									<div>
										<FormInput
											type="text"
											value={formik.values.workplace}
											onBlur={formik.handleBlur("workplace")}
											onChange={formik.handleChange("workplace")}
											placeholder="Enter your workplace"
											label="Workplace"
										/>
										{formik.errors.workplace && formik.touched.workplace && <p className="text-red-500 mt-2 text-sm">{formik.errors.workplace}</p>}
									</div>
									
									<div>
										<FormInput
											type="text"
											value={formik.values.location}
											onBlur={formik.handleBlur("location")}
											onChange={formik.handleChange("location")}
											placeholder="Enter your location"
											label="location"
										/>
										{formik.errors.location && formik.touched.location && <p className="text-red-500 mt-2 text-sm">{formik.errors.location}</p>}
									</div>
									
									<div>
										<FormInput
											type="text"
											value={formik.values.website}
											onBlur={formik.handleBlur("website")}
											onChange={formik.handleChange("website")}
											placeholder="Enter your website"
											label="website"
										/>
										{formik.errors.website && formik.touched.website && <p className="text-red-500 mt-2 text-sm">{formik.errors.website}</p>}
									</div>
								</>
                            )}
							<div className=" col-span-2">
								<div className="flex flex-row gap-5">
									<input type="checkbox" className=" border border-inputB" />
									<p className="text-black pb-1"> I agree to the <span className="text-primary cursor-pointer"> terms, conditions</span> and <span className="text-primary cursor-pointer"> policies </span> of the platform</p>
								</div>

								<Input
									value="CREATE ACCOUNT"
									loading={isLoading}
								/>
								<div>
									<p className="text-black mt-3 text-justify">Already have account? <span className="text-primary cursor-pointer" onClick={handleClick}>Login</span></p>
								</div>
								
								{/*<button onClick={handleClick}>text</button>*/}
							</div>

						</div>
					</div>
				</form>
			</div>
		</>
	)
}