import React, { useEffect, useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import { food, spices } from '../../Utils/Spices';
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'
// import { ChevronLeft, ChevronRight } from '@mui/icons-material';

function AfterCarouselCardContainer() {
    const [image, setImage] = useState(spices)
    const [foodStuff, setFoodStuff] = useState(food)
    const previousBG = () => {
        let arr = [...image]
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
        setImage(arr)
    }
    const checkActive=(value)=>{
        const arr = [...image]
        let res = false;
        arr.forEach((item,index)=>{
          if(index==value){
              res = item.active
            }
        })
        return res;
      }
    const updateFood = () => {
      let arr = [...foodStuff]
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
          setFoodStuff(arr);
    }
    const updateBG=()=>{
        let arr = [...image]
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
          setImage(arr);
      }
      useEffect(() => {
        var t = 0;
        var timeout = setInterval(()=>{
          updateFood()
          ++t;
          if(t==5){
            t=0;
            clearTimeout(timeout)
          }
        },1300)
    
        return ()=> clearTimeout(timeout)
    }, [foodStuff])
  return (
    <>
        <div className='h-fit top-[52%] p-4 flex flex-row  bg-gradient-to-b from-transparent to-bg_dash  absolute w-full justify-between items-end'>
            <div className='h-fit p-4 w-[70%] group rounded-md flex flex-row bg-white shadow gap-4'>
                <div className='w-[30%]'>
                    <div className='text-lg font-bold'>Your favorite spices guide</div>
                    <div className='text-md'>Discover new offers</div>
                </div>
              {
                image?.map((item, index) => {
                if(checkActive(index)) 
                {
                  const activeItemArray = item.arr
                   return (
                  <div className='flex flex-row items-center justify-between'>
                   <div onClick={updateBG} className=' group-hover:block absolute hidden pt-12 pr-2 w-8 h-32 bg-gray-100 opacity-75 text-gray-400'>
                      <BsChevronLeft  style={{fontSize: "30px"}} />
                    </div> 
                    {
                    activeItemArray?.map((list, index) => {
                      return (
                          <div className='flex items-center hover:bg_black cursor-pointer group flex-col w-[22%]'>
                                <img className='h-[20vh] w-[13vw]' src={list.src} alt={list.alt} srcset="" />
                                  <div className='w-[75%] text-center font-bold mt-2 rounded-md text-[#58CD4DC2] border-2 border-[#58CD4DC2]'>{list.price}</div>
                                  <div className='line-through text-gray-400 font-semibold'>{list.strikeThrough}</div>
                          </div>
                                )
                            })
                      }
                      <div onClick={previousBG} className='bg-gray-100 absolute right-[31.5%] h-32 w-8 hidden group-hover:block items-center text-gray-400 opacity-75 pt-12 px-2'>
                        <BsChevronRight size={20} />
                    </div> 
                    </div>
                   )                       
                }
                })
              }
            </div>
             <div className='w-[28%] flex flex-col items-center'>
                <div className='text-center font-bold w-full gap-4 p-4 bg-white rounded-t-md h-[25%]'>
                    <p className="text-black text-lg"> Welcome to AgriBuss</p>
                    <div className='mt-5 flex flex-row justify-between items-center'>
                    <button className='p-2 hover:bg-green-500 rounded-md w-[48%] text-white font-semibold bg-[#58CD4D]'><Link to="/register">To register</Link></button>  
                    <button className='p-2 hover:bg-nav rounded-md w-[48%] text-black font-semibold bg-[#58CD4D]/20'><Link to="/login">Sign in</Link></button>  
                    </div> 
                </div>
                <div className='text-white rounded-b-md p-4 bg-[#00000078] h-70% w-full'>
                  <div className="text-md font-bold">Discover the new offers</div>
                  {
                    foodStuff?.map((foodItem, index) => {
                      if(foodItem.active) {
                         const stuff = foodItem.arr
                        return (
                          <div className='flex flex-row justify-between mt-5 items-center'>
                            {
                              stuff?.map((item, index) => {
                                return (
                                  <>
                                    <div className='flex flex-col pb-4 justify-between items-center'>
                                      <img className='w-[12vw] h-[12vw] rounded-lg' src={item.src} alt={item.alt} />
                                        <div className='text-white mt-[-5vh] font-bold rounded-lg  text-center w-[75%] bg-[#58CD4D]'>
                                          {item.price}
                                        </div>

                                    </div>
                                  </>
                                )
                              })
                            }
                          </div>
                        )
                      }
                    })
                  }
                </div>
             </div>
        </div>
    </>
  )
}

export default AfterCarouselCardContainer