import { Bs0Circle, BsCarFront, BsChatDotsFill, BsPeopleFill } from "react-icons/bs";   
import image,{cartImage} from "./images";
import { CrownIcon } from "lucide-react";

//ecommerce category images
import fruit from '../assets/images/fruit.jpeg'
import vegetables from '../assets/images/veg1.jpeg'
import livestocks from '../assets/images/livestocks.jpg'
import fish from '../assets/images/fish.jpg'
import tools from '../assets/images/gth.jpg'

//Best farmers images
import f1 from '../assets/images/heroF1.png'
import f2 from '../assets/images/c1.png'
import f3 from '../assets/images/c2.png'
import f4 from '../assets/images/black.png'

//Product images
import b1 from '../assets/images/banana.jpeg'
import b2 from '../assets/images/banana1.jpg'
import b3 from '../assets/images/banana2.jpg'
import b4 from '../assets/images/banana3.jpg'
import b5 from '../assets/images/banana4.jpg'
import b6 from '../assets/images/banana5.jpg'
import c1 from '../assets/images/bana.jpg'
import c2 from '../assets/images/asdads.jpeg'
import c3 from '../assets/images/cocao.jpeg'
import cf1 from '../assets/images/cof.jpeg'
import cf2 from '../assets/images/coff.jpeg'
import cf3 from '../assets/images/coffee.jpeg'
import cf4 from '../assets/images/poik.jpeg'
import h1 from '../assets/images/poul1.jpeg'
import h2 from '../assets/images/poule.jpeg'
import h3 from '../assets/images/poule2.jpeg'
import h4 from '../assets/images/fow1.jpeg'
import h5 from '../assets/images/fow2.jpeg'
import ho1 from '../assets/images/honey.jpeg'
import ho2 from '../assets/images/honey1.png'
import ho3 from '../assets/images/honey3.png'
import ca1 from '../assets/images/th.jpeg'
import ca2 from '../assets/images/v1.jpg'
import ca3 from '../assets/images/v2.jpg'
import p1 from '../assets/images/v5.jpg'
import p2 from '../assets/images/v6.jpg'
import cab1 from '../assets/images/v3.jpg'
import cab2 from '../assets/images/v4.jpg'

 const Features = [
    {
        id: 1,
        title: "Ramdom Title",
        content: "This is not a surprising approach for a company like Chime. ",
    },
    {
        id: 2,
        title: "Ramdom Title",
        content: "This is not a surprising approach for a company like Chime. ",
    },
    {
        id: 3,
        title: "Ramdom Title",
        content: "This is not a surprising approach for a company like Chime. ",
    },
    {
        id: 4,
        title: "Ramdom Title",
        content: "This is not a surprising approach for a company like Chime. ",
    },
    {
        id: 5,
        title: "Ramdom Title",
        content: "This is not a surprising approach for a company like Chime. ",
    },
    {
        id: 6,
        title: "Ramdom Title",
        content: "This is not a surprising approach for a company like Chime. ",
    },
    {
        id: 7,
        title: "Ramdom Title",
        content: "This is not a surprising approach for a company like Chime. ",
    },
    {
        id: 8,
        title: "Ramdom Title",
        content: "This is not a surprising approach for a company like Chime. ",
    }
]

