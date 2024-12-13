import React from 'react';
import FarmerProfile from './components/FarmerProfile.jsx';
import ProductList from './components/ProductList.jsx';
import OtherFarmers from './components/OtherFarmers.jsx';
import Feedback from './components/Feedback.jsx';
import NavBar from './components/NavBar.jsx';
import AppNavbar from '../../partials/navBar/AppNavbar.jsx';
import { useParams } from 'react-router-dom';
import LandingFooter from '../../partials/footer/LandingFooter.jsx';

function App() {
  const { id } = useParams();
  return (
    <div className="h-screen md:bg-gray-50 flex flex-col">
      {/* Navigation Bar */}
      <AppNavbar/>
      <div className="flex flex-col md:flex-row mt-4 flex-grow">
        {/* Left Sidebar (Farmer Profile) */}
        <div className="md:w-1/4 p-4">
          <FarmerProfile id={id}/>
        </div>

        {/* Main Content (Product List) */}
        <div className="md:w-2/4 p-4">
          <ProductList />
        </div>

        {/* Right Sidebar (Other Farmers and Feedbacks) */}
        <div className="md:w-1/4 p-4">
          <OtherFarmers />
          <Feedback />
        </div>
      </div>
      <LandingFooter/>
    </div>
  );
}

export default App;
