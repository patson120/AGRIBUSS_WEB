
import {BsArrowBarUp,BsPrinterFill, BsEye,BsFillPencilFill, BsFillTrash3Fill,BsBoxArrowInUp, BsPlusLg} from 'react-icons/bs'
		
import React, { useState, useRef  } from 'react';
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
import {InvoiceData} from '../Utils/tableData.jsx'
import { Tooltip } from 'primereact/tooltip';

export default function Invoice(){


	let emptyInvoice = {
        id: null,
        client: null,
        product: null,
        quantity: null,
        Amount: null,
        date: null
    };

	const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        client: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        Amount: { value: null, matchMode: FilterMatchMode.EQUALS },
        date: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    });

    const [product, setProduct] = useState(emptyInvoice);

    const [selectedInvoice, setSelectedInvoice] = useState(null);

    const [invoices, setInvoices] = useState(InvoiceData);

    const [invoice, setInvoice] = useState(emptyInvoice);

    const [invoiceDialog, setInvoiceDialog] = useState(false);

    const toast = useRef(null);
    const dt = useRef(null);

    const editProduct = (product) => {
        setInvoice({ ...product });
        setInvoiceDialog(true);
    };


    const openNew = () => {
        setInvoiceDialog(true);
    };

    const hideDialog = () => {
        setInvoiceDialog(false);
    };

	 const clientBodyTemplate = (rowData) => {
        return (
            <div className="flex align-items-center gap-2">
                <div style={{backgroundImage: `url(${rowData.image})`}} className="bg-cover bg-center rounded-full w-10 h-10" > </div>
                <span className="py-1">{rowData.client}</span>
            </div>
        );
    };

    const exportCSV = () => {
        dt.current.exportCSV();
    };

    const rightToolbarTemplate = () => {
        return <Button label="Export" icon={<BsBoxArrowInUp className="mr-2 " size={20}	/>} className="p-1 bg-orange-400 border-0" onClick={exportCSV} />;
    };

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button icon={<BsEye/>} id="print" data-pr-tooltip="print" green rounded outlined  severity="success" className="mr-2 text-primary p-1" onClick={() => { editProduct(rowData)}} />
            </React.Fragment>
        );
    };

    const formatCurrency = (value) => {
        return value.toLocaleString('de-DE', { style: 'currency', currency: 'XAF' });
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
            	<p className="text-createText font-medium text-lg pr-8">Recent invoices</p>
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={value || ''} onChange={(e) => onGlobalFilterChange(e)} placeholder="Search..." />
                </span>
            </div>
        );
    };

    const invoiceDialogFooter = (
        <React.Fragment>
            <Button label="Cancel" severity="danger" outlined onClick={hideDialog} />
            <Button label="Print" severity="success" onClick={exportCSV} />
        </React.Fragment>
    );

    const header = renderHeader();

    const priceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.Amount);
    };

	return(
		<>
			<div className=" w-full bg-bg_dash md:w-120 lg:w-120 scrollbar-thin hover:scrollbar-thumb-gray-200 scrollbar-track-gray-300 h-[698px] overflow-auto mt-1">
				<p className=" text-lg font-semibold text-createText my-6" >Invoices</p>
				<div className="rounded-lg mt-4">
                <Toolbar className="mb-4 p-2 border-0" right={rightToolbarTemplate}></Toolbar>
                <Tooltip target="#print" mouseTrack mouseTrackLeft={10}  tooltipOptions={{ position: 'bottom' }} />
					<DataTable 
						ref={dt} 
						value={invoices} 
						sortMode="multiple" 
						filters={filters} 
						onFilter={(e) => setFilters(e.filters)}
						selection={selectedInvoice} 
						onSelectionChange={(e) => setSelectedInvoice(e.value)} 
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



						<Column filter filterPlaceholder="Search by client" className="" field="id" header="Invoice No" sortable sortField="id"/>
						<Column field="client" filter body={clientBodyTemplate} filterField="client" showFilterMenu={false} header="Customer Name" sortField="client" sortable/>
						<Column field="product" filter showFilterMenu={false} filterField="product" header="Product" sortField="product" sortable/>
						<Column field="quantity" filter showFilterMenu={false} filterField="quantity" header="Quantity" sortField="quantity" sortable/>
						<Column field="Amount" filter body={priceBodyTemplate} showFilterMenu={false} filterField="Amount" header="Amount" sortField="Amount" sortable/>
						<Column field="payment" filter showFilterMenu={false} filterField="payment" header="Payment" sortField="payment" sortable/>
						<Column field="date" filter showFilterMenu={false} filterField="date" header="Paid On" sortField="date" sortable/>
                   		<Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '5rem' }}></Column>
					</DataTable>

					</div>
					<Dialog visible={invoiceDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="" modal className="p-fluid text-createText" footer={invoiceDialogFooter} onHide={hideDialog}>
		                    <div className=" ">

								<p className=" border-b border-inputB text-black text-2xl font-bold pb-4">Agri<span className="text-logo">BUSS</span></p>
								<div className="flex flex-col w-full mt-5">
									<div className="flex flex-row">
										<div className=" w-[50%] "><p className="text-lg font-semibold">Date :</p></div>
										<div className=" w-[50%]"> <span className=" font-light align-self-end"> {invoice.date}</span></div>
									</div>
									<div className="flex flex-row">
										<div className=" w-[50%] "><p className="text-lg font-semibold">Customer name : </p></div>
										<div className=" w-[50%]"> <span className=" font-light align-self-end"> {invoice.client}</span></div>
									</div>
									<div className="flex flex-row">
										<div className=" w-[50%] "><p className="text-lg font-semibold">Product name :</p></div>
										<div className=" w-[50%]"> <span className=" font-light align-self-end"> {invoice.product}</span></div>
									</div>
									<div className="flex flex-row">
										<div className=" w-[50%] "><p className="text-lg font-semibold">Price : </p></div>
										<div className=" w-[50%]"> <span className=" font-light align-self-end"> {invoice.Amount} FCFA</span></div>
									</div>
									<div className="flex flex-row pb-4 border-b border-createTex">
										<div className=" w-[50%] "><p className="text-lg font-semibold">Quantity : </p></div>
										<div className=" w-[50%]"> <span className=" font-light align-self-end"> {invoice.quantity}</span></div>
									</div>

									<p className="mt-5 ">Thank you for your confidence :)</p>

								</div>
								{console.log(invoice)}
		                    </div>
		            </Dialog>
			</div>	
		</>
	)
}