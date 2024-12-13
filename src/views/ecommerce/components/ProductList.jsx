import React from 'react';
import { BsFilter, BsSearch, BsStar, BsStarFill } from 'react-icons/bs';
import { products } from '../../../constants/objects';
import { Link } from 'react-router-dom';

const ProductList = () => {
  // const products = [
  //   { name: "FRESHLY HARVESTED CARROTS", rate: 5, price: 250, unit: "kg", minBought:1, sold: "18 sold" },
  //   { name: "WESTERN GREEN CABBAGE", rate:3, price: 100, unit: "head", minBought:4, sold: "50 sold" },
  //   { name: "WESTERN GREEN CABBAGE", rate:3, price: 100, unit: "head", minBought:4, sold: "50 sold" },
  //   { name: "WESTERN GREEN CABBAGE", rate:3, price: 100, unit: "head", minBought:4, sold: "50 sold" },
  //   { name: "WESTERN GREEN CABBAGE", rate:3, price: 100, unit: "head", minBought:4, sold: "50 sold" },
  //   // Add more products here
  // ];

  return (
    <div className="h-full">
      <div className='flex text-sm py-2 border-b-2 border-lightgrey justify-between'>
        <h2 className="text-xl font-bold mb-4">Product</h2>
        <div className=' flex text-sm w-fit justify-between border-2 h-10 rounded-full text-gray-400'>
          <div className='text-gray-400 pl-4'><BsFilter className='my-3'/></div>
            <input
              type='text'
              placeholder='Seacrh orders...'
              className='outline-none p-2 bg-transparent'
            />
            <div className='text-white rounded-r-full px-4 w-full bg-primary border-l border-x-gray-200 cursor-pointer'>
              <BsSearch className='my-3'/>
            </div>
        </div>
        <div className='flex rounded-full px-2 h-fit bg-gray-100 align-middle justify-center'>
          <p className='text-gray-500 my-2'>Sort by: </p>
          <select className=' px-2 bg-transparent py-0 h-8 outline-none'>
            <option>Top products</option>
            <option>All</option>
          </select>
        </div>
      </div>
      <div className='h-[620px] px-2 py-2 overflow-y-auto'>
      {products.map((product, index) => (
        <div key={index} className="flex justify-between mb-4 p-4 bg-white rounded-lg shadow">
          <div className="flex items-center">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-32 h-32 rounded-md"
            />
            <div className="ml-4 self-start ">
            <Link to={`/market/product/${product.id}`}>
            <h3 className="text-lg cursor-pointer hover:underline font-semibold">{product.name}</h3>
            </Link>
              <div className="flex text-yellow-500">
													
										{[...Array(product.rate)].map((_, index) => (
											<BsStarFill/>
										))}
										{[...Array(5 - product.rate)].map((_, index) => (
											<BsStar/>
										))}

							</div>
              <p className="text-red-500 py-1"> {product.price} XAF<span className='text-gray-600'> per {product.minBought} {product.unit}</span></p>
              <p className="text-gray-700 text-sm">{product.sold}</p>
            </div>
          </div>
          <div className="flex flex-col self-center">
            <button className="bg-black w-40 hover:scale-105 text-white px-4 py-2 rounded-lg mb-2">Buy Now</button>
            <button className="border w-40 border-primary hover:scale-105 text-primary px-4 py-2 rounded-lg">
              Add to cart
            </button>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default ProductList;
