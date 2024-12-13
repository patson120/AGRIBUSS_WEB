
import {BsChevronCompactRight, BsCaretDownFill,BsCalendar4Week, BsChevronCompactLeft, BsStarFill, BsStar} from 'react-icons/bs'
import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import {OrdData} from '../../Utils/tableData.jsx'
import { Column } from 'primereact/column';

import { Outlet, Link } from "react-router-dom";
import { Tag } from 'primereact/tag';
import { products } from '../../constants/objects.jsx';

export default function Table({name}){


    const [selectedOrder, setSelectedOrder] = useState(null);

    const [order, setOrer] = useState(products);
     const productBodyTemplate = (rowData) => {
        return (
            <div className="flex align-items-center w-full gap-2">
                <div style={{backgroundImage: `url(${rowData.images[0]})`}} className="bg-cover bg-center rounded-full w-10 h-10" > </div>
                <span className="py-1 text-sm">{rowData.name}</span>
            </div>
        );
    };


    const formatCurrency = (value) => {
        return value.toLocaleString('de-DE', { style: 'currency', currency: 'XAF' });
    };

 	const getSeverity = (value) => {
        switch (value) {

            case "LowStock":
                return 'warning';

            case "OutOfStock":
                return 'danger';

            case "InStock":
                return 'success';

            default:
                return null;
        }
    };

    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.status} severity={getSeverity(rowData.status)} />;
    };

    const rateBodyTemplate = (rowData) => {
    	return (
            <div className="flex text-yellow-500">
                        
            {[...Array(rowData.rate)].map((_, index) => (
                <BsStarFill/>
            ))}
            {[...Array(5 - rowData.rate)].map((_, index) => (
                <BsStar/>
            ))}

            </div>
        )
    }

    const categoryBodyTemplate = (rowData) => {
    	return <div className="text-sm">{rowData.category}</div>
    }

    const priceBodyTemplate = (rowData) => {
        return <div className="text-sm">{formatCurrency(rowData.price)}  </div>;
    };

    const dateBodyTemplate = (rowData) => {
        return <div className="text-sm">{new Date().getDate()}-{new Date().getMonth()}-{new Date().getFullYear()}</div>;
    };

	return(
		<div className=" bg-white mt-3 flex flex-col gap-2 rounded-md ">
				<div className="flex border-b border-border flex-row justify-between bg-white rounded-t-md py-2 px-4  w-full">
					<p className="w-[72%] font-bold text-lightBlack text-md py-2">{name}</p>
					<div className="flex flex-row py-2">
						<Link to={`/farmer/Sales/Orders`}><p className="text-primary hover:underline text-xs ml-40 pr-2 mt-1">View all</p></Link>
					</div>
				</div>
				<div className="p-3">
					<DataTable 
						value={order} 
						sortMode="multiple" 
						selection={selectedOrder} 
						onSelectionChange={(e) => setSelectedOrder(e.value)} 
						selectionMode="single"
						stateStorage="session" 
						stateKey="dt-state-demo-local"
						paginator
						rows={4}
						rowsPerPageOption={[3,6]}
						tableRecord={2}
						tableStyle={{ minWidth: '60rem' }}
						emptyMessage="No customer found."
						metaKeySelection={true}
						 dragSelection
					>

						<Column field="name" filter body={productBodyTemplate} showFilterMenu={false} filterField="name" header="Product" sortField="name" sortable/>
						<Column field="caregory" filter body={categoryBodyTemplate} showFilterMenu={false} filterField="category" header="Category" sortField="category" sortable/>
						<Column field="price" filter body={priceBodyTemplate} showFilterMenu={false} filterField="price" header="Price" sortField="price" sortable/>
						<Column field="rate" filter body={rateBodyTemplate} showFilterMenu={false} filterField="rate" header="Review" sortField="rate" sortable/>
						<Column field="status" filter body={statusBodyTemplate} showFilterMenu={false} filterField="status" header="Status" sortField="status" sortable/>
						<Column field="date" filter body={dateBodyTemplate} showFilterMenu={false} filterField="date" header="Date" sortField="date" sortable/>
					</DataTable>
				</div>
		</div>
	)
}