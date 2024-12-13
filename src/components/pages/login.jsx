import FormInput from '../inputs/FormInput.jsx'
import Input from '../inputs/Input.jsx'
import { useNavigate, Link } from "react-router-dom";
import img from '../../assets/images/watch.png'
import {useEffect, useState} from 'react'
import * as Yup from "yup"
import {useFormik} from "formik"
import { useDispatch , useSelector} from 'react-redux';
import { login, userRole, getRole} from '../../redux/feature/userSlice.js';
import {  useRef } from 'react';
import {Toast} from 'primereact/toast'
import { useUserRole } from '../../context/UseRoleContext.jsx';

export default function Login(){

	const dispatch = useDispatch()
	const navigate = useNavigate()
	const userPath =  useSelector(userRole)
	const toast = useRef(null)
    const { userRole: currentRole } = useUserRole();
    const isLoggedIn = useSelector(state => !!state.user.token); // Check if the user is logged in based on the token

	const initialValues = {
		email: "",
		password: ""
	}



	const validationSchema = Yup.object().shape({
		email: Yup.string()
				.matches(/^(6(5|7|8|9)[0-9]{7})|(([\w.-]+)@(\[(\d{1, 3}\.){3}|(gmail|yahoo|outlook)((\.)+))(com|net|org)(\]?))$/,"invalid format")
				.required("Field is required"),
		password: Yup.string()
				.required('Field is required')

	})

	const { setUserRole } = useUserRole()

	const onSubmit = async (values) => {
		console.log("Started Login request")
		try{
			const response = await dispatch(login(values)).unwrap()
			console.log(response.data.role.label)
			setUserRole(response.data.role.label)
			if(response.data.role.label === "client"){
				navigate(`/market`)
			}else{
				navigate(`/${response.data.role.label}`)
			}
		}catch(err){
			console.log(err)
			toast.current.show({severity: "error", summary: "Login failed", detail: "email or phone number or password incorrect", life: 3000})
		} 
	}

    useEffect(() => {
        if (isLoggedIn) {
            navigate(`/${currentRole}`); // Redirect to the appropriate dashboard
        }
    }, [isLoggedIn, currentRole, navigate]);

	const formik = useFormik({
		initialValues,
		onSubmit,
		validationSchema
	})

	return(
		<>
			{/*<ProtectedRoutes isLogged={isLogged}/>*/}
			<div className="flex flex-row fixed bg-white w-full">
				<Toast ref={toast}/>
				<div className=" w-6/12 hidden h-screen flex-initial md:flex flex-col ">
					<div className="h-2/4 bg-primary rounded-br-full">
						<img
							src={img}
							alt="image5"
							className="w-full h-full z-0 object-cover  rounded-br-full object-center"
						/>
					</div>
				</div>
				<div className="w-full h-full flex-auto">
					<form className=" w-1/2 m-auto rounded p-10 mt-3"  method="POST" onSubmit={formik.handleSubmit} >
						<div>
							<h4 className="text-black font-bold text-2xl py-10 text-center">Agri<span className="text-primary">BUSS</span></h4>
						</div>
						<h2 className="text-black font-semibold text-3xl pb-3 text-justify">Welcome back</h2>

						<div className="mt-5">
							<div>
								<FormInput
								    value={formik.values.email}
								    onBlur={formik.handleBlur("email")}
								    onChange={formik.handleChange("email")}
									type="text"
									placeholder="Enter email-phone number"
									label="Email address or phone number"
								/>
								{formik.errors.email && formik.touched.email && <p className="text-red-500 mt-2 text-sm">{formik.errors.email}</p>}
							</div>
							<br/>
							<div className="flex flex-col w-full">
								<FormInput
								    value={formik.values.password}
								    onBlur={formik.handleBlur("password")}
								    onChange={formik.handleChange("password")}
									type="password"
									placeholder="Enter password"
									label="Password"
								/>
								<p className="text-primary self-end">Forgot password?</p>
								{formik.errors.password && formik.touched.password && <p className="text-red-500 mt-2 text-sm">{formik.errors.password}</p>}
							</div>
						
						
							<div className=" col-span-2">

								<Input
									value="LOGIN"
								/>
								<div>
									<p className="text-black mt-3 text-justify">Don't have account? <span className="text-primary cursor-pointer"><Link to="/register"> Register </Link></span></p>
								</div>
							</div>
							
						</div>
					</form>
				</div>
			</div>
		</>
	)
}
