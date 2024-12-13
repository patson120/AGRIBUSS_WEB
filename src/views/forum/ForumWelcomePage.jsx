// src/components/WelcomePage.js
import React from 'react';
import ForumNavBar from '../../partials/navBar/ForumNavBar';
import ForumFooter from '../../partials/footer/ForumFooter';
import { Link } from 'react-router-dom';
import image from '../../constants/images';

const WelcomePage = ({ username }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <ForumNavBar/>

      {/* Welcome Banner */}
      <div className="bg-cover bg-center h-64" style={{ backgroundImage: `url(${image.HERO_Forum2})` }}>
        <div className="flex items-center justify-center h-full bg-gray-900 bg-opacity-50">
          <div className="text-center text-white">
            <h2 className="text-4xl">Welcome, {username}!</h2>
            <p className="mt-2 text-lg">Join our community of farmers sharing knowledge and experiences.</p>
          </div>
        </div>
      </div>

      {/* Getting Started Section */}
      <section className="container mx-auto p-4">
        {/* <h2 className="text-3xl mb-4">Getting Started</h2> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border p-4 rounded-lg shadow text-center">
            <h3 className="text-xl">Start a Discussion</h3>
            <p>Share your thoughts or ask questions!</p>
            <Link to={'/forum/create-post'}>
                <button className="bg-primary text-white px-4 py-2 rounded mt-2">Create Post</button>
            </Link>
          </div>
          <div className="border p-4 rounded-lg shadow text-center">
            <h3 className="text-xl">View Categories</h3>
            <p>Explore different farming topics.</p>
            <Link to={'/forum/questions'}>
                <button className="bg-primary text-white px-4 py-2 rounded mt-2">Browse Categories</button>
            </Link>
          </div>
          <div className="border p-4 rounded-lg shadow text-center">
            <h3 className="text-xl">Check Messages</h3>
            <p>Stay updated with your notifications.</p>
            <button className="bg-primary text-white px-4 py-2 rounded mt-2">View Messages</button>
          </div>
        </div>
      </section>

      {/* Featured Discussions */}
      <section className="container mx-auto p-4">
        <h2 className="text-3xl mb-4">Popular Discussions</h2>
        <div className="space-y-4">
          <div className="border p-4 rounded-lg shadow">
            <h3 className="text-xl">How to Manage Pests Organically</h3>
            <p>Join our discussion on effective organic pest control methods.</p>
          </div>
          <div className="border p-4 rounded-lg shadow">
            <h3 className="text-xl">Best Practices for Livestock Nutrition</h3>
            <p>Share your tips and experiences with livestock care.</p>
          </div>
        </div>
      </section>

      {/* Recent Activity */}
      <section className="container mx-auto p-4">
        <h2 className="text-3xl mb-4">Recent Activity</h2>
        <div className="space-y-4">
          <div className="border p-4 rounded-lg shadow">
            <p>You replied to <strong>How to Grow Tomatoes</strong></p>
          </div>
          <div className="border p-4 rounded-lg shadow">
            <p>You started a discussion on <strong>Best Fertilizers for Corn</strong></p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <ForumFooter/>
    </div>
  );
};

export default WelcomePage;