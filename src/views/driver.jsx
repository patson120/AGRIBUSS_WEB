
import FormInput from '../components/inputs/FormInput.jsx'
import {DataTable} from 'primereact/datatable'
import { classNames } from 'primereact/utils';
import {Column} from 'primereact/column'
import {farmerData} from '../Utils/farmerData.js'
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { BsPersonCircle } from "react-icons/bs";
import React,{useState, useEffect, useRef} from 'react'
import * as Yup from "yup"
import {useFormik} from "formik"
import dayjs from 'dayjs'
import { InputText } from 'primereact/inputtext';
import {BsBoxArrowInUp, BsPlusLg, BsTrash} from 'react-icons/bs'
import defaultImg from '../assets/images/image.png'
import { isDate, parse } from 'date-fns';
import { Dialog } from 'primereact/dialog';
import { Rating } from 'primereact/rating';
import { createFarmer, getFarmer} from '../Utils/api/farmerApi.js';
import { createUser} from '../Utils/api/userApi.js';
import {useSelector, useDispatch} from 'react-redux'
import {getAllFarmers, allFarmers} from '../redux/feature/farmerSlice.js'
import {getUserr} from '../redux/feature/userSlice.js'
import axios from "axios";
import Popup from './loader/popup.jsx';


export default function Driver(){

     const dispatch = useDispatch()
    // const farmers = useSelector(allFarmers)
    // const farm = dispatch(getAllFarmers());
    const [popupVisible, setPopupVisible] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
     const [farmers, setFarmers] = useState(null)

    useEffect(() => {
        
          const fetchUsers = async () => {
               const response = await dispatch(getUserr('driver'));
               console.log("Product fetch: ",response)
               console.log("Product fetch: ",response?.payload?.data)
               setFarmers(response?.payload?.data);
          };
     
               fetchUsers();
          }, [dispatch]);

     const [farmerState, setFarmerState]= useState(null)
     
     let emptyFarmer = {
          id: null,
          firstname: "",
          lastname: "",
          email: "",
          gender: "",
          tel: "",
          city: "",
          dob: "",
          image: "",
          verified: null,
          farmlocate: "",
          farmType:''
     }

     const [farmerDialog, setFarmerDialog] = useState(false);
     const [deleteFarmerDialog, setDeleteFarmerDialog] = useState(false);
     const [submitted, setSubmitted] = useState(false);
     const [globalFilter, setGlobalFilter] = useState(null);
     const toast = useRef(null);
     const dt = useRef(null);
     // const [farmers, setFarmers] = useState(farmerData)
     const [selectedFarmer, setSelectedFarmer] = useState(false)
     const tenYearsAgo = dayjs().subtract(10, "year").format("YYYY-MM-DD");
     
     function parseDateString(value, originalValue) {
          const parsedDate = isDate(originalValue)
               ? originalValue : parse(originalValue, "yyyy-MM-dd", new Date())
          return parsedDate;
     }

     const initialValues = {
          firstname: "Dzeufack",
          lastname: "Theresa",
          email: "there@gmail.com",
          gender: "",
          tel: "655884422",
          city: "Yaounde",
          dob: "",
          expertise: 2,
          roles: "driver"
     }
   
     const today = new Date()

     const validationSchema = Yup.object().shape({
          firstname: Yup.string()
               .required("Field is required")
               .matches(/^[A-Za-z ]*$/, 'first name must not contain numbers'),
          lastname: Yup.string()
               .required("Field is required")
               .matches(/^[A-Za-z ]*$/, 'last name must not contain numbers'),
          email: Yup.string()
               .required("Field is required")
               .matches(/^(([\w.-]+)@(\[(\d{1, 3}\.){3}|(gmail|yahoo|outlook)((\.)+))(com|net|org)(\]?))$/,"invalid format"),
          tel: Yup.string()
               .matches(/^6(5|7|8|9)[0-9]{7}/, "invalid phone number")
               .required('Field is required'),
          dob: Yup.date()
               .transform(parseDateString, "invalid date fomat")
               .max(tenYearsAgo || today, "invalid date: must be at least 15yrs")
               .required('Field is required'),
          city: Yup.string()
               .required("Field is required"),
          gender: Yup.string()
               .required("Field is required"),
          expertise: Yup.string()
               .required("Field is required"),
          roles: Yup.string().required("Field is required"),
          password: Yup.string()
               .required('Field is required')
               .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/, "must have alphanumeric and special characters")
               .min(4, "Password must be atleast 4 characters")
               .max(16, "Password must be atmost 16 characters"),
          cpassword: Yup.string()
               .required('Field is required')
               .oneOf([Yup.ref('password'), null], 'Confirm password not match')

     })

     const onSubmit = async (values) => { 
          const roles = "driver"
          const data = { ...values, roles };
          const { cpassword, tradeunion, ...finalValues } = data;
          console.log("Final value", finalValues)
          try{
               const response = await createUser(finalValues)
               toast.current.show({severity: "success", summary: "Registration Successfull" ,detail: response.data.message, life: 3000})
               let unSortProducts = response.data.data.pass
               // Correct: This creates a new array and sorts it
               const sortedProducts = [...unSortProducts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
               console.log("Product fetch: ",sortedProducts)
               setFarmerState(sortedProducts)
               console.log(response)
               const _farmers = farmers
                    const message = response.data.message; // Adjust based on your actual response structure
                    setPopupMessage(message); // Set the message
               
                 setPopupVisible(true); // Show the popup
                 
                 // Hide the popup after 3 seconds
                 setTimeout(() => {
                     setPopupVisible(false);
                 }, 3000);
               setFarmerDialog(false)
               setFarmerDialog(false)
          }
          catch(err){
               console.log(err)
               toast.current.show({severity: "error", summary: "Registration Failed", detail: err.responseMessage, life: 3000})

          }
          
     }

     const formik = useFormik({
          initialValues,
          onSubmit,
          validationSchema
     })

     const [farmer, setFarmer] = useState(initialValues);

     const openNew = () => {
          setFarmer(emptyFarmer)
          setSubmitted(false)
          setFarmerDialog(true)
     }

     const hideDialog = () => {
          setSubmitted(false)
          setFarmerDialog(false)
     }

     const hideDeleteFarmerDialog = () => {
          setDeleteFarmerDialog(false)
     }

     const createId = () => {
          let id = '';
          let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxz0123456789'

          for (let i = 0; i < 5; i++){
               id += chars.charAt(Math.floor(Math.random()*chars.length));
          }
          return id;
     }

     const findIndexById = (id) => {
          let index = -1;
          for (let i = 0; i < farmers.length; i++){
               if(farmers[i].id === id){
                    index = i;
                    break;
               }
          }
          return index;
     }

     const saveFarmer = () => {
          setSubmitted(true)

          if(farmer.firstname.trim() && farmer.lastname.trim()){
               let _farmers = [...farmers];
               let _farmer = {...farmer};

               if(farmer.id){
                    const index = findIndexById(farmer.id);
                    _farmers[index] = _farmer;
                    toast.current.show({severity: "success", summary: 'Successful', detail: "farmer updated successfully", life: 3000})  
               }else{
                    _farmer.id = createId()
                    _farmer.image = defaultImg
                    _farmers.push(_farmer)
                    farmerData.push(_farmer);
                    toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Farmer created successfully', life: 3000 });
               }
               setFarmers(_farmer)
               setFarmerDialog(false)
               console.log("farmer")
               setFarmer(emptyFarmer)
          }
     }

     const confirmDeleteFarmer = (farmer) => {
          setFarmer(farmer)
          setDeleteFarmerDialog(true)
     }

     const deleteFarmer = () => {
          let _farmers = farmers.filter((val) => val.id !== farmer.id)
          setFarmers(_farmers);
          setDeleteFarmerDialog(false)
          toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Farmer deleted successfully', life: 3000 });
     }

     const exportCSV = () => {
          dt.current.exportCSV();
     }

     const leftToolbarTemplate = () => {
          return(
               <div>
                    <Button label="New" icon={<BsPlusLg className='mr-2' size={20}/>} className="h-8 pl-1 bg-primary" severity="success" onClick={openNew}/>
               </div>
          )
     }
     
     const rightToolbarTemplate = () => {
          return(
               <div>
                    <Button label="Export" icon={<BsBoxArrowInUp className='mr-2' size={20}/>} className="h-8 pl-1 bg-orange-400 border-0" severity="warning" onClick={exportCSV}/>
               </div>
          )
     }
     
    const imageBodyTemplate = (rowData) => {
          return <div style={{backgroundImage: `url(${rowData.image})`}} className="bg-cover bg-center rounded-full w-12 h-12" > </div> ;
     };

     const nameBodyTemplate = (rowData) => {
          return <div className='flex flex-row gap-2'>
                    {
                        rowData?.images.length > 0 ?
                            <img src={`http://localhost:4000/${rowData?.images[0]}`} alt={rowData.lastname} />
                        :
                            <div className="h-8 my-3 w-8 bg-gray-100 text-gray-300 text-center rounded-full">
                               <BsPersonCircle  size={30} />
                           </div>
                    }
                    <p className="pt-1">{rowData?.firstname} {rowData?.lastname}</p>
                </div>
     }

     const farmBodyTemplate = (rowData) => {
          return <div className='flex flex-row gap-2'>
                    {/*<div style={{backgroundImage: `url(${defaultImg})`}} className="bg-cover bg-center rounded-full w-12 h-12" > </div>*/}
                    <p className="b">{rowData?.farmerInfo?.farmLocation}</p>
                </div>
     }
    
     const dateBodyTemplate = (rowData) => {
          return <div className='flex flex-row gap-2'>
                    {/*<div style={{backgroundImage: `url(${defaultImg})`}} className="bg-cover bg-center rounded-full w-12 h-12" > </div>*/}
                    <p className="b">{ new Date(rowData?.createdAt).toISOString().split('T')[0]}</p>
                </div>
     }

     const dobBodyTemplate = (rowData) => {
          return <div className='flex flex-row gap-2'>
                    {/*<div style={{backgroundImage: `url(${defaultImg})`}} className="bg-cover bg-center rounded-full w-12 h-12" > </div>*/}
                    <p className="b">{ new Date(rowData?.dob).toISOString().split('T')[0]}</p>
                </div>
     }

    const actionBodyTemplate = (rowData) => {
          return (
          <React.Fragment>
               <Button icon={<BsTrash/>} red rounded outlined  severity="danger" className="mr-2 text-red-500 " onClick={() => confirmDeleteFarmer(rowData)} />
          </React.Fragment>
          );
     };
     
    const header = (
          <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
          <h4 className="m-0">Manage Drivers</h4>
          <span className="p-input-icon-left">
               <i className="pi pi-search" />
               <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
          </span>
          </div>
     );
     
    const farmerDialogFooter = (
          <React.Fragment>
          <button className="border border-red-500 rounded-md outline-0 cursor-pointer text-red-500 p-2" onClick={hideDialog}>Cancel</button>
          </React.Fragment>
     );
     
    const deleteFarmerDialogFooter = (
          <React.Fragment>
               <Button label="No" icon="pi pi-times" severity="danger" outlined onClick={hideDeleteFarmerDialog} />
               <Button label="Yes" icon="pi pi-check" severity="success" onClick={deleteFarmer} />
          </React.Fragment>
     );

    const dialogHeader = (
               <div>
                    <h4 className="text-black font-bold text-2xl py-2 text-justify pl-12">Agri<span className="text-primary">BUSS</span></h4>
               </div>
     )

    const onFarmerHide = () => {
     setSelectedFarmer(false)
    }

     const closePopup = () => {
        setPopupVisible(false);
     };

     const selectedFarmerContent = selectedFarmer && (
           <Dialog visible={selectedFarmer} style={{ width: '60rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} modal header="Farmer info" className="p-fluid text-createText" onHide={onFarmerHide}>
            <div className="p-5 surface-card shadow-2 flex flex-row gap-10 border-round">
                    <div className="flex flex-col w-[45%] gap-2">
                      <div style={{backgroundImage: `url(${defaultImg})`}} className="bg-cover bg-center w-full h-80 text-center rounded-md">
                          <div style={{backgroundImage: `url(${selectedFarmer.image})`}} className="w-32 bg-cover bg-center border-4 border-bg_dash absolute -mt-10 mx-32 h-32 rounded-full"></div>
                      </div>
                    </div>
                 <div className=" align-items-center justify-content-between mb-2">
                     <span className="text-900 w-full pb-4 font-medium text-4xl">{selectedFarmer.firstname} {selectedFarmer.lastname}</span>
                     <div className="flex align-items-center justify-content-between mt-3 mb-2">
                          <span className="text-md">Speciality: </span>
                          <span className="text-md font-medium ml-3">Truck transportation</span>
                      </div>
                      <div className="flex align-items-center justify-content-between mb-2">
                          <span className="text-md">gender: </span>
                          <span className="text-md font-medium ml-3">{selectedFarmer.gender}</span>
                      </div>
                      <div className="flex align-items-center justify-content-between mb-2">
                          <span className="text-md">address: </span>
                          <span className="text-md font-medium ml-3">{selectedFarmer.city}</span>
                      </div>
                      <div className="flex align-items-center justify-content-between mb-2">
                          <span className="text-md">farm location: </span>
                          <span className="text-md font-medium ml-3">{selectedFarmer.city}, Mvogbi</span>
                      </div>
                      <div className="flex align-items-center justify-content-between mb-2">
                          <span className="text-md">Number of products: </span>
                          <span className="text-md font-medium ml-3">20</span>
                      </div>
                      <div className="flex align-items-center justify-content-between mb-2">
                          <Rating value={4} readOnly cancel={false} />
                          <span className="ml-4 py-1 text-md">4k reviews</span>
                      </div>
                      <div className="flex align-items-center justify-content-between mb-2">
                          <span className="text-md">Language: </span>
                          <span className="text-md font-medium ml-3">English, French</span>
                      </div>
                 </div>
             </div>
          </Dialog>
    );
     

     

     return(
          <>
               <div>
                    <div className=" w-full bg-bg_dash md:w-120 lg:w-120 scrollbar-thin hover:scrollbar-thumb-gray-200 scrollbar-track-gray-300 h-[698px] overflow-auto mt-1">
                         <div>
                              <p className=" font-medium text-xl text-green-800 font-semibold py-6">Drivers</p>
                         </div>
                         <Toolbar className="mb-4 p-2 border-0" left={leftToolbarTemplate} right={rightToolbarTemplate}></Toolbar>
                         {selectedFarmerContent}
                         <DataTable ref={dt} value={farmers} selection={selectedFarmer} 
                              onSelectionChange={(e) => setSelectedFarmer(e.value)}
                              selectionMode="single"
                              stateStorage="session" 
                              stateKey="dt-state-demo-local"
                              metaKeySelection={true}
                              dragSelection={true}
                              paginator 
                              rows={10} 
                              rowsPerPageOptions={[5, 10, 25]}
                              paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                              globalFilter={globalFilter} 
                              tableStyle={{ minWidth: '60rem', height: "100px", overflow: "auto" }}
                              header={header}>
                              <Column field="firstname" header="Name" body={nameBodyTemplate} sortable ></Column>
                              <Column field="email" header="Email" sortable></Column>
                              <Column field="gender" header="Gender" sortable></Column>
                              <Column field="tel" header="PhoneNumber" sortable ></Column>
                              <Column field="dob" header="Date of birth" body={dobBodyTemplate} sortable></Column>
     {/*                         <Column field="city" header="City" sortable ></Column>
                              <Column field="farmlocate" body={farmBodyTemplate} header="Farm Location" sortable></Column>*/}
                              <Column field="createdAt" body={dateBodyTemplate} header="Created on" sortable></Column>
                              <Column body={actionBodyTemplate} exportable={false}></Column>

                         </DataTable>
                    </div>

                    
                    <Dialog visible={farmerDialog} style={{ width: '85rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header={dialogHeader}  moda className="p-fluid text-createText" onHide={hideDialog}>
          {/*                {product.image && <img src={`${product.image}`} alt={product.image} className="product-image rounded-md block m-auto pb-3" />}*/}
                         
                    <form className="w-full h-full flex-auto" method="POST" onSubmit={formik.handleSubmit}>
                         <Toast ref={toast} />
                         <div className=" rounded px-10 w-full m-auto" >
                              
                              <h2 className="text-black block font-semibold text-3xl text-justify">Add Driver</h2>
                              <p className="text-createText mt-2 text-justify pb-4"> Enter the information to create an account</p>
                              <div className="grid grid-col-2 grid-row-4 gap-x-12 gap-y-4 mt-3">

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
                                             onBlur={formik.handleBlur("te l")}
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
                                             className="mt-1 border text-grey w-full text-md hover:shadow-md focus:shadow-md border-inputB rounded-md outline-none w-full h-10 pl-3"     >
                                             <option>female</option>
                                             <option defaultValue>male</option>
                                        </select>
                                        {formik.errors.gender && formik.touched.gender && <p className="text-red-500 mt-2 text-sm">{formik.errors.gender}</p>}
                                   </div>
                                   <div>
                                        <FormInput
                                             type="number"
                                             value={formik.values.expertise}
                                             onBlur={formik.handleBlur("expertise")}
                                             onChange={formik.handleChange("expertise")}
                                             placeholder="Enter here..."
                                             label="Years of xpertise"
                                        />
                                        {formik.errors.expertise && formik.touched.expertise && <p className="text-red-500 mt-2 text-sm">{formik.errors.farmlocate}</p>}
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
                                   <div className=" col-span-2">
                                        <div> 
                                             <button className='bg-black shadow-md hover:shadow-black text-white rounded-md p-2 w-full  text-1xl font-bold' onClick={saveFarmer} type='submit'>CREATE FARMER</button>
                                        </div>
                                   </div>

                              </div>
                         </div>
                    </form>
                    </Dialog>
                    
            <Dialog visible={deleteFarmerDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deleteFarmerDialogFooter} onHide={hideDeleteFarmerDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    {farmer && (
                        <span>
                            Are you sure you want to delete <b>{farmer.firstname}</b>?
                        </span>
                    )}
                </div>
            </Dialog>
               </div>
               <Popup 
                message={popupMessage} 
                isVisible={popupVisible} 
                onClose={closePopup} 
            />
          </>
     )
}