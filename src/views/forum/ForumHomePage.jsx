// src/components/HomePage.js
import React from 'react';
import image from '../../constants/images';
import ForumNavBar from '../../partials/navBar/ForumNavBar';
import { Link } from 'react-router-dom';

const ForumHome = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <ForumNavBar/>

      {/* Main Banner */}
      <div className="bg-cover h-[500px] bg-center" style={{ backgroundImage: `url(${image.HERO_Forum})`  }}>
        <div className="flex items-center justify-center h-full bg-gray-900 bg-opacity-50">
          <div className="text-center text-white">
            <h2 className="text-4xl">Connect, Share, Grow Together</h2>
            <div className="mt-4 flex justify-center gap-4">
              <Link to={'/forum/welcome'} >
                <button className="bg-primary hover:scale-105 px-4 py-2 rounded text-white">Join the Community</button>
              </Link>
              <button className="bg-white hover:scale-105 text-green-600 px-4 py-2 rounded ml-2">Start a Discussion</button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <section className="container mx-auto py-16 p-4">
        <h2 className="text-3xl mb-4">Explore Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border b p-4 rounded-lg shadow">
            <h3 className="text-xl">Crop Management</h3>
          </div>
          <div className="border p-4 rounded-lg shadow">
            <h3 className="text-xl">Livestock Care</h3>
          </div>
          <div className="border p-4 rounded-lg shadow">
            <h3 className="text-xl">Equipment</h3>
          </div>
        </div>
      </section>

      {/* Featured Discussions */}
      <section className="container mx-auto p-4">
        <h2 className="text-3xl mb-4">Featured Discussions</h2>
        <div className="space-y-4">
          <div className="border p-4 rounded-lg shadow">
            <h3 className="text-xl">How to Manage Pests Organically</h3>
            <p>Discussion on effective organic pest control methods.</p>
          </div>
          <div className="border p-4 rounded-lg shadow">
            <h3 className="text-xl">Best Practices for Livestock Nutrition</h3>
            <p>Share your tips and experiences!</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black p-4 text-gray-300 text-center">
        <p>&copy; 2024 Agri<span className='text-primary'>BUSS</span>. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default ForumHome;