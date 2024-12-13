// src/components/CreatePost.js
import React, { useEffect, useRef, useState } from 'react';
import ForumNavBar from '../../partials/navBar/ForumNavBar';
import ForumFooter from '../../partials/footer/ForumFooter';
import LandingFooter from '../../partials/footer/LandingFooter';
import * as Yup from "yup";
import { useFormik } from "formik";
import { getCategory } from '../../redux/feature/categorySlice';
import { useDispatch, useSelector } from 'react-redux';
import { createQuestion } from '../../redux/feature/questionsSlice';
import Popup from '../loader/popup';
import { Toast } from 'primereact/toast';
import { askQuestion } from '../../Utils/api/questionApi';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const toast = useRef(null);
  
  useEffect(() => {
    const fetchProducts = async () => {
          const response = await dispatch(getCategory());
          console.log("Category fetch: ",response.payload.data)
          setCategories(response.payload.data)
    };
      // Populate products initially (you can replace this with an API call)
      fetchProducts() 
  }, [dispatch]);
  
  const initialValues = {
    title: "",
    content: "",
    category: "",
    file: []
};

const validationSchema = Yup.object().shape({
    title: Yup.string()
        .required("title is required")
        .matches(/^[A-Za-z ]*$/, 'Please enter alphabetic characters'),
    content: Yup.string().required('content is required'),
    category: Yup.string().required('category is required'),
    file: Yup.array().of(
        Yup.mixed()
            .test("fileType", "Unsupported File Format", value => {
                return value && ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'].includes(value.type);
            })
    )
});

  
const onSubmit = async (values) => {
  console.log("Form submitted with values:", values); 
      console.log(values)	

      // Prepare the FormData object
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("content", values.content);
      formData.append("category", values.category);

      // Append files for productImages
      values.file.forEach((file, index) => {
          formData.append("file", file);
      });
  
      try {
          const response = await askQuestion(formData);
          
          console.log(response)
          // const message = "Question posted successfully"; // Adjust based on your actual response structure
          // setPopupMessage(message); // Set the message
     
          // setPopupVisible(true); // Show the popup
          
          // Hide the popup after 3 seconds
          setTimeout(() => {
              setPopupVisible(false);
          }, 3000);

          toast.current.show({ severity: "success", summary: "Question Posted", detail: response, life: 3000 });
        
      } catch (error) {
          setTimeout(() => {
              setPopupVisible(false);
          }, 3000);
          toast.current.show({ severity: "error", summary: "Error", detail: error.message, life: 3000 });
      }
  };

  const formik = useFormik({
      initialValues,
      onSubmit,
      validationSchema,
  });
    
    const closePopup = () => {
        setPopupVisible(false);
     };

  return (
    <div>
        <ForumNavBar/>
        <div className="container h-[725px] mx-auto p-4 pt-12">
        <Toast ref={toast} />

        <h2 className="text-3xl mb-4">Ask a question</h2>
        <div>
          <form onSubmit={formik.handleSubmit}>
              <div className="mb-4">
              <label className="block mb-1">Title<span className='text-red-500'>*</span></label>
              <p className='text-sm py-2 text-gray-500'>Be specific and imagine you are asking a question to another person</p>
                        <input
                            type="text"
                            name="title"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.title}
                            className="mt-1 block w-full p-2 border outline-none focus:border-gray-400 border-gray-300 rounded-md shadow-sm"
                        />
                        {formik.touched.title && formik.errors.title ? (
                            <div className="text-red-500 text-sm">{formik.errors.title}</div>
                        ) : null}
              </div>
              <div className="mb-4">
              <label className="block mb-1">Body<span className='text-red-500'>*</span></label>
                        <textarea
                            name="content"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.content}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                        ></textarea>
                        {formik.touched.content && formik.errors.content ? (
                            <div className="text-red-500 text-sm">{formik.errors.content}</div>
                          ) : null}
              </div>
              <div className="mb-4">
              <label className="block mb-1">Category<span className='text-red-500'>*</span></label>
                            <select
                                name="category"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.category}
                                className="mt-1 block w-full p-2 h-10 border border-gray-300 rounded-md shadow-sm"
                            >
                                <option value="" label="Select category" />
                                {categories.map((cat, index) => (
                                    <option key={index} value={cat.name}>{cat.name}</option>
                                ))}
                            </select>
                            {formik.touched.category && formik.errors.category ? (
                                <div className="text-red-500 text-sm">{formik.errors.category}</div>
                            ) : null}
              </div>
                        <div className='mb-4'>
                            <label className="block text-gray-700">Upload Images (Optional) </label>
                            <input
                                type="file"
                                name="productImages"
                                placeholder= 'Upload '
                                onChange={(event) => {
                                    const files = Array.from(event.currentTarget.files);
                                    formik.setFieldValue("file", files);
                                }}
                                onBlur={formik.handleBlur}
                                multiple
                                className="mt-1 block w-full file:border-none file:h-11 file:bg-green-300 file:text-white h-11 border border-gray-300 rounded-md shadow-sm"
                            />
                            {formik.touched.file && formik.errors.file ? (
                                <div className="text-red-500 text-sm">{formik.errors.productImages}</div>
                            ) : null}
                        </div>
              <button type="submit" className="bg-primary text-white px-4 py-2 rounded">
              Submit question
              </button>
          </form>
          <div>

          </div>
        </div>
               <Popup
                message={popupMessage} 
                isVisible={popupVisible} 
                onClose={closePopup} 
            />
        </div>
        <LandingFooter/>
    </div>
  );
};

export default CreatePost;