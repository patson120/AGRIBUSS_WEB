

import {DataTable} from 'primereact/datatable'
import {Column} from 'primereact/column'
import {CustomerData} from '../Utils/tableData.jsx'
import {useState} from 'react'
import {InputText} from 'primereact/inputtext'
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { MultiSelect } from 'primereact/multiselect';
import defaultImg from '../assets/images/coffee.jpeg'
import {farmerData} from '../Utils/farmerData.js'
import { Dropdown } from 'primereact/dropdown';
import { Tag } from 'primereact/tag';
import '../../node_modules/primereact/resources/themes/lara-light-purple/theme.css'
import '../../node_modules/primereact/resources/primereact.min.css'
import { Dialog } from 'primereact/dialog';
import { Rating } from 'primereact/rating';

export default function Customer(){


	 const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        region: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    });

    const [selectedCustomer, setSelectedCustomer] = useState(null);

    const [customers, setCustomers] = useState(farmerData);

	 const NameBodyTemplate = (rowData) => {
        return (
            <div className="flex align-items-center gap-2">
                <div style={{backgroundImage: `url(${rowData.image})`}} className="bg-cover bg-center rounded-full w-10 h-10" > </div>
                <span className="py-1">{rowData.name}</span>
            </div>
        );
    };

 


    const onGlobalFilterChange = (event) => {
        const value = event.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
    };

    const renderHeader = () => {
        const value = filters['global'] ? filters['global'].value : '';

        return (
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" value={value || ''} onChange={(e) => onGlobalFilterChange(e)} placeholder="Global Search" />
            </span>
        );
    };



       const onFarmerHide = () => {
       setSelectedCustomer(false)
      }

       const selectedFarmerContent = selectedCustomer && (
              <Dialog visible={selectedCustomer} style={{ width: '60rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} modal header="Customer info" className="p-fluid text-createText" onHide={onFarmerHide}>
            <div className="p-5 surface-card shadow-2 flex flex-row gap-10 border-round">
                    <div className="flex flex-col w-[45%] gap-2">
                      <div style={{backgroundImage: `url(${defaultImg})`}} className="bg-cover bg-center w-full h-80 text-center rounded-md">
                          <div style={{backgroundImage: `url(${selectedCustomer.image})`}} className="w-32 bg-cover bg-center border-4 border-bg_dash absolute -mt-10 mx-32 h-32 rounded-full"></div>
                      </div>
                    </div>
                 <div className=" align-items-center justify-content-between mb-2">
                     <span className="text-900 w-full pb-4 font-medium text-4xl">{selectedCustomer.firstname} {selectedCustomer.lastname}</span>
                    
                      <div className="flex align-items-center justify-content-between mb-2">
                          <span className="text-md">gender: </span>
                          <span className="text-md font-medium ml-3">{selectedCustomer.gender}</span>
                      </div>
                      <div className="flex align-items-center justify-content-between mb-2">
                          <span className="text-md">address: </span>
                          <span className="text-md font-medium ml-3">{selectedCustomer.email}</span>
                      </div>
                      <div className="flex align-items-center justify-content-between mb-2">
                          <span className="text-md">phone number: </span>
                          <span className="text-md font-medium ml-3">{selectedCustomer.tel}</span>
                      </div>
                      <div className="flex align-items-center justify-content-between mb-2">
                          <span className="text-md">City: </span>
                          <span className="text-md font-medium ml-3">Yaounde</span>
                      </div>
                      <div className="flex align-items-center justify-content-between mb-2">
                          <span className="text-md">Language: </span>
                          <span className="text-md font-medium ml-3">English, French</span>
                      </div>
                 </div>
             </div>
          </Dialog>
      );

        const nameBodyTemplate = (rowData) => {
          return <div className='flex flex-row gap-2'>
                    <div style={{backgroundImage: `url(${rowData.image})`}} className="bg-cover bg-center rounded-full w-12 h-12" > </div>
                    <p>{rowData.firstname} {rowData.lastname}</p>
                </div>
     }
     

    const header = renderHeader();

	return(
		<>
			<div className=" w-full bg-bg_dash md:w-120 lg:w-120 scrollbar-thin hover:scrollbar-thumb-gray-200 scrollbar-track-gray-300 h-[698px] overflow-auto mt-1">
				<p className=" text-xl font-semibold mt-6">Customers</p>
				{selectedFarmerContent}
				<div className="rounded-lg">
                    <div className='py-4'>
                        <InputText
                            onInput={(e) => {	
                                setFilters({
                                    ...filters,
                                    global: {value:e.target.value, matchMode: FilterMatchMode.CONTAINS}
                                })
                            }}
                            placeholder="Search a customer..."
                        />
                    </div>
					<DataTable 
						value={customers} 
						sortMode="multiple" 
						filters={filters} 
						onFilter={(e) => setFilters(e.filters)}
						selection={selectedCustomer} 
						onSelectionChange={(e) => setSelectedCustomer(e.value)} 
						selectionMode="single"
						stateStorage="session" 
						stateKey="dt-state-demo-local"
						paginator
						rows={10}
						rowsPerPageOption={[5,10]}
						tableRecord={2}
						tableStyle={{ minWidth: '60rem' }}
						emptyMessage="No customer found."
						metaKeySelection={true}
						 dragSelection
						  paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of customers"
					>
						<Column field="firstname" filter  body={nameBodyTemplate} filterField="Name" showFilterMenu={false} header="Name" sortField="name" sortable/>
        				<Column field="email" filter showFilterMenu={false} header="Email" sortField="email" sortable/>
	                    <Column field="gender" header="Gender" sortable></Column>
	                    <Column field="tel" header="PhoneNumber" sortable ></Column>
	                    <Column field="dob" header="Date of birth" sortable></Column>
	                    <Column field="city" header="City" sortable ></Column>
					</DataTable>
				</div>
			</div>
		</>
	)
}