// src/components/CategoriesPage.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ForumNavBar from '../../partials/navBar/ForumNavBar';
import ForumFooter from '../../partials/footer/ForumFooter';
import { BsFilter, BsQuestion, BsSearch } from 'react-icons/bs';
import { getQuestions, getUserQuestions } from '../../redux/feature/questionsSlice';
import { useDispatch } from 'react-redux';

const categories = [
  { name: "Crop Management", description: "Discuss various crop management techniques.", threadCount: 25 },
  { name: "Livestock Care", description: "Share tips and experiences for livestock care.", threadCount: 15 },
  { name: "Equipment", description: "Discuss farming equipment and machinery.", threadCount: 10 },
  // Add more categories as needed
];


const CategoriesPage = () => {
  const [question, setQuestions] = useState([])
  const [yquestion, setYquestions] = useState([])
  const dispatch = useDispatch();
  
  useEffect(() => {
        
    const fetchUsers = async () => {
         const response = await dispatch(getQuestions());
         console.log("Question fetch: ",response)
         console.log("Question fetch: ",response?.payload?.data)
         setQuestions(response?.payload?.data);
         
        const uresponse = await dispatch(getUserQuestions());
            console.log("Question user fetch: ",uresponse)
            console.log("Question user fetch: ",uresponse?.payload?.data)
              
              setYquestions(uresponse?.payload?.data);
        };

         fetchUsers();
    }, [dispatch]);


  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <ForumNavBar/>

      {/* Categories Overview */}
      <div className="container  min-h-screen p-6 mx-auto">
        <div className='flex justify-between'>
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Browse Categories</h2>
          <Link to={'/forum/create-post'}>
            <div className='flex gap-2 hover:scale-105 bg-orange-100 cursor-pointer text-orange-500 p-1 h-fit px-2 rounded-lg'>
              <BsQuestion size={20}/>
              <p>Ask Questions</p>
            </div>
          </Link>
        </div>
        <div className='flex text-sm my-4 w-full md:w-fit justify-between border-2 h-10 rounded-full text-gray-400'>
                          <div className='text-gray-400 pl-4'><BsFilter className='my-3'/></div>
                            <input
                                type='text'
                                placeholder='Search orders...'
                                className='outline-none p-2 bg-transparent'
                                // value={searchQuery}
                                // onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <div className='text-white rounded-r-full px-4 w-full bg-primary border-l border-x-gray-200 cursor-pointer'>
                                <BsSearch className='my-3' />
                            </div>
                        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {question && question.map((category, index) => (
            <div key={index} className="border p-4 rounded-lg shadow">
              <h3 className="text-xl">{category.title}</h3>
              <p>{category.description}</p>
              <p className="text-gray-600">Threads: 12</p>
              <Link to={`/forum/category/${category._id}`} className="text-green-600 hover:underline mt-2 inline-block">
                View Discussions
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <ForumFooter/>
    </div>
  );
};

export default CategoriesPage;