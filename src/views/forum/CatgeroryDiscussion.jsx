// src/components/CategoryDiscussions.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ForumNavBar from '../../partials/navBar/ForumNavBar';
import ForumFooter from '../../partials/footer/ForumFooter';
import { useDispatch } from 'react-redux';
import { io } from 'socket.io-client'; // Import Socket.IO client
import { getQuestions, getUserQuestions } from '../../redux/feature/questionsSlice';
import LandingFooter from '../../partials/footer/LandingFooter';
import { BsFile, BsFileEarmark, BsSend, BsSendFill } from 'react-icons/bs';
import { NODE_APP_BASE_URL } from '../../Utils';

const socket = io(NODE_APP_BASE_URL); // Adjust the URL as necessary

const CategoryDiscussions = () => {
  const { categoryName } = useParams();
  
  const [question, setQuestions] = useState([])
  const [yquestion, setYquestions] = useState([])
  const dispatch = useDispatch();
         const [answers, setAnswers] = useState([]); // New state for answers
         
  const [newAnswer, setNewAnswer] = useState('');
  
  useEffect(() => {
        
    const fetchUsers = async () => {
         const response = await dispatch(getQuestions());
         console.log("Question fetch: ",response)
         console.log("Question fetch: ",response?.payload?.data)
         setQuestions(response?.payload?.data);
        };

         fetchUsers();

         socket.on('answerCreated', (answer) => {
             setAnswers((prev) => [...prev, answer]); // Update answers state with new answer
         });
 
         return () => {
             socket.off('answerCreated'); // Clean up the listener on unmount
         };
    }, [dispatch]);


    const handleSubmit = (e) => {
      e.preventDefault();
      const body = {
          content: newAnswer,
          // Add other necessary fields like sender and question ID
      };
      socket.emit('newAnswer', body); // Emit the new answer
      setNewAnswer(''); // Clear input
  };
    
    const thisQuestion = question.filter(f => f._id = String(categoryName))
    console.log("This question", thisQuestion)

  // Fetch discussions based on the category name
  // For now, display a placeholder
  return (
    <div className="flex flex-col">
      <ForumNavBar/>
      <div className=' min-h-screen px-20 p-6'>
        <h2 className="text-3xl mb-4">{thisQuestion[0]?.title} Discussions</h2>
        <p>This is where discussions about {thisQuestion[0]?.title.toLowerCase()} will be listed.</p>
        <div className='my-4 w-[70%] flex gap-4 bg-orange-50 text-gray-600 p-4 rounded-lg'>
            {thisQuestion[0]?.file[0] &&
              <img src={`http://localhost:4000/${thisQuestion[0]?.file[0]}`} className='w-40 rounded-lg h-32'/>
            }
            {thisQuestion[0]?.content}
        </div>
        <div className='bg-gray-50 h-[350px] overflow-y-auto'>
            
            {answers?.map((answer, index) => (
                        <div key={index} className='p-2 border-b'>
                            {answer.content}
                        </div>
                    ))}
        </div>
        <div className='flex mt-4 rounded-lg border justify-between '>
          <input
            type='text'
            className='w-[90%] p-4 pl-8 outline-none text-gray-700'
            placeholder='Share an answer...'
            value={newAnswer}
            onChange={(e) => setNewAnswer(e.target.value)}
          />
          <div className='m-4 text-gray-500 p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
            <BsFileEarmark size={20}/>
          </div>
          <div className='bg-primary px-4 p-2 rounded-r-lg text-white'>
            <BsSendFill size={28} className='mt-2'/>
          </div>
        </div>
        {/* List discussions here */}

      </div>
      {/* Footer */}
      <LandingFooter/>
    </div>
  );
};

export default CategoryDiscussions;