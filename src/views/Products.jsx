import AppNavbar from '../partials/navBar/AppNavbar';
import { EcommercenavLinks, products } from '../constants/objects';
import LandingFooter from '../partials/footer/LandingFooter';
import { useState, useEffect, useRef } from 'react';
import { BsArrowDown, BsArrowRightCircle, BsCheck, BsCircleFill, BsEye, BsFilter, BsPencil, BsSearch, BsStar, BsStarFill, BsTrash2 } from 'react-icons/bs';
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; // Adjust the import path
import { deleteOrders, setOrders } from '../redux/feature/orderSlice';
import AddProductModal from './ecommerce/products/addProduct';
import { deleteProduct, getProductByFarmer } from '../redux/feature/productSlice';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import EditProductModal from './ecommerce/products/EditProdutc';
import Popup from './loader/popup';
import { deleteProd } from '../Utils/api/productApi';
import { NODE_APP_BASE_URL } from '../Utils';

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
	  <div
		className={className}
		style={{ ...style, display: "block", background: "gray", borderRadius: "12px" }}
		onClick={onClick}
	  />
	);
  }
  
  function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
	  <div
		className={className}
		style={{ ...style, display: "block", background: "gray", borderRadius: "12px"  }}
		onClick={onClick}
	  />
	);
  }