const EcommercenavLinks = [
    {
        title: "Top farmers",
        icon: <BsCarFront/>,
        path: "/",
    },

    {
        title: "Vegetables",
        icon: <BsCarFront/>,
        path: "/",
        subCategory: [
          "Leafy Greens",
          "Root Vegetables",
          "Cruciferous",
          "NightShades",
        ]
    },
    {
        title: "Livestocks",
        icon: <BsCarFront/>,
        path: "/",
        subCategory: [
          "Cattles",
          "Sheep",
          "Goats",
          "Pigs",
          "Pigs",
          "Poultry",
          "Eggs"
        ]
    },

    {
        title: "Cash crops",
        icon: <BsCarFront/>,
        path: "/",
        subCategory: [
          "Crains",
          "Legumes",
          "Tubers"
        ]
    },

    {
        title: "Tools",
        icon: <BsCarFront/>,
        path: "/",
        subCategory: [
          "Hand Tools",
          "Power Tools",
          "Irrigation Equipment",
          "Safety Gear"
        ]
    },
    {
        title: "Fisheries",
        icon: <BsCarFront/>,
        path: "/",
        subCategory: [
          "Freshwater Fish",
          "Saltwater Fish",
          "Shellfish",
        ]
    },
    {
        title: "More",
        icon: <BsCarFront/>,
        path: "/",
        categories: [
          {
            name: "Honey and Beekeeping Products",
            subCategory: [
              "Raw Honey",
              "Beeswax",
              "Propolis",
              "Royal Jelly"
            ]
          },
          {
            name: "Insects",
            subCategory: [
              "Edible Insects",
              "Live Baits",
            ]
          },
          {
            name: "Herbs ans Sprices",
            subCategory: [
              "Fresh Herbs",
              "Dried Herbs",
              "Spices",
            ]
          },
          {
            name: "Fertilizers",
            subCategory: [
              "Organic Fertilizers",
              "Chemical Fertilizers",
              "Soil Amendments",
              "Speciality Fertilizers"
            ]
          },
          {
            name: "Seeds",
            subCategory: [
              "Vegetable Seeds",
              "Flower Seeds",
              "Herbs Seeds",
              "Grass seeds"
            ]
          },
          {
            name: "Fruits",
            subCategory: [
              "Berries",
              "Citrus Fruits",
              "Sone Fruits",
              "Tropical Fruits"
            ]
          },
        ]
    },
];

const CartItems = [
  {
      id: 1,
      name: "Organic Apples",
      unitPrice: 500, // Price in XAF
      quantity: 2,
      image: cartImage.img2,
      country: "USA"
  },
  {
      id: 2,
      name: "Fresh Bananas",
      unitPrice: 300,
      quantity: 5,
      image: cartImage.img1,
      country: "Ecuador"
  },
  {
      id: 3,
      name: "Strawberries",
      unitPrice: 2000,
      quantity: 1,
      image: cartImage.img3,
      country: "Spain"
  },
  {
      id: 4,
      name: "Carrots",
      unitPrice: 150,
      quantity: 3,
      image: cartImage.img4,
      country: "France"
  },
  {
      id: 5,
      name: "Broccoli",
      unitPrice: 400,
      quantity: 1,
      image: cartImage.img1,
      country: "Italy"
  }
];

const reviews = [
  {
    id: 1,
    name: 'Lori A.',
    rating: 4,
    date: 'Reviewed in the United States on July 29, 2024',
    verified: true,
    text: `We are longtime fans of Food Saver. We've had many of the years and this is just the latest one. We got this one to go with our professional Food Saver model because it does "wet" items. It takes a little getting used to but once you get the hang of it, it goes swimmingly along and next thing you know, you're done, and your freezer is filled. I like how the machine "grabs" the bag, then you chose vacuum or seal and then when it is done it spits it out at you, not really, it just releases the bag and viola, easy peasy. It is a real workhorse, and I cannot wait for deer season this year to really put it through its paces.`,
    helpfulCount: 4,
  },
  {
    id: 2,
    name: 'T. T.',
    rating: 5,
    date: 'Reviewed in the United States on July 28, 2024',
    verified: false,
    text: `Great product! Really helps in keeping my food fresh for longer periods.`,
    helpfulCount: 2,
  },
];

const categoryImages = [
    {
        image: fruit,
        title: "Fruit",
    },
    {
        image: vegetables,
        title: "Vegetables",
    },
    {
        image: livestocks,
        title: "Livestocks",
    },
    {
        image: fish,
        title: "Fish",
    },
    {
        image: tools,
        title: "Tools",
    },
]

