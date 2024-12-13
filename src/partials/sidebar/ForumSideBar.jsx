import React from 'react';
import { BsHouse } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Forum Rules and Guidelines', description: 'Learn about the rules and guidelines.', color: 'border-red-500' },
  { name: 'Graphic Design', description: 'General design topics. No work requests.', color: 'border-yellow-500' },
  { name: 'General', description: 'Topics that don\'t need a category.', color: 'border-orange-500' },
  { name: 'News', description: 'Graphic Design Industry News.', color: 'border-green-500' },
  { name: 'Inspiration', description: 'Inspiring Creative Work.', color: 'border-blue-500' },
  { name: 'The Crit Pit', description: 'Post your work for critique.', color: 'border-purple-500' },
  { name: 'Student Forum', description: 'Post student work for critique.', color: 'border-pink-500' },
];

const ForumSideBar = () => {
  return (
    <div className=" p-4 text-center p- rounded-lg">
      <Link to={`Home`}>
        <div className='flex gap-2'>
          <BsHouse/>
          <p>Home</p>
        </div>
      </Link>
    </div>
  );
};

export default ForumSideBar;
