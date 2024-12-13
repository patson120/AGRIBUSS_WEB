import React, {useState} from 'react'
import { deals } from '../../Utils/Body.js'
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'

function DealCarousel() {
    const [cashProducts, setCashProducts] = useState(deals)
    const previousBG = () => {
        let arr = [...cashProducts]
        let res = false;
        var currentIndex;
        arr.forEach((item, index) => {
            if(item.active === true) 
            {
                currentIndex = index
                item.active = false
            }
        })
        const previousIndex = currentIndex === 0 ? image.length - 1 : --currentIndex;
        arr[previousIndex].active = true;
        setCashProducts(arr)
    }
    const checkActive=(value)=>{
        const arr = [...cashProducts]
        let res = false;
        arr.forEach((item,index)=>{
          if(index==value){
              res = item.active
            }
        })
        return res;
      }
    const updateBG=()=>{
        let arr = [...cashProducts]
        let isActive = false;
        let activeIndex = -1;
        // check if no one is active
        arr.forEach((item,index)=>{
          if(item.active==true){
            isActive = true
          }
        })
    
         if(isActive==false){
          arr[0].active = true
         }else{
            // check for active index
            arr.forEach((item,index)=>{
              if(item.active===true){
                activeIndex = index;
              }
            })
            
            //assign next index active
            if(activeIndex>=0 && activeIndex<arr.length){
              arr[activeIndex].active = false
              activeIndex == arr.length-1 ? arr[0].active = true : arr[activeIndex+1].active = true;
            }else{
              arr[0].active = true;
            }
          }
          setCashProducts(arr);
      }
  return (
    <>
        <div className='p-4 rounded-md shadow absolute border group m-auto bg-white top-[152%] w-full'>
            <div className='flex flex-row items-center justify-between'>
                <div className='font-bold'>Exciting deals</div>
                <div>see more</div>
            </div>
            <div className="">
                {
                    cashProducts?.map((cash, index) => {
                        if(checkActive(index)) {
                            const cashProduct = cash.images
                        return (
                            <div className='mt-5 flex flex-row px-5 justify-between items-center'>
                                <div onClick={updateBG} className='group-hover:block hidden cursor-pointer pt-12 pl-2 w-8 h-32 bg-[#00000078]/30 text-white'>
                                    <BsChevronRight size={20} />
                                </div>
                                    {
                                      cashProduct?.map((product, index) => {
                                        return (
                                            <>
                                                <div className='transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none rounded-md hover:cursor-pointer w-[15vw]'>
                                                <div></div>
                                                  <div className='bg-[#58CD4D] absolute w-[20%] rounded-tl-md text-center text-white rounded-br-md'>{product.percentage}</div>
                                                    <img className='w-full h-[15vw]' src={product.src} 
                                                    alt={product.alt} />

                                                    <div className='mx-4 my-1 flex flex-row justify-between items-center'>
                                                      <div className='font-semibold text-[#58CD4D]'>{product.price}</div>
                                                       <div className='line-through text-gray-400'>{product.strikethrough}</div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                      })   
                                    }
                                   <div onClick={previousBG} className='bg-[#00000078]/30 absolute right-[2.5%] h-32 w-8 hidden cursor-pointer group-hover:block items-center text-white pt-12 px-2'>
                                        <BsChevronRight size={20} />
                                    </div>
                            </div>
                        )
                        }
                    })
                    
                }
            </div>
        </div>
    </>
  )
}

export default DealCarousel