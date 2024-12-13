

import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { Tag } from 'primereact/tag';
import { Toolbar } from 'primereact/toolbar';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton } from 'primereact/radiobutton';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { Rating } from 'primereact/rating';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { MultiSelect } from 'primereact/multiselect';
import { Dialog } from 'primereact/dialog';
import { classNames } from 'primereact/utils';
import { TriStateCheckbox } from 'primereact/tristatecheckbox';
import { Toast } from 'primereact/toast';

export default function OrderTable({object}){

	const [order, setOrder] = useState({object})

    const [statuses] = useState(["shipped", "pending", "cancelled", "delivered"]);

    const [selectedCustomer, setSelectedCustomer] = useState(null);

    const [payment] = useState(["Orange Money", "Mobile Money"])

    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        client: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        status: { value: null, matchMode: FilterMatchMode.EQUALS },
        quantity: { value: null, matchMode: FilterMatchMode.EQUALS },
        payment: { value: null, matchMode: FilterMatchMode.EQUALS },
        date: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
    });

    const [loading, setLoading] = useState(true);
    const [globalFilterValue, setGlobalFilterValue] = useState('');

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

     const renderHeader = () => {
        return (
            <div className="flex justify-content-end">
            	<p>Recent Orders</p>
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </span>
            </div>
        );
    };

    const NameBodyTemplate = (rowData) => {
        return (
            <div className="flex align-items-center gap-2">
                <div style={{backgroundImage: `url(${rowData.image})`}} className="bg-cover bg-center rounded-full w-10 h-10" > </div>
                <span className="py-1">{rowData.name}</span>
            </div>
        );
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


    const formatCurrency = (value) => {
        return value.toLocaleString('de-DE', { style: 'currency', currency: 'XAF' });
    };

    const formatDate = (value) => {
        return value.toLocaleDateString('de-DE', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    };


    const dateBodyTemplate = (rowData) => {
        return formatDate(rowData.date);
    };

    const dateFilterTemplate = (options) => {
        return <Calendar value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" mask="99/99/9999" />;
    };

    const priceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.amount);
    };

    const header = renderHeader();

    const orderBodyTemplate = (rowData) => {
    	return(
    		<div>
                <div style={{backgroundImage: `url(${rowData.image})`}} className="bg-cover bg-center rounded-full w-10 h-10"  />
                <span>{rowData.client}</span>
    		</div>
    	)
    }


    const statusRowFilterTemplate = (options) => {
        return (
            <Dropdown value={options.value} options={statuses} onChange={(e) => options.filterApplyCallback(e.value)} itemTemplate={statusItemTemplate} placeholder="Select One" className="p-column-filter" showClear style={{ minWidth: '12rem' }} />
        );
    };

    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.status} severity={getSeverity(rowData.status)} />;
    };

    const statusItemTemplate = (option) => {
        return <Tag value={option} severity={getSeverity(option)} />;
    };
												  //   id:2,
														// client: "Adouable Jessica",
														// image: img2,
														// product: "Chicks",
														// quantity: 5,
														// Amount: 7500,
														// payment: "Orange Money",
														// status: "pending",
														// date: "3 Nov 2023",
	return(
		<>
			<div className=" overflow-x-auto py-4 pr-1 w-full">
            <DataTable value={order}  filters={filters} filterDisplay="row"  emptyMessage="No order found." globalFilterFields={['client', 'product', 'quantity', 'Amount', 'payment', 'date', 'status']} header={header} sortMode="multiple" paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} dataKey="id" tableStyle={{ padding: 0, minWidth: '60rem', maxWidth: "1024"}}>
                <Column field="client" header="Client Name" body={orderBodyTemplate} sortable style={{ width: '20%' }}></Column>
                <Column field="product" header="Product" filterPlaceholder="Search by name" sortable style={{ width: '20%' }}></Column>
                <Column field="quantity" header="Quantity" showFilterMenu={false} filterMenuStyle={{ width: '14rem' }} sortable  style={{ width: '20%' }}></Column>
                <Column field="Amount" header="Amount" sortable body={priceBodyTemplate}  style={{ width: '20%' }}></Column>
                <Column field="payment" header="Payment" filterPlaceholder="Search by name" sortable  style={{ width: '20%' }}></Column>
                <Column field="date" header="Date" body={dateBodyTemplate}  filterPlaceholder="Search by name" sortable  style={{ width: '20%' }}></Column>
                <Column field="status" header="Status" filterPlaceholder="Search by name" body={statusBodyTemplate} sortable style={{ width: '20%' }}></Column>
            </DataTable>

			</div>
		</>
	)
}