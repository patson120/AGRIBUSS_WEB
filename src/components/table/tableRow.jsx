
import {BsArrowBarUp,BsImageAlt,BsFillPencilFill, BsFillTrash3Fill,BsBoxArrowInUp, BsPlusLg} from 'react-icons/bs'


import React, {useState} from 'react'

export default function TableRow({rows, removeRow, onPriceChange, onChange, onCatChange}){
	return rows.map((data, index) => {
		const {price, weight, category, length, color, qty, image } = data;
		return(

                                <tr key={index}>
                                    <td>
                                         <input id="price"
                                            placeholder="Product price" 
                                            className="border-border rounded-md my-2 p-2  border text-grey text-md hover:shadow-md focus:shadow-md outline-none w-full" 
                                            onChange={onPriceChange}
                                            // {(e) =>  onInputChange(e, 'price')} 
                                        />
                                    </td>
                                    <td>
                                       <input id="weight" 
                                            placeholder="Optional" 
                                            className="border-border rounded-md my-2 p-2 border text-grey text-md hover:shadow-md focus:shadow-md outline-none w-full" 
                                            onChange={onChange}
                                            // {(e) => onInputNumberChange(e, 'price')}
                                        />
                                    </td>
                                    <td>
                                         <select className="border-border rounded-md my-2 p-2 pl-2 border text-grey text-md hover:shadow-md focus:shadow-md outline-none w-28">
                                            <option className="hover:bg-primary" onChange={onCatChange} >Large</option>
                                            <option className="hover:bg-primary" onChange={onCatChange} >Medium</option>
                                            <option className="hover:bg-primary" onChange={onCatChange} >Small</option>
                                        </select>
                                        {/*{onCategoryChange}*/}
                                    </td>
                                    <td>
                                         <input id="length" 
                                                placeholder="Optonal" 
                                                className="border-border rounded-md my-2 p-2 border text-grey text-md hover:shadow-md focus:shadow-md outline-none w-full"
                                                onChange={onCatChange}
                                                // {(e) => onInputNumberChange(e, 'price')} 
                                        />
                                    </td>
                                    <td>
                                         <input id="color" 
                                                placeholder="Optional" 
                                                className="border-border rounded-md my-2 p-2 border text-grey text-md hover:shadow-md focus:shadow-md outline-none w-full" 
                                                onChange={onChange}
                                                // {(e) => onInputNumberChange(e, 'price')} 
                                        />
                                    </td>
                                    <td>
                                         <input id="qty" 
                                            placeholder="per unit" 
                                            className="border-border rounded-md my-2 p-2 border text-grey text-md hover:shadow-md focus:shadow-md outline-none w-full" 
                                            onChange={onChange}
                                            // {(e) => onInputNumberChange(e, 'price')} 
                                        />
                                    </td>
                                    <td>
                                         <input id="image" 
                                            type="file" placeholder="Product price" 
                                            className="border-border rounded-md my-2 p-2  border text-grey text-md hover:shadow-md focus:shadow-md outline-none w-full" 
                                            onChange={onChange}
                                            // {(e) =>  onInputChange(e, 'price')}
                                        />
                                    </td>
                                    <td>
                                    	<div className="p-2 ml-4 rounded-full border border-black text-black" onClick={() =>  removeRow(index)}>
                                    		 <BsFillTrash3Fill/>
                                    	</div>
                                    </td>
                                </tr>
		)
	})
}