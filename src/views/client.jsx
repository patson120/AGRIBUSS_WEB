
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


export default function Client(){

     const dispatch = useDispatch()
    // const farmers = useSelector(allFarmers)
    // const farm = dispatch(getAllFarmers());
     const [farmers, setFarmers] = useState(null)

    useEffect(() => {
        
          const fetchUsers = async () => {
               const response = await dispatch(getUserr('client'));
               console.log("User fetch: ",response)
               console.log("User fetch: ",response?.payload?.data)
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

     const initialValues = {
          firstname: "Dzeufack",
          lastname: "Theresa",
          email: "there@gmail.com",
          gender: "",
          tel: "655884422",
          city: "Yaounde",
          dob: "",
          farmlocate: "Melen",
          farmType: "",
          roles: "farmer"
     }
   
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
          <h4 className="m-0">Manage Clients</h4>
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
                              <p className=" font-medium text-xl text-green-800 font-semibold py-6">Clients</p>
                         </div>
                         <Toolbar className="mb-4 p-2 border-0" right={rightToolbarTemplate}></Toolbar>
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
                              rowsPerPageOptions={[10, 15, 20]}
                              paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                              globalFilter={globalFilter} 
                              tableStyle={{ minWidth: '60rem', height: "100px", overflow: "auto" }}
                              header={header}>
                              <Column field="firstname" header="Name" body={nameBodyTemplate} sortable ></Column>
                              <Column field="email" header="Email" sortable></Column>
                              <Column field="gender" header="Gender" sortable></Column>
                              <Column field="tel" header="PhoneNumber" sortable ></Column>
                              <Column field="dob" header="Birth date" body={dobBodyTemplate} sortable></Column>
                              {/*<Column field="city" header="City" sortable ></Column>*/}
                              <Column field="farmlocate" body={farmBodyTemplate} header="Farm Location" sortable></Column>
                              <Column field="createdAt" body={dateBodyTemplate} header="Created on" sortable></Column>
                              <Column body={actionBodyTemplate} exportable={false}></Column>

                         </DataTable>
                    </div>

                    
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
          </>
     )
}