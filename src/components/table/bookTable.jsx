

import {BsArrowBarUp,BsImageAlt,BsFillPencilFill, BsFillTrash3Fill,BsBoxArrowInUp, BsPlusLg} from 'react-icons/bs'

import React, { useState, useEffect, useRef, createElement } from 'react';
import { classNames } from 'primereact/utils';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
// import { ProductService } from './service/ProductService';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { Rating } from 'primereact/rating';
import { Toolbar } from 'primereact/toolbar';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton } from 'primereact/radiobutton';
import { InputNumber } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import FormInput from '../inputs/FormInput.jsx'
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';
import img2 from '../../assets/images/coffee.jpeg'
import img3 from '../../assets/images/htyu.jpeg'
import img4 from '../../assets/images/flow2.jpeg'
import img5 from '../../assets/images/brou.jpeg'
import img6 from '../../assets/images/incub1.jpeg'
import img7 from '../../assets/images/incub.jpeg'
import img8 from '../../assets/images/banana.jpeg'
import img12 from '../../assets/images/chick.jpeg'
import img9 from '../../assets/images/cocao.jpeg'
import img10 from '../../assets/images/fruit.jpeg'
import img11 from '../../assets/images/honey.jpeg'
import * as Yup from "yup"
import {useFormik} from "formik"
import Input from '../inputs/Input.jsx'
import TableRow from './tableRow.jsx'
import {bookInfo } from '../../Utils/tableData.jsx'
import {useSelector, useDispatch} from 'react-redux'
import {getProduct, allProducts} from '../../redux/feature/productSlice.js'

