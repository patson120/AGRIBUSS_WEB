import {BsChevronCompactRight, BsCaretDownFill,BsCalendar4Week, BsChevronCompactLeft, BsStarFill} from 'react-icons/bs'
			
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
// import { ProductService } from './service/ProductService';

export default function ProdTable({name, object}){

	const [products, setProducts] = useState([]);
    const [statuses] = useState(['Instock', 'Lowstock', 'Outofstock']);
     const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        status: { value: null, matchMode: FilterMatchMode.EQUALS },
    });


    const [loading, setLoading] = useState(true);
    const [globalFilterValue, setGlobalFilterValue] = useState('');

    // useEffect(() => {
    //     ProductService.getProductsMini().then((data) => setProducts(data));
    // }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const product = 
    [
    	{
    		code: "f230fh0g3",
    		name: "Sugar cane",
    		status: "Instock",
    		price: 1500,
    		category: "Fruit",
    		quantity: 15,
    		desc: "Juicy sugar cane"
    	},
    	{
    		code: "f230fsah0g3",
    		name: "Honey",
    		status: "Lowstock",
    		price:  1000,
    		category: "Fruit",
    		quantity: 20,
    		desc: "Juicy sugar cane"
    	},
    	{
    		code: "f230fha0g3",
    		name: "Maize",
    		status: "Outofstock",
    		price: 2500,
    		category: "Fruit",
    		quantity: 10,
    		desc: "Juicy sugar cane"
    	},
    	{
    		code: "f230fhd0g3",
    		name: "Carrot",
    		status: "Instock",
    		price: 500,
    		category: "Fruit",
    		quantity: 2,
    		desc: "Juicy sugar cane"
    	},
    	{
    		code: "f230fsh0g3",
    		name: "Wheat",
    		status: "Outofstock",
    		price: 200,
    		category: "Fruit",
    		quantity:20,
    		desc: "Juicy sugar cane"
    	},
    ]

    

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
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </span>
            </div>
        );
    };

    const getSeverity = (value) => {
        switch (value) {
            case 'Instock':
                return 'success';

            case 'Lowstock':
                return 'warning';

            case 'Outofstock':
                return 'danger';

            default:
                return null;
        }
    };

    const onRowEditComplete = (e) => {
        let _products = [...product];

        let { newData, index } = e;

        _products[index] = newData;
        setProducts(_products);
    };

    const textEditor = (options) => {
        return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
    };

    const statusEditor = (options) => {
        return (
            <Dropdown
                value={options.value}
                options={statuses}
                onChange={(e) => options.editorCallback(e.value)}
                placeholder="Select a Status"
                itemTemplate={(option) => {
                    return <Tag value={option} severity={getSeverity(option)}></Tag>;
                }}
            />
        );
    };

     const statusRowFilterTemplate = (options) => {
        return (
            <Dropdown value={options.value} options={statuses} onChange={(e) => options.filterApplyCallback(e.value)} itemTemplate={statusItemTemplate} placeholder="Select One" className="p-column-filter" showClear style={{ minWidth: '12rem' }} />
        );
    };

    const statusItemTemplate = (option) => {
        return <Tag value={option} severity={getSeverity(option)} />;
    };

    const header = renderHeader();

    const priceEditor = (options) => {
        return <InputNumber value={options.value} onValueChange={(e) => options.editorCallback(e.value)} mode="currency" currency="XAF" locale="de-DE" />;
    };

    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.status} severity={getSeverity(rowData.status)}></Tag>;
    };

    const priceBodyTemplate = (rowData) => {
        return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'XAF' }).format(rowData.price);
    };


	return(
		<>
		

        <div className=" overflow-x-auto py-4 pr-1 w-full">
            <DataTable value={product}  filters={filters} filterDisplay="row"  emptyMessage="No product found." globalFilterFields={['name', 'status']} header={header} sortMode="multiple" paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} editMode="row" dataKey="id" onRowEditComplete={onRowEditComplete} tableStyle={{ padding: 0, minWidth: '60rem', maxWidth: "1024"}}>
                <Column field="code" header="Code"  sortable editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                <Column field="name" header="Name" filterPlaceholder="Search by name" sortable editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                <Column field="status" header="Status" showFilterMenu={false} filterMenuStyle={{ width: '14rem' }} sortable body={statusBodyTemplate} editor={(options) => statusEditor(options)} style={{ width: '20%' }}></Column>
                <Column field="price" header="Price" sortable body={priceBodyTemplate} editor={(options) => priceEditor(options)} style={{ width: '20%' }}></Column>
                <Column field="category" header="Category" filterPlaceholder="Search by name" sortable editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                <Column field="quantity" header="Quantity" filterPlaceholder="Search by name" sortable editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                <Column field="desc" header="Description" filterPlaceholder="Search by name" sortable editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} sortable bodyStyle={{ textAlign: 'center' }}></Column>
            </DataTable>
        </div>
        
		</>
	)
}