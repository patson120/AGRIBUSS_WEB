

import {BsArrowBarUp,BsImageAlt,BsFillPencilFill, BsFillTrash3Fill,BsBoxArrowInUp, BsPlusLg, BsStarFill, BsStar, BsEye, BsPencil} from 'react-icons/bs'

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
import {productInfo } from '../../Utils/tableData.jsx'
import {useSelector, useDispatch} from 'react-redux'
import {getProduct, allProducts} from '../../redux/feature/productSlice.js'
import { /*products,*/ reviews } from '../../constants/objects.jsx';
import { useNavigate } from 'react-router-dom';
import AddProductModal from '../../views/ecommerce/products/addProduct.jsx';
import Slider from 'react-slick/lib/slider.js';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { getProd } from '../../Utils/api/productApi.js';

export default function ManageTable() {

    const dispatch = useDispatch() 
    // const products = useSelector(productInfo)
    // const [products, setProducts] = useState(productInfo)
    // console.log(products)

    let emptyProduct = {
        id: null,
        name: '',
        image: img5,
        desc: '',
        category: null,
        price: 0,
        quantity: 0,
        status: 'Instock',
        weight: "null"
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [deleteProductDialog, setDeleteProductDialog] = useState(false);
    const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
    const [product, setProduct] = useState(emptyProduct);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [showEditProduct, setShowEditProduct] = useState(false);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);
    const navigate = useNavigate()
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const response = await dispatch(getProduct());
        console.log(response)
        setProducts(response.data)
    };

    useEffect(() => {
        fetchProducts();
    }, []);


    const openNew = () => {
        setProduct(emptyProduct);
        setSubmitted(false);
    };


    const hideDeleteProductDialog = () => {
        setDeleteProductDialog(false);
    };

    const hideDeleteProductsDialog = () => {
        setDeleteProductsDialog(false);
    };

    const editProduct = (product) => {
        setShowEditProduct(true)
        setEditDialog(true);
    };

    const deleteProduct = () => {

        setDeleteProductDialog(false);
        setProduct(emptyProduct);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
    };


    const exportCSV = () => {
        dt.current.exportCSV();
    };

    const confirmDeleteSelected = () => {
        setDeleteProductsDialog(true);
    };

    const deleteSelectedProducts = () => {
        let _products = products.filter((val) => !selectedProducts.includes(val));
        setDeleteProductsDialog(false);
        setSelectedProducts(null);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 1000 });
    };


    const leftToolbarTemplate = () => {
        return (
            <div className="flex flex-wrap gap-2">
                <Button label="New" icon={<BsPlusLg className="mr-2" size={16}/>} className="h-8 pl-1 bg-primary" severity="success" onClick={() => setIsModalOpen(true)}  />
                <Button label="Delete" icon={<BsFillTrash3Fill className="mr-2" size={16}/>}  className="h-8 pl-1"  severity="danger" onClick={confirmDeleteSelected} disabled={!selectedProducts || !selectedProducts.length} />
            </div>
        );
    };

    const rightToolbarTemplate = () => {
        return <Button label="Export"  severity="warning"  icon={<BsBoxArrowInUp className="mr-2 " size={18}	/>} className="p-1 px-2 bg-orange-400 border-0" onClick={exportCSV} />;
    };

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button icon={<BsPencil size={20}/>} green rounded outlined  severity="success" className="mr-2 text-primary " onClick={() => editProduct(rowData)} />
            </React.Fragment> 
        );
    };



    const header = (
        <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
            <h4 className="m-0">Manage Products</h4>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" severity="success" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </span>
        </div>
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
    
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "lightgray", borderRadius: "12px" }}
            onClick={onClick}
        />
        );
    }
    
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "lightgray", borderRadius: "12px"  }}
            onClick={onClick}
        />
        );
    }

    const imageSettings = {
		
        dots: false,
        infinite: true,
        slidesToShow: 1,
        pauseOnHover: true,
   		nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 6000,
    };
    
    const onProductHide = () => {
        setSelectedProducts(false)
    }
    console.log(selectedProducts)
    const selectedProductContent = selectedProducts && (
        <Dialog visible={selectedProducts} style={{ width: '60rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} modal header="Product Details" className="p-fluid bg-gray-100 text-createText" onHide={onProductHide}>
            <div className="surface-card shadow-2 flex px-2 flex-row gap-4 border-round">
                    <div className="flex flex-col w-1/2 h-fit gap-2">
                        <Slider {...imageSettings} className="p-4 py-2">
                        {
                                selectedProducts[0].images?.map((item, index) => (
                                    <img src={item} alt='product image' className='w-full h-72 shadow-lg ring-1 ring-gray-300' />
                                ))
                        }
                            
                        </Slider> 
                        <div className='w-full'>
                            <p className='py-2 font-bold '>Price Bundles</p>
                            <table className='w-full text-left text-sm '>
                                <thead className='font-medium bg-gray-200 rounded-lg px-2 text-gray-500'>
                                    <th>Quantity</th>
                                    <th>Unit</th>
                                    <th>Size</th>
                                    <th>Price</th>
                                </thead>
                                <tbody className='text-sm'>
                                    <tr>
                                        <td>1</td>
                                        <td>Bunch</td>
                                        <td>
                                            <span className='bg-green-400 px-2 text-xs font-semibold text-white w-fit text-center rounded-md'>large</span>
                                        </td>
                                        <td>2500XAF</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Bunch</td>
                                        <td>
                                            <span className='bg-orange-500 px-2 text-xs font-semibold text-white w-fit text-center rounded-md'>medium</span>
                                        </td>
                                        <td>1500XAF</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Bunch</td>
                                        <td>
                                            <span className='bg-blue-400 px-2 text-xs font-semibold text-white w-fit text-center rounded-md'>xsall</span>
                                        </td>
                                        <td>1000XAF</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                <div className="w-1/2 align-items-center px-4 justify-content-between">

                    <span className="text-900 w-full pb-4 font-semibold text-2xl">{selectedProducts[0].name.toUpperCase()} </span>
                    <div className="flex py-2 text-yellow-500">
                                
                    {[...Array(selectedProducts[0].rate)].map((_, index) => (
                        <BsStarFill size={20}/>
                    ))}
                    {[...Array(5 - selectedProducts[0].rate)].map((_, index) => (
                        <BsStar size={20}/>
                    ))}

                    </div>
                            <table className='w-full text-left text-sm '>
                                <thead className='font-medium bg-gray-200 rounded-lg px-2 text-gray-500'>
                                    <th></th>
                                    <th></th>
                                </thead>
                                <tbody className='text-sm'>
                                    <tr>
                                        <td className='font-semibold'>Category :</td>
                                        <td>{selectedProducts[0].category}</td>
                                    </tr>
                                    <tr>
                                        <td className='font-semibold'>Description :</td>
                                        <td>{selectedProducts[0].description}</td>
                                    </tr>
                                    <tr>
                                        <td className='font-semibold'>Stock :</td>
                                        <td>                                            
                                            <span className='bg-green-400 px-2 text-xs font-semibold text-white w-fit text-center rounded-md'>{selectedProducts[0].status}</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        <div className='mt-4'>
                            <p className='text-lg font-semibold'>Reviews</p>
                            {
                                reviews?.map(item => (
                                    <div className='text-sm py-2'>
                                        <p className='font-semibold'>{item.name}</p>
                                        <div className='flex justify-between'>
                                            <p>{item.text}</p>
                                            <p className='text-xs text-gray-400'>{item.date}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                
                </div>
            </div>
        </Dialog>
);


    return (
        <div className=" overflow-x-auto mr-2 mt-4">
            <Toast ref={toast} />
            {selectedProductContent}
            <AddProductModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <div className="w-full">
                <Toolbar className="mb-4 p-2 border-0" left={leftToolbarTemplate} right={rightToolbarTemplate}></Toolbar>

                
					<DataTable
                        ref={dt} 
						value={products} 
                        selection={selectedProducts}
						sortMode="multiple" 
						onSelectionChange={(e) => setSelectedProducts(e.value)} 
						selectionMode="single"
						stateStorage="session" 
						stateKey="dt-state-demo-local"
						paginator
						rows={10}
						rowsPerPageOption={[3,6]}
						tableRecord={2}
						tableStyle={{ minWidth: '60rem' }}
						emptyMessage="No product found."
						metaKeySelection={true}
						 dragSelection
                         globalFilter={globalFilter} 
                         header={header}
					>

                        <Column selectionMode="multiple" exportable={false}></Column>
						<Column field="name" filter body={productBodyTemplate} showFilterMenu={false} filterField="name" header="Product" severity="success" sortField="name" sortable/>
						<Column field="caregory" filter body={categoryBodyTemplate} showFilterMenu={false} filterField="category" header="Category" severity="warning" sortField="category" sortable/>
						<Column field="price" filter body={priceBodyTemplate} showFilterMenu={false} filterField="price" header="Price" sortField="price" sortable/>
						<Column field="rate" filter body={rateBodyTemplate} showFilterMenu={false} filterField="rate" header="Review" sortField="rate" sortable/>
						<Column field="status" filter body={statusBodyTemplate} showFilterMenu={false} filterField="status" header="Status" sortField="status" sortable/>
						<Column field="date" filter body={dateBodyTemplate} showFilterMenu={false} filterField="date" header="Date" sortField="date" sortable/>
                        <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '5rem' }}/>
					</DataTable>
            </div>
            
            <Dialog visible={deleteProductDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deleteProductDialogFooter} onHide={hideDeleteProductDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    {product && (
                        <span>
                            Are you sure you want to delete <b>{product.name}</b>?
                        </span>
                    )}
                </div>
            </Dialog>

            <Dialog visible={deleteProductsDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deleteProductsDialogFooter} onHide={hideDeleteProductsDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    {product && <span>Are you sure you want to delete the selected products?</span>}
                </div>
            </Dialog>
        </div>
    );
}
        