import React from 'react'
import HeaderCarousel from './userpage/HeaderCarousel'
import AfterCarouselCardContainer from './userpage/AfterCarouselCardContainer'
import ProductCarousel from './userpage/BodyCarousel'
import DealCarousel from './userpage/DealCarousel'
import BottomComponent from './userpage/BottomComponent'

function UserPage() {
  return (
    <>
        <HeaderCarousel />
        <AfterCarouselCardContainer />
        <ProductCarousel />
        <DealCarousel />
        <BottomComponent />
        <div></div>
    </>
  )
}

export default UserPage