import React from 'react'
import { food } from '../../Utils/Spices'
import { products } from '../../Utils/Body'

function BottomComponent() {
  return (
    <>
        <div className='mt-5  w-[97%] m-auto flex flex-row justify-between items-center'>
            <div className='font-bold w-[6%]'>For you</div>
            <div className='bg-[#696A6F94] mt-1 w-full h-[2px]'></div>
        </div>
        <div className='flex flex-row justify-between items-center w-[97%] m-auto'>
            {
                products[0].images?.map((item, index) => {
                    return (
                        <>
                         <img 
                         className='w-[15vw]'
                         src={item.src} 
                         alt={item.alt} srcset="" />
                        </>
                    )
                })
            }
        </div>
        <div className='bg-[#404040] font-bold text-white flex flex-row justify-between items-center p-8 '>
            <div className='uppercase'>Agri<span className='text-[#58CD4D]'>Buss</span></div>
            <div>Contact Us</div>
            <div>About Us</div>
            <div>Marketplace</div>
        </div>
    </>
  )
}

export default BottomComponent