import AppNavbar from '../partials/navBar/AppNavbar';
import { EcommercenavLinks, products } from '../constants/objects';
import LandingFooter from '../partials/footer/LandingFooter';
import { useState, useEffect, useRef } from 'react';
import { BsArrowDown, BsArrowRightCircle, BsCheck, BsCircleFill, BsEye, BsFilter, BsSearch, BsTrash2 } from 'react-icons/bs';
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; // Adjust the import path
import { deleteOrders, setOrders } from '../redux/feature/orderSlice';

export default function Products() {
    const dispatch = useDispatch();
    const dt = useRef(null);
    const orders = useSelector(state => state.orders.orders);
    
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 7;
    const [selectedOrders, setSelectedOrders] = useState([]);
    const [notification, setNotification] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [currentOrder, setCurrentOrder] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        // Populate orders initially (you can replace this with an API call)
        dispatch(setOrders(products)); // Initially set products as orders
    }, [dispatch]);
    
    const filteredOrders = orders.filter(order =>
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

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
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
        if (selectedOrders.length > 0) {
            if (window.confirm(`Are you sure you want to delete the selected orders?`)) {
                dispatch(deleteOrders(selectedOrders));
                setNotification(`Orders deleted successfully.`);
                setSelectedOrders([]);
                setTimeout(() => {
                    setNotification('');
                }, 3000);
            }
        }
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
			<p className="text-2xl text-green-700 pb-4 font-bold">Your transport requests</p>
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
							onClick={handleDeleteOrder}
							className={`bg-primary text-white rounded p-2 px-4 font-bold`}
						>
							Add
						</button>
						<button 
							onClick={handleDeleteOrder}
							disabled={selectedOrders.length === 0}
							className={`bg-red-500 text-white rounded p-2 px-4 font-bold ${selectedOrders.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
						>
							Cancel
						</button>
						<button 
							onClick={exportCSV}
							className={`bg-orange-500 text-white rounded p-2 px-4 font-bold`}
						>
							Export
						</button>
					</div>
				</div>
				{loading ? (
					<div className="flex justify-center py-6">
						<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
					</div>
				) : (
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
									<th className='bg-gray-200'>Shipping Address</th>
									<th className='bg-gray-200'>Farmer</th>
									<th className='bg-gray-200'>Status</th>
									<th className='bg-gray-200'>Price</th>
									<th className='bg-gray-200'>Order Date</th>
								</tr>
							</thead>
							<tbody className='text-left'>
								{currentOrders.length === 0 ? (
									<tr>
										<td colSpan="9" className="text-center py-4">
											<p className="text-gray-500">No request found.</p>
										</td>
									</tr>
								) : (
									currentOrders.map((product, index) => (
										<tr key={index} className={`${index % 2 !== 0 ? 'bg-gray-50' : ''} text-sm p-2`}>
											<td className='p-4 py-6'>
												<div
													onClick={() => handleSelectOrder(product.id)}
													className={`${selectedOrders.includes(product.id) ? 'bg-primary' : 'bg-white'} text-white text-center cursor-pointer border-gray-300 w-4 h-4 rounded border`}
												>
													<BsCheck />
												</div>
											</td>
											<td>#{product.id}</td>
											<td className='flex gap-2'>
												<img src={product.images[0]} alt={`${product.name} image`} className='w-6 h-6 rounded-full' />
												{product.name}
											</td>
											<td>Yaounde, Mokolo</td>
											<td className='flex gap-2'>
												<img src={product.user.image} alt={`${product.name} image`} className='w-6 h-6 rounded-full' />
												{product.user.name}
											</td>
											<td>
												<div className='flex gap-1 rounded-full text-[11px] px-4 w-fit justify-center align-middle text-orange-500 bg-orange-200'>
													<BsCircleFill size={8} className='my-1' />
													<p>Pending</p>
												</div>
											</td>
											<td>{product.price} XAF</td>
											<td>2024-08-23</td>
										</tr>
									))
								)}
							</tbody>
						</table>
					</div>
				)}
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
			{modalVisible && (
				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
					<FaTimes className='text-black cursor-pointer' onClick={() => setModalVisible(false)} />
					<div className="bg-white rounded-lg p-6 h-[650px] w-[80%] md:w-[50%]">
						<h2 className="text-xl font-bold">Order Details</h2>
						{currentOrder && (
							<div>
								<p><strong>Order ID:</strong> #{currentOrder.id}</p>
								<p><strong>Product Name:</strong> {currentOrder.name}</p>
								<p><strong>Shipping Address:</strong> Yaounde, Mokolo</p>
								<p><strong>Farmer:</strong> {currentOrder.user.name}</p>
								<p><strong>Status:</strong> Pending</p>
								<p><strong>Price:</strong> {currentOrder.price} XAF</p>
								<p><strong>Order Date:</strong> 2024-08-23</p>
							</div>
						)}
						<button
							onClick={() => setModalVisible(false)}
							className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
						>
							Close
						</button>
					</div>
				</div>
			)}
		</div>
		</>
	)
}