export default function BookTable() {

    const dispatch = useDispatch() 
    // const products = useSelector(productInfo)
    const [products, setProducts] = useState(bookInfo)
    console.log(products)

    // if(!visible) return null;
    const [inputFields, setInputFields] = useState([
        {price: '', image: '', weight: '', size: '', length: '', color: ''}
    ])

    const [Variation, setVariation] = useState(false)
    const [simple, setSimple] = useState(true)

    const showVariation = () => {
        setVariation(true)
        setSimple(false)
    }

    const showSimple = () => {
        setVariation(false)
        setSimple(true)
    }

    const initialValues = {
        product_name: "",
        qty: "",
        price: "",
        category: "",
        location: "",
        image: "",
        desc:""
    }

    let emptyProduct = {
        code: null,
        driver: "Kang Frank",
    	status: "pending",
    	car: img5,
    	destination: "Mendong",
    };

 

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
        images: Yup.string()
                .required("Field is required"),
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


    const [selectedCustomer, setSelectedCustomer] = useState(null);

    const [varField, setVarField] = useState(true)
    const [productDialog, setProductDialog] = useState(false);
    const [deleteProductDialog, setDeleteProductDialog] = useState(false);
    const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
    const [product, setProduct] = useState(emptyProduct);
    const [editDialog, setEditDialog] = useState(false)
    const [rideProducts, setrideProducts] = useState(false);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);
    const [expandedRows, setExpandedRows] = useState(null);

    useEffect(() => {
        dispatch(getProduct());
    }, []);


    const formatCurrency = (value) => {
        return value.toLocaleString('de-DE', { style: 'currency', currency: 'XAF' });
    };

    const openNew = () => {
        setProduct(emptyProduct);
        setSubmitted(false);
        setProductDialog(true);
    };

    const hideDialog = () => {
        setSubmitted(false);
        setProductDialog(false);
    };

    const hideDeleteProductDialog = () => {
        setDeleteProductDialog(false);
    };

    const hideDeleteProductsDialog = () => {
        setDeleteProductsDialog(false);
    };

    const saveProduct = () => {
        setSubmitted(true);

        if (product.name.trim()) {
            let _products = [...products];
            let _product = { ...product };

            if (product.id) {
                const index = findIndexById(product.id);

                _products[index] = _product;
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
            } else {
                _product.id = createId();
                _product.image = 'product-placeholder.svg';
                _products.push(_product);
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
            }

            setProducts(_products);
            setProductDialog(false);
            setProduct(emptyProduct);
        }
    };

    const editProduct = (product) => {
        setProduct({ ...product });
        setEditDialog(true);
    };

    const confirmDeleteProduct = (product) => {
        setProduct(product);
        setDeleteProductDialog(true);
    };

    const deleteProduct = () => {
        let _products = products.filter((val) => val.id !== product.id);

        setProducts(_products);
        setDeleteProductDialog(false);
        setProduct(emptyProduct);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
    };

    const findIndexById = (id) => {
        let index = -1;

        for (let i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    };

    const createId = () => {
        let id = '';
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        return id;
    };

    const exportCSV = () => {
        dt.current.exportCSV();
    };

    const confirmDeleteSelected = () => {
        setDeleteProductsDialog(true);
    };

    const deleteSelectedProducts = () => {
        let _products = products.filter((val) => !selectedProducts.includes(val));

        setProducts(_products);
        setDeleteProductsDialog(false);
        setSelectedProducts(null);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 1000 });
    };

    const onCategoryChange = (e) => {
        let _product = { ...product };

        _product['category'] = e.value;
        setProduct(_product);
    };

    const onInputChange = (e, name) => {
        const val = (e.target && e.target.value) || '';
        let _product = { ...product };

        _product[`${name}`] = val;

        setProduct(_product);
    };

    const onInputNumberChange = (e, name) => {
        const val = e.value || 0;
        let _product = { ...product };

        _product[`${name}`] = val;

        setProduct(_product);
    };

    const leftToolbarTemplate = () => {
        return (
            <div className="flex flex-wrap gap-2">
                <Button label="Cancel" icon={<BsFillTrash3Fill className="mr-2" size={20}	/>}  className="h-8 pl-1"  severity="danger" onClick={confirmDeleteSelected} disabled={!selectedProducts || !selectedProducts.length} />
            </div>
        );
    };

    const rightToolbarTemplate = () => {
        return <Button label="Export" icon={<BsBoxArrowInUp className="mr-2 " size={20}	/>} className="p-1 bg-orange-400 border-0" onClick={exportCSV} />;
    };

    const imageBodyTemplate = (rowData) => {
        return <div style={{backgroundImage: `url(${rowData.img})`}} className="bg-cover bg-center rounded-full w-12 h-12" > </div> ;
    };

    const imageTemplate = (rowData) => {
        return <div style={{backgroundImage: `url(${rowData.car})`}} className="bg-cover bg-center w-15 h-12" > </div> ;
    };

    const priceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.price);
    };

    const priceBodTemplate = (rowData) => {
        return formatCurrency(rowData.oPrice);
    };

    const ratingBodyTemplate = (rowData) => {
        return <Rating value={rowData.rating} readOnly cancel={false} />;
    };

    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.status} severity={getSeverity(rowData)}></Tag>;
    };

    const weightBodyTemplate = (rowData) => {
        return <div>{rowData.weight} Kg</div>
    }
 

    const actionBodyTemplate = (rowData) => {
        console.log(rowData)
        if(rowData.status === "delivered"){
            setrideProducts(true)
            return (
                <React.Fragment>
                   
                    <Button icon={<BsFillPencilFill/>} green rounded outlined  severity="success" className="mr-2 text-primary " onClick={() => editProduct(rowData)} disabled={!rideProducts}/>
                </React.Fragment>
            );
        }else{
            setrideProducts(false)
            return (
                <React.Fragment>
                   
                    <Button icon={<BsFillPencilFill/>} green rounded outlined  severity="success" className="mr-2 text-primary " onClick={() => editProduct(rowData)} disabled={!rideProducts}/>
                </React.Fragment>
            );
        }

    };

    const getSeverity = (product) => {
        switch (product.status) {
            case 'accepted':
                return 'success';

            case 'pending':
                return 'warning';

            case 'rejected':
                return 'danger';

            case 'delivered':
                    return 'info';

            default:
                return null;
        }
    };

    const addProductVariation = () => {
        return createElement(
            'div',
            {className: 'greeting'},
            'Hello'
        )
    }

    const header = (
        <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
            <h4 className="m-0">Manage Ride Books</h4>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </span>
        </div>
    );
    const productDialogFooter = (
        <React.Fragment>
            <button className="border border-red-500 rounded-md outline-0 cursor-pointer text-red-500 p-2" onClick={hideDialog}>Cancel</button>
            <button className="rounded-md text-white bg-black cursor-pointer p-2" onClick={saveProduct}>Add product</button>
        </React.Fragment>
    );
    const deleteProductDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" outlined onClick={hideDeleteProductDialog} />
            <Button label="Yes" icon="pi pi-check" severity="danger" onClick={deleteProduct} />
        </React.Fragment>
    );
    const deleteProductsDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" outlined onClick={hideDeleteProductsDialog} />
            <Button label="Yes" icon="pi pi-check" severity="danger" onClick={deleteSelectedProducts} />
        </React.Fragment>
    );

      const [rows, initRow] = useState([]);
      const addRowTable = () => {
        const data = {
          price: "", 
          weight: "", 
          category: "", 
          length: "", 
          color: "", 
          qty: "", 
          image: "",
        };
        initRow([...rows, data]);
      };
      const tableRowRemove = (index) => {
        const dataRow = [...rows];
        dataRow.splice(index, 1);
        initRow(dataRow);
      };
      const onValUpdate = (i, event) => {
        const { name, value } = event.target;
        const data = [...rows];
        data[i][name] = value;
        initRow(data);
      };


    const onRowExpand = (event) => {
        toast.current.show({ severity: 'info', summary: 'Product Expanded', detail: event.data.name, life: 3000 });
    };


    const allowExpansion = (rowData) => {
        return rowData.variation.length() > 0;
    };

       const rowExpansionTemplate = (data) => {
        return (
            <div className="p-3">
                <DataTable value={data.variation} 
                    selection={selectedProducts} 
                    onSelectionChange={(e) => setSelectedProducts(e.value)}
                    selectionMode="single"
                    stateStorage="session" 
                    stateKey="dt-state-demo-local"
                    metaKeySelection={true}
                    dragSelection
                    emptyMessage="No variation found."
                >
                
                    {/*<Column field="img" header="Image" body={imageBodyTemplate} sortable></Column>*/}
                    <Column field="price" header="Price" body={priceBodyTemplate} sortable></Column>
                    <Column field="weight" header="Weight" body={weightBodyTemplate} sortable></Column>
                    {/*<Column field="status" header="Status" body={statusBodyTemplate} sortable></Column>*/}
                    <Column field="color" header="Color" sortable></Column>
                    <Column field="quantity" header="Quantity" sortable></Column>
                    <Column field="size" header="Size" sortable></Column>
                    <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '5rem' }}></Column>
                </DataTable>
            </div>
        );
    };


    return (
        <div className=" overflow-x-auto mr-2 mt-4">
            <Toast ref={toast} />
            <div className="w-full">
                <Toolbar className="mb-4 p-2 border-0" left={leftToolbarTemplate} right={rightToolbarTemplate}></Toolbar>

                <DataTable ref={dt} value={products} selection={selectedProducts} 
                        onSelectionChange={(e) => setSelectedProducts(e.value)}
                        selectionMode="single"
                        stateStorage="session" 
                        stateKey="dt-state-demo-local"
                        metaKeySelection={true}
                        expandedRows={expandedRows} 
                        onRowToggle={(e) => setExpandedRows(e.data)}
                        onRowExpand={onRowExpand} 
                        dragSelection
                        rowExpansionTemplate={rowExpansionTemplate}
                        paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products" globalFilter={globalFilter} header={header}>
                    {/* <Column expander={true} style={{ width: '5rem' }} /> */}
                    <Column selectionMode="multiple" exportable={false}></Column>
                    <Column field="driver" header="Driver" sortable style={{ minWidth: '14rem' }}></Column>
                    <Column field="car" header="Car" body={imageTemplate}></Column>
                    <Column field="destination" header="Destination" sortable style={{ minWidth: '10rem' }}></Column>
                    <Column field="status" header="Status" body={statusBodyTemplate} sortable style={{ minWidth: '12rem' }}></Column>
                    <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '5rem' }}></Column>

                </DataTable>
            </div>

            <Dialog visible={productDialog} style={{ width: '85rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Add Product"  modal footer={productDialogFooter} className="p-fluid text-createText" onHide={hideDialog}>
{/*                {product.image && <img src={`${product.image}`} alt={product.image} className="product-image rounded-md block m-auto pb-3" />}*/}
                <div className="flex bg-gray-100 rounded-full w-fit">
                    <button className={simple ? "p-2 bg-primary text-white rounded-full" : "p-2 rounded-full"} onClick={showSimple}>Simple</button>
                    <button className={Variation ? "p-2 bg-primary text-white rounded-full" : "p-2 rounded-full"} onClick={showVariation}>Variable</button>
                </div>
                
                   
                <div className={Variation ? "flex flex-wrap gap-4 h-[450px]" :" hidden" }>
                <form className={Variation ? "flex flex-wrap gap-4 h-[450px]" :" hidden" } method="POST" onSubmit={formik.handleSubmit}> 
                    <div className="field mt-5 flex flex-col w-full">
                                <FormInput
                                    value={formik.values.name}
                                    onBlur={formik.handleBlur("name")}
                                    onChange={formik.handleChange("name")}
                                    type="text"
                                    placeholder="Enter your first name"
                                    label="First name"
                                />
                                {formik.errors.name && formik.touched.name && <p className="text-red-500 mt-2 text-sm">{formik.errors.name}</p>}

                    </div>

                      <div className="field flex flex-col w-[49%]">
                            <label htmlFor="category" className="font-bold">
                                Category
                            </label>
                            <select  onChange={(e) => onInputChange(e, 'category')} className="border-border rounded-md my-2 p-2 pl-6 border text-grey text-md hover:shadow-md focus:shadow-md outline-none w-full">
                                <option className="hover:bg-primary" onChange={onCategoryChange} >Tool</option>
                                <option className="hover:bg-primary" onChange={onCategoryChange} > Food </option>
                            </select>
                        </div>

                        <div className="field flex flex-col w-[49%]">
                            <label htmlFor="qty" className=" font-bold">
                                Quantity
                            </label>
                            <input id="qty" placeholder="Quantity" onChange={(e) => onInputChange(e, 'status')} required autoFocus className={classNames({ 'p-invalid': submitted && !product.name}, 'outline-primary border-border rounded-md my-2 p-2 pl-6 border text-grey text-md hover:shadow-md focus:shadow-md outline-none w-full')} />
                            {submitted && !product.name && <small className="p-error mb-2">Name is required.</small>}
                        </div>

                    <div id className="flex flex-row w-full gap-2">
                        <div className="w-40  pl-2">
                                <div onClick={addRowTable} className="p-2 border-black border w-fit bg-black rounded-full shadow  mt-2 cursor-pointer transition delay-150 duration-300 ease-in-out text-white font-bold"><BsPlusLg/></div>
                        </div>
                    </div>
                    <div>
                        <table className=" border-spacing-x-8">
                            <thead>
                                <tr>
                                    <th className="p-2 ">Price</th>
                                    <th className="p-2">Weight</th>
                                    <th className="p-2">Size</th>
                                    <th className="p-2">Length</th>
                                    <th className="p-2">Color</th>
                                    <th className="p-2">Quantity</th>
                                    <th className="p-2">Image</th>
                                </tr>
                            </thead>
                            <tbody>
                                <TableRow
                                    rows={rows}
                                    onPriceChange={(e) =>  onInputChange(e, 'price')} 
                                    onCatChange={onCategoryChange}
                                    onChange={(e) =>  onInputChange(e, 'price')} 
                                    removeRow={tableRowRemove}
                                />
                            </tbody>
                        </table>
                    </div>
                 
                    <div className="field flex flex-col w-full">
                        <label htmlFor="description" className="font-bold">
                            Description
                        </label>
                        <textarea placeholder="Describe the product" className=" border-border rounded-md h-24 my-2 p-2 pl-6 border text-grey text-md hover:shadow-md focus:shadow-md outline-none w-full" id="description" onChange={(e) => onInputChange(e, 'description')} required/>
                    </div>
                </form>
                </div>
                <div className={simple ? "flex flex-wrap w-[70%] m-auto gap-4 h-[450px]" :" hidden"}>
                <form className="w-full">
                    <div className="field mt-5 flex flex-col w-full">
                        <label htmlFor="name" className=" font-bold">
                            Name
                        </label>
                        <input id="name" value={product.name} placeholder="Enter the product name"  onChange={(e) => onInputChange(e, 'name')} required autoFocus className={classNames({ 'p-invalid': submitted && !product.name}, 'border-border rounded-md my-2 p-2 pl-6 border text-grey text-md hover:shadow-md focus:shadow-md outline-none w-full')} />
                        {submitted && !product.name && <small className="p-error mb-2">Name is required.</small>}
                    </div> 
                    <div className="field flex flex-col w-[49%]">
                            <label htmlFor="category" className="font-bold">
                                Category
                            </label>
                            <select  onChange={(e) => onInputChange(e, 'category')} className="border-border rounded-md my-2 p-2 pl-6 border text-grey text-md hover:shadow-md focus:shadow-md outline-none w-full">
                                <option className="hover:bg-primary" onChange={onCategoryChange} >Tool</option>
                                <option className="hover:bg-primary" onChange={onCategoryChange} >Vegetables</option>
                                <option className="hover:bg-primary" onChange={onCategoryChange} >Cash crops</option>
                                <option onChange={onCategoryChange} >Poultry</option>
                                <option onChange={onCategoryChange} >Fish</option>
                                <option onChange={onCategoryChange} >Livestocks</option>
                            </select>
                        </div>

                        <div className="field flex flex-col w-[49%]">
                            <label htmlFor="qty" className=" font-bold">
                                Quantity
                            </label>
                            <input id="qty" placeholder="Quantity"  onChange={(e) => onInputChange(e, 'status')} required autoFocus className={classNames({ 'p-invalid': submitted && !product.name},  'border-border outline-primary rounded-md my-2 p-2 pl-6 border text-grey text-md hover:shadow-md focus:shadow-md outline-none w-full')} />
                            {submitted && !product.name && <small className="p-error mb-2">Name is required.</small>}
                        </div>

                      <div className="field flex flex-col w-[49%]">
                            <label htmlFor="price" className="font-bold">
                                Price
                            </label>
                            <input id="price" placeholder="Product price" className="border-border pl-6 rounded-md my-2 p-2  border text-grey text-md hover:shadow-md focus:shadow-md outline-none w-full" onChange={(e) =>  onInputChange(e, 'price')} />
                        </div>
                      
                      <div className="field flex flex-col w-[49%]">
                            <label htmlFor="img" className="font-bold">
                                Image
                            </label>
                            <input id="img" onChange={(e) => onInputChange(e, 'image')} type="file" placeholder="Optional" className="border-border rounded-md my-2 p-2  border text-grey text-md hover:shadow-md focus:shadow-md outline-none w-full" />
                        </div>

                      <div className="field flex flex-col w-full">
                            <label htmlFor="size" className="font-bold">
                                Description
                            </label>
                            <textarea id="size" placeholder="Describe product here..." className="border-border h-20 rounded-md my-2 p-2 border text-grey text-md hover:shadow-md focus:shadow-md outline-none w-full" onChange={(e) => onInputNumberChange(e, 'price')} />
                        </div>
                    
                </form>
                    </div>
            </Dialog>

            <Dialog visible={editDialog} style={{ width: '50rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Pay Book"  modal footer={productDialogFooter} className="p-fluid text-createText" onHide={hideDialog}>
                {product.car && <img src={`${product.car}`} alt={product.car} className="w-[30%] h-[50%] rounded-md block m-auto pb-3" />}
                  <div className="flex flex-wrap gap-4">
                    <div className="field flex flex-col w-full">
                        <label htmlFor="name" className=" font-bold">
                            Name
                        </label>
                        <input id="name" value={product.name} placeholder="Enter the product name"  onChange={(e) => onInputChange(e, 'name')} required autoFocus className={classNames({ 'p-invalid': submitted && !product.name}, 'mt-1 border pb-5 text-grey w-full text-md hover:shadow-md focus:shadow-md border-inputB rounded-md outline-none w-full h-10 w-full border border-border rounded-md my-2 pl-6 p-2')} />
                        {submitted && !product.name && <small className="p-error mb-2">Name is required.</small>}
                    </div>
                    <div className="field flex flex-col w-[48%]">
                        <label htmlFor="qty" className=" font-bold">
                            Quantity
                        </label>
                        <input id="qty" placeholder="Optional"  onChange={(e) => onInputChange(e, 'status')} required autoFocus className={classNames({ 'p-invalid': submitted && !product.name}, ' outline-primary w-full border border-border rounded-md my-2 p-2 pl-6 ')} />
                        {submitted && !product.name && <small className="p-error mb-2">Name is required.</small>}
                    </div>
                      <div className="field flex flex-col w-[48%]">
                            <label htmlFor="price" className="font-bold">
                                Price
                            </label>
                            <input id="price" placeholder="Product price" className="w-full border border-border rounded-md my-2 p-2 pl-6" onChange={(e) => onInputChange(e, 'price')} />
                        </div>

                        <div className="field flex flex-col w-[48%]">
                            <label htmlFor="category" className="font-bold">
                                Category
                            </label>
                            <select className="w-full border border-border rounded-md my-2 p-2 pl-6">
                                <option onChange={onCategoryChange} >Tool</option>
                                <option onChange={onCategoryChange} >Vegetables</option>
                                <option onChange={onCategoryChange} >Cash crops</option>
                                <option onChange={onCategoryChange} >Poultry</option>
                                <option onChange={onCategoryChange} >Fish</option>
                                <option onChange={onCategoryChange} >Livestocks</option>
                            </select>
                        </div>
                      <div className="field flex flex-col w-[48%]">
                            <label htmlFor="img" className="font-bold">
                                Images
                            </label>
                            <input id="img" type="file" placeholder="Optional" className="w-full border border-border rounded-md my-2 p-2 pl-6" />
                        </div>
                         <div className="field flex flex-col w-full">
                        <label htmlFor="description" className="font-bold">
                            Description
                        </label>
                        <textarea placeholder="Describe the product" className=" 'w-full p-2 pl-6 border border-border rounded-md my-2 p-4'" id="description" onChange={(e) => onInputChange(e, 'description')} required/>
                    </div>
                </div>
            </Dialog>

            <Dialog visible={deleteProductDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deleteProductDialogFooter} onHide={hideDeleteProductDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    {product && (
                        <span>
                            Are you sure you want to cancel <b>{product.name}</b>?
                        </span>
                    )}
                </div>
            </Dialog>

            <Dialog visible={deleteProductsDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deleteProductsDialogFooter} onHide={hideDeleteProductsDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    {product && <span>Are you sure you want to cancel the book?</span>}
                </div>
            </Dialog>
        </div>
    );
}
        