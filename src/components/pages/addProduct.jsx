import FormInput from '../inputs/FormInput.jsx'
import * as Yup from "yup"
import {useFormik} from "formik"
import Input from '../inputs/Input.jsx'
import { BsTropicalStorm } from 'react-icons/bs';

export default function AddProduct({visible, onClose}){

	if(!visible) return null;

	const initialValues = {
		product_name: "carrot",
		qty: "5",
		price: "200",
		category: "vegetables",
		location: "bell",
		image: "",
		desc:"hfjfjh"
	}

	const validationSchema = Yup.object().shape({
		product_name: Yup.string()
				.required("Field is required"),
		qty: Yup.number()
				.required('Field is required'),
		price: Yup.string()
				.required("Field is required"),
		category: Yup.string()
				.required("Field is required")
				.matches(/^[A-Za-z ]*$/, 'please enter alphabetic characters'),
		location: Yup.string()
				.required("Field is required"),
		images: Yup.string(),
				// .required("Field is required"),
		desc: Yup.string()
				.required("Field is required"),


	})

	const onSubmit = (values) => {
		console.log(values)
		alert(values)
	}

	const formik = useFormik({
		initialValues,
		onSubmit,
		validationSchema
	})


	const handleOnBackGropClick = (e) => {
		if(e.target.id === "backdrop") onClose && onClose()
	}

	return(
		<>
			
			<div id="backdrop" onClick={handleOnBackGropClick} className="bg-black cursor-pointer transition-500 inset-0 flex-col h-full absolute w-screen justify-center  bg-opacity-50 backdrop-blur-[2px]">
					<div className="w-[70%] my-12 m-auto bg-white rounded-xl p-5">
					<div onClick={() => onClose}><BsTropicalStorm/></div>
					<div className="p-2 pl-2 border-b border-border ">
						<p className="justify-center font-bold">Add Product</p>
					</div>
					<form className=" w-full p-2 m-auto rounded"  method="POST" onSubmit={formik.handleSubmit} encrypt="multipart/form-data">
						<div className="w-full grid grid-col-2 grid-row-4 gap-5 mt-3">
							<div>
								<FormInput
								    value={formik.values.product_name}
								    onBlur={formik.handleBlur("product_name")}
								    onChange={formik.handleChange("product_name")}
									type="text"
									placeholder="Enter the product name"
									label="Product name"
								/>
								{formik.errors.product_name && formik.touched.product_name && <p className="text-red-500 mt-2 text-sm">{formik.errors.product_name}</p>}
							</div>
							<div>
								<FormInput
								    value={formik.values.qty}
								    onBlur={formik.handleBlur("qty")}
								    onChange={formik.handleChange("qty")}
									type="number"
									placeholder="Enter the quantity"
									label="Quantity"
								/>
								{formik.errors.qty && formik.touched.qty && <p className="text-red-500 mt-2 text-sm">{formik.errors.qty}</p>}
							</div>
							<div>
								<FormInput
								    value={formik.values.price}
								    onBlur={formik.handleBlur("price")}
								    onChange={formik.handleChange("price")}
									type="text"
									placeholder="Enter the price"
									label="Price"
								/>
								{formik.errors.price && formik.touched.price && <p className="text-red-500 mt-2 text-sm">{formik.errors.price}</p>}
							</div>
							<div>
								<FormInput
								    value={formik.values.category}
								    onBlur={formik.handleBlur("category")}
								    onChange={formik.handleChange("category")}
									type="text"
									placeholder="Enter your first name"
									label="	Category"
								/>
								{formik.errors.category && formik.touched.category && <p className="text-red-500 mt-2 text-sm">{formik.errors.category}</p>}
							</div>
							<div className="">
								<FormInput
								    value={formik.values.location}
								    onBlur={formik.handleBlur("location")}
								    onChange={formik.handleChange("location")}
									type="text"
									placeholder="Enter your location"
									label="Location"
								/>
								{formik.errors.location && formik.touched.location && <p className="text-red-500 mt-2 text-sm">{formik.errors.location}</p>}
							</div>
							<div>
								<FormInput
								    value={formik.values.images}
								    onBlur={formik.handleBlur("images")}
								    onChange={formik.handleChange("images")}
									type="file"
									placeholder="Upload images"
									label="Images"
								/>
								{formik.errors.images && formik.touched.images && <p className="text-red-500 mt-2 text-sm">{formik.errors.images}</p>}
							</div>
							<div className="flex flex-col w-full col-span-2 "> 
								<label className="text-black font-normal"> Description </label>
								<input
									type="text"
									value={formik.values.desc}
								    onBlur={formik.handleBlur("desc")}
								    onChange={formik.handleChange("desc")}
									placeholder="describe the product..."
									className="mt-1 border pb-5 text-grey w-full h-10 text-md hover:shadow-md focus:shadow-md border-inputB rounded-md outline-none w-full h-10 p-4"						
								/>
								{formik.errors.desc && formik.touched.desc && <p className="text-red-500 mt-2 text-sm">{formik.errors.desc}</p>}
							
							</div>
						<div className=" col-span-2">

							<Input
								value="Add product"
							/>
						</div>
						</div>
						
					</form>
				</div>
			</div>
		</>
	)
}