const bestFarmers = [
    {
        id: 1,
        image:f1,
        name: "Ngameni Francis",
        category: "Poultry",
        rate: 4
    },
    {
        id: 2,
        image:f2,
        name: "Marcel Tchenkou",
        category: "Fishing",
        rate: 4
    },
    {
        id: 3,
        image:f3,
        name: "Natouche Gemain",
        category: "Viticulture",
        rate: 4
    },
    {
        id: 4,
        image:f4,
        name: "Ricardo Nsong",
        category: "Apiculture",
        rate: 4
    },
]

const products = [
    {
        id: 1,
        name: "Banana",
        category: "Fruit",
        description: "This is a Fruit that is rich in vitamin C",
        status: "InStock",
        rate: 2,
        price: 1200,
        shippingPrice: 1000,
        itemSold: 8,
        user: {
            image: f1,
            name: "Nanjou Franc"
        },
        images: [
            b1, b2, b3, b4, b5, b6
        ],
        videos: [
          {
            title: 'What Else Can I Seal With This?',
            duration: '3:12',
            creator: 'Ethan Young',
            thumbnail: 'https://via.placeholder.com/300x200?text=Video+1', // Replace with actual thumbnail URLs
            videoSrc: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4', // Replace with actual video URLs
          },
          {
            title: 'Customer Review: Whoooosshhhhh! Tsssst!',
            duration: '6:27',
            creator: 'Elvis',
            thumbnail: 'https://via.placeholder.com/300x200?text=Video+2',
            videoSrc: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
          },
          {
            title: 'FOOD SAVER ELITE Mom Approved',
            duration: '1:17',
            creator: 'Hunter Cleve',
            thumbnail: 'https://via.placeholder.com/300x200?text=Video+3',
            videoSrc: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
          },
          {
            title: 'Honest Review from Recipe Developer',
            duration: '1:31',
            creator: 'Peel with Zeal',
            thumbnail: 'https://via.placeholder.com/300x200?text=Video+4',
            videoSrc: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
          },
          {
            title: 'Do This',
            duration: '1:45',
            creator: 'The YAYSayers',
            thumbnail: 'https://via.placeholder.com/300x200?text=Video+5',
            videoSrc: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
          },
        ]
    },
    {
        id: 2,
        name: "Sweet Garoua Cocoa",
        description: "This is a cash crop that is mainly use to make chocolate",
        status: "InStock",
        category: "Cash crop",
        rate: 5,
        price: 12000,
        shippingPrice: 1500,
        itemSold: 8,
        user: {
            image: f2,
            name: "Brico Melin"
        },
        images: [
            c1, c2, c3
        ],
        videos: [
          {
            title: 'What Else Can I Seal With This?',
            duration: '3:12',
            creator: 'Ethan Young',
            thumbnail: 'https://via.placeholder.com/300x200?text=Video+1', // Replace with actual thumbnail URLs
            videoSrc: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4', // Replace with actual video URLs
          },
          {
            title: 'Customer Review: Whoooosshhhhh! Tsssst!',
            duration: '6:27',
            creator: 'Elvis',
            thumbnail: 'https://via.placeholder.com/300x200?text=Video+2',
            videoSrc: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
          },
          {
            title: 'FOOD SAVER ELITE Mom Approved',
            duration: '1:17',
            creator: 'Hunter Cleve',
            thumbnail: 'https://via.placeholder.com/300x200?text=Video+3',
            videoSrc: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
          },
          {
            title: 'Honest Review from Recipe Developer',
            duration: '1:31',
            creator: 'Peel with Zeal',
            thumbnail: 'https://via.placeholder.com/300x200?text=Video+4',
            videoSrc: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
          },
          {
            title: 'Do This',
            duration: '1:45',
            creator: 'The YAYSayers',
            thumbnail: 'https://via.placeholder.com/300x200?text=Video+5',
            videoSrc: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
          },
        ]
    
    },
    {
        id: 3,
        name: "Lake Tchad Coffee",
        description: "This is a Fruit that is rich in vitamin C",
        status: "OutOfStock",
        category: "cash crop",
        rate: 4,
        price: 1200,
        shippingPrice: 1000,
        itemSold: 8,
        user: {
            image: f3,
            name: "Nanjou Cristine"
        },
        images: [
            cf1, cf2, cf3, cf4
        ],
        videos: [
          {
            title: 'What Else Can I Seal With This?',
            duration: '3:12',
            creator: 'Ethan Young',
            thumbnail: 'https://via.placeholder.com/300x200?text=Video+1', // Replace with actual thumbnail URLs
            videoSrc: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4', // Replace with actual video URLs
          },
          {
            title: 'Customer Review: Whoooosshhhhh! Tsssst!',
            duration: '6:27',
            creator: 'Elvis',
            thumbnail: 'https://via.placeholder.com/300x200?text=Video+2',
            videoSrc: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
          },
          {
            title: 'FOOD SAVER ELITE Mom Approved',
            duration: '1:17',
            creator: 'Hunter Cleve',
            thumbnail: 'https://via.placeholder.com/300x200?text=Video+3',
            videoSrc: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
          },
          {
            title: 'Honest Review from Recipe Developer',
            duration: '1:31',
            creator: 'Peel with Zeal',
            thumbnail: 'https://via.placeholder.com/300x200?text=Video+4',
            videoSrc: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
          },
          {
            title: 'Do This',
            duration: '1:45',
            creator: 'The YAYSayers',
            thumbnail: 'https://via.placeholder.com/300x200?text=Video+5',
            videoSrc: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
          },
        ]
    },
    {
        id: 4,
        name: "Egg King Hen",
        category: "Livestock",
        description: "This are hen that produce 12 eggs every 2 days",
        status: "LowStock",
        rate: 5,
        price: 5000,
        shippingPrice: 1000,
        itemSold: 8,
        user: {
            image: f1,
            name: "Nanjou Franc"
        },
        images: [
            h1, h2, h3, h4, h5
        ]
    },
    {
        id: 5,
        name: "Bee Honey",
        description: "This honey is cultivation to give more effectiveness to consumers",
        status: "LowStock",
        rate: 5,
        price: 2500,
        category: "Vegetables",
        shippingPrice: 1000,
        itemSold: 15,
        user: {
            image: f4,
            name: "Meka Mabelle"
        },
        images: [
            ho1, ho2, ho3
        ],
        videos: [
          {
            title: 'What Else Can I Seal With This?',
            duration: '3:12',
            creator: 'Ethan Young',
            thumbnail: 'https://via.placeholder.com/300x200?text=Video+1', // Replace with actual thumbnail URLs
            videoSrc: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4', // Replace with actual video URLs
          },
          {
            title: 'Customer Review: Whoooosshhhhh! Tsssst!',
            duration: '6:27',
            creator: 'Elvis',
            thumbnail: 'https://via.placeholder.com/300x200?text=Video+2',
            videoSrc: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
          },
          {
            title: 'FOOD SAVER ELITE Mom Approved',
            duration: '1:17',
            creator: 'Hunter Cleve',
            thumbnail: 'https://via.placeholder.com/300x200?text=Video+3',
            videoSrc: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
          },
          {
            title: 'Honest Review from Recipe Developer',
            duration: '1:31',
            creator: 'Peel with Zeal',
            thumbnail: 'https://via.placeholder.com/300x200?text=Video+4',
            videoSrc: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
          },
          {
            title: 'Do This',
            duration: '1:45',
            creator: 'The YAYSayers',
            thumbnail: 'https://via.placeholder.com/300x200?text=Video+5',
            videoSrc: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
          },
        ]
    },
    {
        id: 6,
        name: "Freshly Harvested carrots",
        description: "This is a Fruit that is rich in vitamin C",
        status: "InStock",
        category: "Vegetables",
        rate: 4,
        price: 1200,
        shippingPrice: 1000,
        itemSold: 8,
        user: {
            image: f1,
            name: "Nanjou Franc"
        },
        images: [
            ca1, ca2, ca3
        ], 
        videos: [
          {
            title: 'What Else Can I Seal With This?',
            duration: '3:12',
            creator: 'Ethan Young',
            thumbnail: 'https://via.placeholder.com/300x200?text=Video+1', // Replace with actual thumbnail URLs
            videoSrc: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4', // Replace with actual video URLs
          },
          {
            title: 'Customer Review: Whoooosshhhhh! Tsssst!',
            duration: '6:27',
            creator: 'Elvis',
            thumbnail: 'https://via.placeholder.com/300x200?text=Video+2',
            videoSrc: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
          },
          {
            title: 'FOOD SAVER ELITE Mom Approved',
            duration: '1:17',
            creator: 'Hunter Cleve',
            thumbnail: 'https://via.placeholder.com/300x200?text=Video+3',
            videoSrc: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
          },
          {
            title: 'Honest Review from Recipe Developer',
            duration: '1:31',
            creator: 'Peel with Zeal',
            thumbnail: 'https://via.placeholder.com/300x200?text=Video+4',
            videoSrc: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
          },
          {
            title: 'Do This',
            duration: '1:45',
            creator: 'The YAYSayers',
            thumbnail: 'https://via.placeholder.com/300x200?text=Video+5',
            videoSrc: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
          },
        ]
    },
    {
        id: 7,
        name: "Fresh Peper",
        description: "This is a Fruit that is rich in vitamin C",
        status: "OutOfStock",
        rate: 4,
        price: 1200,
        shippingPrice: 1000,
        itemSold: 15,
        category: "Vegetables",
        user: {
            image: f1,
            name: "Nanjou Franc"
        },
        images: [
            p1, p2
        ],
        videos: [
          {
            title: 'What Else Can I Seal With This?',
            duration: '3:12',
            creator: 'Ethan Young',
            thumbnail: 'https://via.placeholder.com/300x200?text=Video+1', // Replace with actual thumbnail URLs
            videoSrc: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4', // Replace with actual video URLs
          },
          {
            title: 'Customer Review: Whoooosshhhhh! Tsssst!',
            duration: '6:27',
            creator: 'Elvis',
            thumbnail: 'https://via.placeholder.com/300x200?text=Video+2',
            videoSrc: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
          },
          {
            title: 'FOOD SAVER ELITE Mom Approved',
            duration: '1:17',
            creator: 'Hunter Cleve',
            thumbnail: 'https://via.placeholder.com/300x200?text=Video+3',
            videoSrc: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
          },
          {
            title: 'Honest Review from Recipe Developer',
            duration: '1:31',
            creator: 'Peel with Zeal',
            thumbnail: 'https://via.placeholder.com/300x200?text=Video+4',
            videoSrc: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
          },
          {
            title: 'Do This',
            duration: '1:45',
            creator: 'The YAYSayers',
            thumbnail: 'https://via.placeholder.com/300x200?text=Video+5',
            videoSrc: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
          },
        ]
    },
    {
        id: 8,
        name: "Cabage",
        description: "This is a Fruit that is rich in vitamin C",
        status: "InStock",
        rate: 4,
        price: 1200,
        shippingPrice: 1000,
        itemSold: 8,
        category: "Vegetables",
        user: {
            image: f1,
            name: "Nanjou Franc"
        },
        images: [
            cab1, cab2
        ],
        videos: [
          {
            title: 'What Else Can I Seal With This?',
            duration: '3:12',
            creator: 'Ethan Young',
            thumbnail: 'https://via.placeholder.com/300x200?text=Video+1', // Replace with actual thumbnail URLs
            videoSrc: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4', // Replace with actual video URLs
          },
          {
            title: 'Customer Review: Whoooosshhhhh! Tsssst!',
            duration: '6:27',
            creator: 'Elvis',
            thumbnail: 'https://via.placeholder.com/300x200?text=Video+2',
            videoSrc: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
          },
          {
            title: 'FOOD SAVER ELITE Mom Approved',
            duration: '1:17',
            creator: 'Hunter Cleve',
            thumbnail: 'https://via.placeholder.com/300x200?text=Video+3',
            videoSrc: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
          },
          {
            title: 'Honest Review from Recipe Developer',
            duration: '1:31',
            creator: 'Peel with Zeal',
            thumbnail: 'https://via.placeholder.com/300x200?text=Video+4',
            videoSrc: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
          },
          {
            title: 'Do This',
            duration: '1:45',
            creator: 'The YAYSayers',
            thumbnail: 'https://via.placeholder.com/300x200?text=Video+5',
            videoSrc: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
          },
        ]
    },
]