export default function Products() {
    const dispatch = useDispatch(); 
    const dt = useRef(null);
    const orders = useSelector(state => state.orders.orders);
    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 7;
    const [selectedOrders, setSelectedOrders] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState({});
    const [notification, setNotification] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [modalEditVisible, setModalEditVisible] = useState(false);
    const [modalViewVisible, setModalViewVisible] = useState(false);
    const [currentOrder, setCurrentOrder] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);
    const [popupVisible, setPopupVisible] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    // const fetchProducts = async () => {
    //     const response = await dispatch(getProduct());
    //     console.log("Product fetch: ",response.payload.data)
    // };
	
    const closePopup = () => {
        setPopupVisible(false);
     };

    useEffect(() => {
		const fetchProducts = async () => {
			const response = await dispatch(getProductByFarmer());
			console.log("Farmer product", response)
			let unSortProducts = response?.payload?.data?.data
			// Correct: This creates a new array and sorts it
			const sortedProducts = [...unSortProducts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
			console.log("Product fetch: ",sortedProducts)
			setProducts(sortedProducts)
		};
        // Populate products initially (you can replace this with an API call)
        fetchProducts() 
    }, [dispatch]);
    
    const filteredOrders = products.filter(order =>
        order.name && order.name.toLowerCase().includes(searchQuery ? searchQuery.toLowerCase() : '')
    );

    const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
    const indexOfLastOrder = currentPage * itemsPerPage;
    const indexOfFirstOrder = indexOfLastOrder - itemsPerPage;
    const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);

    const handleSelectOrder = (id) => {
        setSelectedOrders(prevSelected =>
            prevSelected.includes(id)
                ? prevSelected.filter(orderId => orderId !== id)
                : [...prevSelected, id]
        );
    };

	const handleSelectedProduct = (product) => {
		setSelectedProduct(product)
		setModalViewVisible(true)
		console.log(selectedProduct)
	}

	const handleEditProduct = (product) => {
		setSelectedProduct(product)
		setModalViewVisible(false)
		setModalEditVisible(true)
		console.log(selectedProduct)
	}

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

	const StockStatus = ({ statusValue }) => {
		// Determine stock status
		const getStockStatus = () => {
			if (statusValue === 'InStock' ) {
				return { color: '-green' }; // More than 5 is in stock
			} else if (statusValue === 'LowStock' ) {
				return { color: '-yellow' }; // Between 1 and 5 is low stock
			} else {
				return {  color: '-red' }; // 0 is out of stock
			}
		};
	
		const { color } = getStockStatus();
	
		return (
			<div className={`flex gap-1 rounded-full text-[11px] px-4 w-fit justify-center align-middle text${color}-600 bg${color}-200`}>
				
				<p>
					{statusValue}
				</p>
			</div>
		);
	};

    const exportCSV = () => {
        dt.current.exportCSV();
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleDeleteOrder = () => {
		console.log(selectedOrders)
        if (selectedOrders.length > 0) {
            if (window.confirm(`Are you sure you want to delete the selected orders?`)) {
                const response = deleteProd(selectedOrders);
				console.log(response)
				let message 
				if(response)
					message = "product deleted sucessfully"; // Adjust based on your actual response structure
				setPopupMessage(message); // Set the message
		   
				setPopupVisible(true); // Show the popup
				
				// Hide the popup after 3 seconds
				setTimeout(() => {
					setPopupVisible(false);
				}, 3000);

				useEffect(() => {},[3000])
                // setNotification(`Orders deleted successfully.`);
                // setSelectedOrders([]);
                // setTimeout(() => {
                //     setNotification('');
                // }, 3000);
            }
        }
    };

	
	const farmerSettings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll:1,
   		nextArrow: <SampleNextArrow />,
    	prevArrow: <SamplePrevArrow />,
	    responsive: [
	      {
	        breakpoint: 1024,
	        settings: {
	          slidesToShow: 3,
	          slidesToScroll: 1,
	          infinite: false,
	          dots: false
	        }
	      },
	      {
	        breakpoint: 600,
	        settings: {
	          slidesToShow: 2,
	          slidesToScroll: 1,
	          initialSlide: 2
	        }
	      },
	      {
	        breakpoint: 480,
	        settings: {
	          slidesToShow: 1,
	          slidesToScroll: 1
	        }
	      }
	    ]
	};

    const navigate = useNavigate();

	return(
		<>
		<div className='pt-4 h-screen bg-bg_dash'>
			{notification && (
				<div className="bg-green-500 text-white p-3 rounded-lg mb-4">
					{notification}
				</div>
			)}
			<p className="text-2xl text-green-700 pb-4 font-bold">Your products</p>
			<div className='bg-white px-2 py-1 rounded-lg'>
				<div className='flex flex-col md:flex-row justify-between'>
					<div className='flex text-sm m-4 w-full md:w-fit justify-between border-2 h-10 rounded-full text-gray-400'>
						<div className='text-gray-400 pl-4'><BsFilter className='my-3'/></div>
						<input
							type='text'
							placeholder='Search for requests...'
							className='outline-none p-2 bg-transparent'
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
						/>
						<div className='text-white rounded-r-full px-4 w-full bg-primary border-l border-x-gray-200 cursor-pointer'>
							<BsSearch className='my-3' />
						</div>
					</div>
					<div className='m-4 flex gap-4'>
						<button 
							onClick={() => setModalVisible(true)}
							className={`bg-primary text-white rounded p-2 px-4 font-bold`}
						>
							Add
						</button>
						<button 
							onClick={handleDeleteOrder}
							disabled={selectedOrders.length === 0}
							className={`bg-red-500 text-white rounded p-2 px-4 font-bold ${selectedOrders.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
						>
							Delete
						</button>
					</div>
				</div>
					<div className='overflow-x-auto'>
						<table className='min-w-full' ref={dt}>
							<thead className='text-xs text-left text-gray-500 font-medium'>
								<tr>
									<th className='pl-4 rounded-ss-lg bg-gray-200'>
										<div className='text-white bg-white border-gray-300 w-4 h-4 rounded border'>-</div>
									</th>
									<th className='flex py-4 bg-gray-200 gap-4'>
										<p>Order#</p>
										<div><BsArrowDown size={18} className='font-bold text-primary' /></div>
									</th>
									<th className='bg-gray-200'>Product</th>
									<th className='bg-gray-200'>Category</th>
									<th className='bg-gray-200'>Rating</th>
									<th className='bg-gray-200'>Status</th>
									<th className='bg-gray-200'>Price</th>
									<th className='bg-gray-200'>Order Date</th>
									<th className='bg-gray-200'>Action</th>
								</tr>
							</thead>
								
							{loading ? (
								<tbody className='text-left'>
									<tr className='p-2'>
										<td className='m-2'>
											<div className='p-4 rounded-lg bg-gray-200 animate-pulse'></div>
										</td>
										<td className='m-2'>
											<div className='p-4 rounded-lg bg-gray-200 animate-pulse'></div>
										</td>
										<td className='m-2'>
											<div className='p-4 rounded-lg bg-gray-200 animate-pulse'></div>
										</td>
										<td className='m-2'>
											<div className='p-4 rounded-lg bg-gray-200 animate-pulse'></div>
										</td>
										<td className='m-2'>
											<div className='p-4 rounded-lg bg-gray-200 animate-pulse'></div>
										</td>
										<td className='m-2'>
											<div className='p-4 rounded-lg bg-gray-200 animate-pulse'></div>
										</td>
										<td className='m-2'>
											<div className='p-4 rounded-lg bg-gray-200 animate-pulse'></div>
										</td>
										<td className='m-2'>
											<div className='p-4 rounded-lg bg-gray-200 animate-pulse'></div>
										</td>
										<td className='m-2'>
											<div className='p-4 rounded-lg bg-gray-200 animate-pulse'></div>
										</td>
									</tr>
								</tbody>
							) : (
							<tbody className='text-left'>
								{currentOrders.length === 0 ? (
									<tr>
										<td colSpan="9" className="text-center py-4">
											<p className="text-gray-500">No product found.</p>
										</td>
									</tr>
								) : (
									currentOrders.map((product, index) => (
										<tr key={index} className={`${index % 2 !== 0 ? 'bg-gray-50' : ''} text-sm p-2`}>
											<td className='p-4 py-6'>
												<div
													onClick={() => handleSelectOrder(product._id)}
													className={`${selectedOrders.includes(product._id) ? 'bg-primary' : 'bg-white'} text-white text-center cursor-pointer border-gray-300 w-4 h-4 rounded border`}
												>
													<BsCheck />
												</div>
											</td>
											<td>#{product.id}</td>
											<td>
												<div className='flex gap-2'>
													<img src={`${NODE_APP_BASE_URL}/${product.images[0]}`} alt={`${product.name} image`} className='w-8 h-8 rounded-full' />
													<p className='text-md p-2'>{product.name}</p>
												</div>
											</td>
											<td>{product.category.name}</td>
											<td >
												<div className="flex text-yellow-500">
													{[...Array(product.rate)].map((_, index) => (
														<BsStarFill/>
													))}
													{[...Array(5 - product.rate)].map((_, index) => (
														<BsStar/>
													))}
			
												</div>	
											</td>
											<td>
												<StockStatus statusValue={product.status} />
											</td>
											<td>{product.priceBundles[0] ? product.priceBundles[0].price : 1000} XAF</td>
											<td>{ new Date(product.createdAt).toISOString().split('T')[0]}</td>
											<td className='flex gap-2'>
												
													<div
														onClick={() => handleSelectedProduct(product)}
														className='text-white w-fit bg-green-500 p-2 px-3 my-3 cursor-pointer rounded-full'
														title="view product"
													>
														<BsEye size={18} className='my-1' />
													</div>
												
                                                    <div
                                                        onClick={() => handleEditProduct(product)}
                                                        className='text-white w-fit bg-orange-500 p-2 px-3 my-3 cursor-pointer rounded-full'
                                                        title="Update product"
                                                    >
                                                        <BsPencil size={18} className='my-1' />
                                                    </div>
											</td>
										</tr>
									))
								)}
							
							</tbody>
							)}
						</table>
					</div>
				<div className='flex flex-col md:flex-row justify-center py-4 border-t gap-4 text-sm mt-4'>
					<button
						onClick={handlePreviousPage}
						disabled={currentPage === 1}
						className='px-4 py-2 bg-primary text-white rounded-s-lg disabled:opacity-50'
					>
						Prev
					</button>
					<span className='self-center'>
						Page {currentPage} of {totalPages}
					</span>
					<button
						onClick={handleNextPage}
						disabled={currentPage === totalPages}
						className='px-4 py-2 bg-primary text-white rounded-e-lg disabled:opacity-50'
					>
						Next
					</button>
				</div>
			</div>

			
			
            <AddProductModal isOpen={modalVisible} onClose={() => setModalVisible(false)} />
            <EditProductModal isOpen={modalEditVisible} onClose={() => setModalEditVisible(false)} product={selectedProduct} />
			{modalViewVisible && (
					<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
					<div className="bg-white rounded-lg p-6 h-[650px] w-[80%] md:w-[80%]">
						<div className='flex justify-end'>
							<p onClick={() => setModalViewVisible(false)} className='cursor-pointer'>
								<FaTimes/>
							</p>
							
						</div>
						<h2 className="text-xl font-bold">Product Details</h2>
						{selectedProduct && (
							<div className='flex gap-2'>
								<div className='w-1/2'>
									<div className='p-4'>
										<Slider {...farmerSettings} className="w-full h-64">
											{
												selectedProduct.images?.map((item, index) => (
													<img key={index} src={`${NODE_APP_BASE_URL}/${item}`} alt='text' className='w-full h-64 rounded-lg' />
												))
											}
										</Slider>
									</div>
									<div className=' w-full h-[250px] overflow-y-auto'>
										<table className='w-full'>
											<thead className='text-xs text-left text-gray-500 font-medium'>
												<th	className='bg-gray-200 pl-4  p-2 rounded-ss-md'>Price</th>
												<th className='bg-gray-200 p-2 '>Unit</th>
												<th className='bg-gray-200 rounded-se-md p-2 '>Quantity</th>
											</thead>
											<tbody className=' '>
												{
													selectedProduct.priceBundles?.map((item, index) => (
														<>
															<tr className={`${index % 2 !== 0 ? 'bg-gray-50' : ''} text-sm  border`}>
																<td className='p-2 border'>{item.price}</td>
																<td className='p-2 border'>{item.measurementUnit}</td>
																<td className='p-2 border'>{item.quantity}</td>
															</tr>
														</>
													))
												}
											</tbody>
										</table>
									</div>
								</div>
								<div className='p-4  ml-2 rounded-md w-1/2'>
									<p className='font-bold'>{selectedProduct.name.toUpperCase()}</p>
									
									<div className="flex my-2 text-yellow-500">
													{[...Array(selectedProduct.rate)].map((_, index) => (
														<BsStarFill/>
													))}
													{[...Array(5 - selectedProduct.rate)].map((_, index) => (
														<BsStar/>
													))}
			
												</div>
									<p className=' p-2 bg-gray-100 rounded-md my-2	'>{selectedProduct.description}</p>
									<p className='bg-green-500 text-white font-semibold p-1 px-2 rounded-md text-sm'>{selectedProduct.status}</p>
									<p className='my-2'>Category : <span>{selectedProduct.category.name}</span></p>
									<div
                                        onClick={() => handleEditProduct(selectedProduct)}
                                        className='text-orange-500  w-fit ring-1 ring-orange-500 p-2 px-3 my-3 cursor-pointer rounded-full'
                                        title="Update product"
                                    >
                                        <BsPencil size={18} className='my-1' />
                                    </div>
								</div>
							</div>
						)}
					</div>
				</div>
			)}
		</div>
               <Popup
                message={popupMessage} 
                isVisible={popupVisible} 
                onClose={closePopup} 
            />
		</>
	)
}
