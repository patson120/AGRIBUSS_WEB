import React, { useEffect, useState } from 'react'
import { carousel } from '../../constants/CarouselImages'
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
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'
import { Outlet, Link } from "react-router-dom";
import { food, spices } from '../../Utils/Spices';


function HeaderCarousel() {
    // const [image, setImage] = useState(spices)
    const [foodStuff, setFoodStuff] = useState(food)
    const [image, setImage] = useState(carousel)
    useEffect(() => {
        var t = 0;
        var timeout = setInterval(()=>{
          updateBG()
          ++t;
          if(t==5){
            t=0;
            clearTimeout(timeout)
        //     storedInformation ?
        //    navigation.navigate("Home") :
        //     navigation.navigate("Login")
          }
        },7000)
    
        return ()=> clearTimeout(timeout)
    }, [image])
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
        <div className='group h-full'>
            
            {
                carousel?.map((image, index) => {
                    if(checkActive(index)) {
                    return (
                        <>
                        <div style={{backgroundImage: `url(${image.src})`}}  className='text-white bg-cover bg-center bg-gradient-to-b h-[500px] from-black/80 to-black/20'>
                        <div className=" p-8 bg-gradient-to-b from-transparent to-bg_dash h-full">
                        <div className='ml-7 text-2xl mb-2'>{image.title}</div>
                        <div className='ml-7 text-sm w-[16%]'>{image.sub}</div>
                         <button className='p-2 ml-7 mt-5 text-sm font-bold  w-[15vw] bg-black 
                         rounded-xl'>Get Started</button>
                         </div>
                        </div>

                        
                        </>
                    )}
                })
            }
            <div className='flex w-full flex-row text-white absolute top-[30%] justify-between items-center'>
                <div className='text-gray-200/0 group-hover:text-white' onClick={previousBG}> <BsChevronLeft style={{fontSize: "50px"}} /> </div>
                <div className='text-gray-200/0 group-hover:text-white' onClick={updateBG}> <BsChevronRight style={{fontSize: "50px"}} /> </div>
            </div>
        </div>
    </>
  )
}

export default HeaderCarousel