const feedbackData = {
    currentItem: [
      {
        id: 1,
        user: 'o**u',
        rating: 'Past month',
        comment: 'Great seller and fast delivery, easy transaction A+++',
      },
      {
        id: 2,
        user: '8**0',
        rating: 'Past month',
        comment: 'Arrived today',
      },
      {
        id: 3,
        user: 'I**i',
        rating: 'Past month',
        comment: 'All good thanks',
      },
    ],
    allItems: [
      {
        id: 4,
        user: 'j**n',
        rating: 'Past month',
        comment: 'Excellent service!',
      },
      {
        id: 5,
        user: 'k**r',
        rating: '2 months ago',
        comment: 'Very satisfied with the purchase.',
      },
      {
        id: 6,
        user: 'l**e',
        rating: '3 months ago',
        comment: 'Fast shipping and great quality!',
      },
      // Add more feedback entries as needed
    ],
  };


  export const tooltip = {
    color: 'black',
    backgroundColor: 'green',
    fontSize: 12,
    fontType:'bold',
    borderRadius: 10
   }

  export const barChartdata = [
    {
      "name": "Mon",
      "orders": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Tue",
      "orders": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Wed",
      "orders": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "Thu",
      "orders": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "Fri",
      "orders": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "Sat",
      "orders": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "Sun",
      "orders": 3490,
      "pv": 4300,
      "amt": 2100
    }
  ]

  
