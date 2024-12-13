
import OrderTable from '../components/table/orderTable.jsx';
import {OrderData} from '../Utils/tableData.jsx'
import {useState} from 'react'
import {DataTable} from 'primereact/datatable'
import {Column} from 'primereact/column'
import {CustomerData} from '../Utils/tableData.jsx'
import {InputText} from 'primereact/inputtext'
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { MultiSelect } from 'primereact/multiselect';
import { Dropdown } from 'primereact/dropdown';
import { Tag } from 'primereact/tag';

import { classNames } from 'primereact/utils';
// import { ProductService } from './service/ProductService';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';

export default function Orders(){

	const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        client: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        product: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        status: { value: null, matchMode: FilterMatchMode.EQUALS },
        quantity: { value: null, matchMode: FilterMatchMode.EQUALS },
        payment: { value: null, matchMode: FilterMatchMode.EQUALS },
        Amount: { value: null, matchMode: FilterMatchMode.EQUALS },
        date: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    });

    const [statuses] = useState(["shipped", "pending", "cancelled", "delivered"]);

    const [selectedOrder, setSelectedOrder] = useState(null);

    const [orders, setOrers] = useState(OrderData);

	 const clientBodyTemplate = (rowData) => {
        return (
            <div className="flex align-items-center gap-2">
                <div style={{backgroundImage: `url(${rowData.image})`}} className="bg-cover bg-center rounded-full w-10 h-10" > </div>
                <span className="py-1">{rowData.client}</span>
            </div>
        );
    };


    const formatCurrency = (value) => {
        return value.toLocaleString('de-DE', { style: 'currency', currency: 'XAF' });
    };

 	const getSeverity = (value) => {
        switch (value) {
            case "shipped":
                return 'info';

            case "pending":
                return 'warning';

            case "cancelled":
                return 'danger';

            case "delivered":
                return 'success';

            default:
                return null;
        }
    };

     const statusRowFilterTemplate = (options) => {
        return (
            <Dropdown value={options.value} options={statuses} onChange={(e) => options.filterApplyCallback(e.value)} itemTemplate={statusItemTemplate} placeholder="Select One" className="p-column-filter" showClear style={{ minWidth: '12rem' }} />
        );
    };

    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.status} severity={getSeverity(rowData.status)} />;
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
            <div className="flex justify-content-end">
            	<p className="text-createText text-lg pr-8">Recent Orders</p>
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={value || ''} onChange={(e) => onGlobalFilterChange(e)} placeholder="Search order" />
                </span>
                <div className='w-32'>
                    <button className='p-1 px-3 rounded-lg text-white font-bold'>Done</button>
                </div>
            </div>
        );
    };

    const header = renderHeader();


    // const formatDate = (value) => {
    //     return value.toLocaleDateString('de-DE', {
    //         day: '2-digit',
    //         month: '2-digit',
    //         year: 'numeric'
    //     });
    // };


    // const dateBodyTemplate = (rowData) => {
    //     return formatDate(rowData.date);
    // };


    const priceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.Amount);
    };

	return(
		<>
			<div className=" w-full bg-bg_dash md:w-120 lg:w-120 scrollbar-thin hover:scrollbar-thumb-gray-200 scrollbar-track-gray-300 h-[698px] overflow-auto mt-1">
                <p className=" text-lg font-medium text-createText my-6" >Orders</p>
				<div className="rounded-lg mt-4">
					<DataTable 
						value={orders} 
						sortMode="multiple" 
						filters={filters} 
						onFilter={(e) => setFilters(e.filters)}
						selection={selectedOrder} 
						onSelectionChange={(e) => setSelectedOrder(e.value)} 
						selectionMode="single"
						stateStorage="session" 
						stateKey="dt-state-demo-local"
						paginator
						header={header}
						rows={10}
						rowsPerPageOption={[3,6]}
						tableRecord={2}
						tableStyle={{ minWidth: '60rem' }}
						emptyMessage="No customer found."
						metaKeySelection={true}
						 dragSelection
					>

						id:1,
						client: "Ateba gaspar olivier",
						image: img5,
						product: "Honey",
						quantity: 5,
						Amount: 5200,
						payment: "Mobile Money",
						status: "shipped",
						date: "3 Nov 2023",

						<Column filter filterPlaceholder="Search by client" className="" field="id" header="Id" sortable sortField="id"/>
						<Column field="client" filter body={clientBodyTemplate} filterField="client" showFilterMenu={false} header="Client" sortField="client" sortable/>
						<Column field="product" filter showFilterMenu={false} filterField="product" header="Product" sortField="product" sortable/>
						<Column field="quantity" filter showFilterMenu={false} filterField="quantity" header="Quantity" sortField="quantity" sortable/>
						<Column field="Amount" filter body={priceBodyTemplate} showFilterMenu={false} filterField="Amount" header="Amount" sortField="Amount" sortable/>
						<Column field="payment" filter showFilterMenu={false} filterField="payment" header="Payment" sortField="payment" sortable/>
						<Column field="status" filter body={statusBodyTemplate} showFilterMenu={false} filterField="status" header="Status" sortField="status" sortable/>
						<Column field="date" filter showFilterMenu={false} filterField="date" header="Date" sortField="date" sortable/>
					</DataTable>
				</div>
			</div>	
		</>
	)
}