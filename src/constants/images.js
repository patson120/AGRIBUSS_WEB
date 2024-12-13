
import slide2 from '../assets/images/c2.png'
import slide4 from '../assets/images/booking.png'
import slide1 from '../assets/images/heroF1.png'
import slide3 from '../assets/images/forum_bg.png'
import slide5 from '../assets/images/forum_bg1.png'

//ecommerce hero images
import ecoBG1 from '../assets/images/eBG.jpg'
import ecoBG2 from '../assets/images/eBG2.jpg'
import ecoBG3 from '../assets/images/eBG3.jpg'

//vegetable category images 
import veg1 from '../assets/images/v1.jpg'
import veg2 from '../assets/images/v2.jpg'
import veg3 from '../assets/images/v3.jpg'
import veg4 from '../assets/images/v4.jpg'
import veg5 from '../assets/images/v5.jpg'
import veg6 from '../assets/images/v6.jpg'
import veg7 from '../assets/images/v7.jpeg'
import notfound from '../assets/images/404.gif'

//user images 
import user1 from '../assets/images/pers1.png'
import user2 from '../assets/images/pers2.png'
import user3 from '../assets/images/pers3.png'
import user4 from '../assets/images/pers4.png'
import user5 from '../assets/images/pers5.png'
import user6 from '../assets/images/pers6.png'


//Payment method
import OM from '../assets/images/mobile/assets/om.png'
import MOMO from '../assets/images/mobile/assets/momo.png'
import paypal from '../assets/images/mobile/assets/paypal.png'
import visacard1 from '../assets/images/mobile/assets/visacard1.png'
import visacard from '../assets/images/mobile/assets/visacard.png'


const image = {
    HERO_Ecommerce: slide1,
    HERO_Consultation: slide2,
    HERO_Forum: slide3,
    HERO_Forum2: slide5,
    HERO_Driving: slide4,
    NOT_FOUND: notfound,
    PAYPAL: paypal,
    OM: OM,
    MOMO: MOMO,
    VISA_CARD1: visacard1,
    VISA_CARD: visacard,
}

const heroSlides={
    SLIDE1: slide1
}


export const EcommerceHeroImage= [
        ecoBG1,
        ecoBG2,
        ecoBG3
]

export const vegetables = [
    {
        image: veg1,
        caption: "Carrots"
    },
    {
        image: veg6,
        caption: "Green Cabbage"
    },
    {
        image: veg4,
        caption: "Green Pepper"
    },
    {
        image: veg7,
        caption: "Cellery"
    },
    {
        image: veg4,
        caption: "Red Cabbage"
    },
    {
        image: veg6,
        caption: "Yellow Pepper"
    },
]

export const cartImage = {
    img1 : veg1,
    img2: veg4,
    img3: veg6,
    img4: veg7
}


export const userImages = [
    user1,
    user2,
    user3,
    user4,
    user5,
    user6,
  ]

export default image;