export const ProfileBankInfo = [
  {
    label: "Bank Name",
    value: "CBC",
  },
  {
    label: "Bank Account No",
    value: "12365985621",
  },
  {
    label: "IFSC Code",
    value: "ICI2145",
  },
  {
    label: "PAN No",
    value: "TC0C0Y56",
  },
]
export const ProfilePersonalInfo = [
  {
    label: "Passport No",
    value: "694645064",
  },
  {
    label: "Passport Exp Date",
    value: "15 Oct 2030",
  },
  {
    label: "Tel",
    value: "(+237) 655897456",
  },
  {
    label: "Nationality",
    value: "Cameroon",
  },
  {
    label: "Religion",
    value: "Christian",
  },
  {
    label: "Marital Status",
    value: "Married",
  },
  {
    label: "Employment of Spouse",
    value: "No",
  },
  {
    label: "No. of children",
    value: "3",
  },
]
export const EmergencyContact= [
  {
    label: "Primary",
  },
  {
    label: "Name",
    value: "John Doe",
  },
  {
    label: "Relationship",
    value: "Brother",
  },
  {
    label: "Phone",
    value: "(+237 695887756)",
  },
]


const transactionItem = [
  {
      id: 1,
      date: '2024-10-01',
      amount: 15000,
      status: 'Completed',
  },
  {
      id: 2,
      date: '2024-09-28',
      amount: 20000,
      status: 'Pending',
  },
  {
      id: 3,
      date: '2024-09-15',
      amount: 5000,
      status: 'Cancelled',
  },
  // Add more transactions as needed
];

 export {EcommercenavLinks, products,transactionItem, reviews, bestFarmers, feedbackData, categoryImages, Features, CartItems}