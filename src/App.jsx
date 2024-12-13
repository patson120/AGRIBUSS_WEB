import React, { useEffect, useState } from 'react'
import dotenv from 'dotenv-flow';
dotenv.config({ path: 'local.env' });
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SignUp from './views/Signup.jsx'
import SignIn from './views/Signin.jsx'
import UserPage from './views/userPage.jsx'
import DriverProf from './views/driveProf.jsx'
import FarmerDash from './views/FarmerDash.jsx'
import DriverDash from './views/driverDash.jsx'
import AdminDash from './views/adminDash.jsx'
import LeftDDash from './components/LeftDDash.jsx'
import LeftADash from './components/LeftADash.jsx'
import Sales from './views/Sales.jsx'
import Products from './views/Products.jsx'
import Books from './views/Books.jsx'
import NotFound from './views/NotFound.jsx'
import Drive from './views/Drive.jsx'
import Orders from './views/Orders.jsx'
import Invoice from './views/Invoices.jsx'
import Client from './views/client.jsx'
import Driver from './views/driver.jsx'
import Farmer from './views/Farmer.jsx'
import Consultant from './views/consultant.jsx'
import Vehicle from './views/vehicle.jsx'
import Forum from './views/Forum.jsx'
import DriveRequest from './views/driveRequest'
import Landing from './views/Landing.jsx'
import DriverCustomer from './views/driveCustomer.jsx'
import Consultation from './views/Consultation.jsx'
import Customer from './views/Customer.jsx'
import Delivery from './views/Delivery.jsx'
import ProtectedRoute from './Routes/ProtectedRoutes.jsx'
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import './App.css'
import FarmerStats from './views/FarmerStatistics.jsx'
import LandingPage from './views/landing/landingPage.jsx'
import Contact from './views/landing/components/Contact.jsx'
import EcommerceHome from './views/ecommerce/EcommerceHome.jsx'
import ProductList from './views/ecommerce/products/ProductList.jsx'
import ProductDetail from './views/ecommerce/products/ProductDetail.jsx'
import Cart from './views/ecommerce/cart.jsx'
import Order from './views/ecommerce/Order.jsx'
import SellerInfo from './views/ecommerce/SellerInfo.jsx'
import FarmerList from './views/ecommerce/FarmerList.jsx'
import ForumHome from './views/forum/ForumHomePage.jsx'
import TopicList from './views/forum/components/TopicList.jsx'
import { UserRoleProvider } from './context/UseRoleContext.jsx'
import Logout from './views/auth/Logout.jsx'
import NewProduct from './views/ecommerce/products/NewProduct.jsx'
import BuyProduct from './views/ecommerce/BuyProduct.jsx'
import TrackOrderPage from './views/ecommerce/TrackOrderPage.jsx'
import Notification from './views/Notifiction/Notification.jsx'
import Profile from './views/profle/Profile.jsx'
import WelcomePage from './views/forum/ForumWelcomePage.jsx'
import CreatePost from './views/forum/CreatePost.jsx'
import CategoriesPage from './views/forum/CategoryList.jsx'
import ProductTest from './views/test/productTest.jsx'
import Chat from './views/ecommerce/Chat.jsx'
import ENotification from './views/ecommerce/Notification.jsx'
import Transactions from './views/ecommerce/Transaction.jsx'
import CategoryDiscussions from './views/forum/CatgeroryDiscussion.jsx'
import NotificationList from './views/test/notification.jsx'
import ForumLayout from './views/forum/ForumLayout.jsx'
import AddConsultant from './views/consultant/addConsultant.jsx'
import AccountType from './views/accountType.jsx'
import ConsultantDash from './views/consultant/consultantDash.jsx'
import ConsultantStats from './views/consultant/consultantStatistics.jsx'
import Appointment from './views/consultant/appointmentRequest'
import Schedule from './views/consultant/Schedule'
import Appointments from './views/consultant/appointments.jsx'

function App() {

  console.log({ data: import.meta.env.NODE_APP_BASE_URL});
  
  return (
    <UserRoleProvider>
      <Router>
        <Routes>
          {/*[...ROUTES].map((routes, index) => 
                <Route key={index.toString()+routes?.path}
                  path={routes?.route}
                  element={<routes.element/>}
                />
            )*/}
          <Route path="/test-product" exact={true} element={<ProductTest />} />
          <Route path="/register" exact={true} element={<SignUp />} />
          <Route path="/register-consultant" exact={true} element={<AddConsultant />} />
          <Route path="/account-type" exact={true} element={<AccountType />} />
          <Route path="/login" element={<SignIn />} exact={true} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/about" element={<LandingPage />} />
          <Route path="/feature" element={<LandingPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<LandingPage />} exact={true} />
          {/* auth route */}
          {/*<Route element={<ProtectedRoutes/>}>*/}
          <Route path="/market" exact={true} element={<EcommerceHome />} />
          <Route path="/market/product" element={<ProductList />} exact={true} />
          <Route path="/market/search" element={<ProductList />} exact={true} />
          <Route path="/market/product/:id" element={<ProductDetail />} exact={true} />
          <Route path="/farmers" element={<FarmerList />} exact={true} />
          <Route path="/notification" element={<NotificationList />} exact={true} />

          <Route path="/market/cart" element={<Cart />} exact={true} />
          <Route path="/market/notifications" element={<ENotification />} exact={true} />
          <Route path="/market/transactions" element={<Transactions />} exact={true} />
          <Route path="/market/buyproduct" element={<BuyProduct />} exact={true} />
          <Route path="/market/orders" element={<Order />} exact={true} />
          <Route path="/market/track-order" element={<TrackOrderPage />} exact={true} />
          <Route path="/market/chat" element={<Chat />} exact={true} />
          <Route path="/market/seller/:id" element={<SellerInfo />} exact={true} />

          <Route path='/forum' element={<ProtectedRoute allowedRoles={['farmer']}><WelcomePage /></ProtectedRoute>} exact={true} />
          <Route path="/forum/welcome" element={<ProtectedRoute allowedRoles={['farmer']}><WelcomePage /></ProtectedRoute>} exact={true} />
          <Route path="/forum/create-post" element={<ProtectedRoute allowedRoles={['farmer']}><CreatePost /></ProtectedRoute>} exact={true} />
          <Route path="/forum/questions" element={<ProtectedRoute allowedRoles={['farmer']}><CategoriesPage /></ProtectedRoute>} exact={true} />
          <Route path="/forum/category/:categoryName" element={<ProtectedRoute allowedRoles={['farmer']}><CategoryDiscussions /></ProtectedRoute>} exact={true} />

          <Route path="/farmer" element={<ProtectedRoute allowedRoles={['farmer']}><FarmerDash /></ProtectedRoute>} exact={true}>
            <Route index element={<Products />} exact={true} />
            <Route path="/farmer/sales" element={<Sales />} exact={true} />
            <Route path="/farmer/customers" element={<Customer />} exact={true} />
            <Route path="/farmer/products/bought products" element={<Products />} exact={true} />
            <Route path="/farmer/products" element={<Products />} exact={true} />
            <Route path="/farmer/products/stock products" element={<Products />} exact={true} />
            <Route path="/farmer/drive/drive" element={<Drive />} exact={true} />
            <Route path="/farmer/drive/books" element={<Books />} exact={true} />
            <Route path='/farmer/notification' element={<Notification />} exact={true} />
            <Route path='/farmer/profile' element={<Profile />} exact={true} />

            <Route path="/farmer/consultation/consultants" element={<Consultation />} exact={true} />
            <Route path="/farmer/consultation/appointments" element={<Appointments />} exact={true} />
            <Route path="/farmer/consultation/sessions" element={<Consultation />} exact={true} />
            <Route path="/farmer/orders" element={<Orders />} exact={true} />
            <Route path="/farmer/invoices" element={<Invoice />} exact={true} />
            <Route path="/farmer/forum" element={<Forum />} exact={true} />
            <Route path="/farmer/drive/profile" element={<DriverProf />} exact={true} />
          </Route>

          <Route path="/consultant" element={<ProtectedRoute allowedRoles={['consultant']}><ConsultantDash /></ProtectedRoute>} exact={true}>
            <Route index element={<Schedule />} exact={true} />
            <Route path='/consultant/notification' element={<Notification />} exact={true} />
            <Route path='/consultant/appointment' element={<Appointment />} exact={true} />
            <Route path='/consultant/schedule' element={<Schedule />} exact={true} />
            <Route path='/consultant/profile' element={<Profile />} exact={true} />
          </Route>

          <Route path="/driver" element={<ProtectedRoute allowedRoles={['driver']}><DriverDash /></ProtectedRoute>} exact={true}>
            <Route index element={<DriveRequest />} exact={true} />
            <Route path="/driver/rides/requests" element={<DriveRequest />} exact={true} />
            <Route path="/driver/customers" element={<DriverCustomer />} exact={true} />
            <Route path="/driver/vehicle" element={<Vehicle />} exact={true} />
            <Route path='/driver/notification' element={<Notification />} exact={true} />
            <Route path='/driver/profile' element={<Profile />} exact={true} />
          </Route>
          <Route path="/admin" element={<ProtectedRoute allowedRoles={['admin']}><AdminDash /></ProtectedRoute>} exact={true}>
            <Route index element={<Client />} exact={true} />
            <Route path="/admin/clients" element={<Client />} exact={true} />
            <Route path="/admin/vehicles" element={<Vehicle />} exact={true} />
            <Route path="/admin/drivers" element={<Driver />} exact={true} />
            <Route path="/admin/farmers" element={<Farmer />} exact={true} />
            <Route path="/admin/consultants" element={<Consultant />} exact={true} />
            <Route path='/admin/notification' element={<Notification />} exact={true} />
            <Route path='/admin/profile' element={<Profile />} exact={true} />
          </Route>
          <Route path="*" element={<NotFound />} exact={true} />
        </Routes>
      </Router>
    </UserRoleProvider>
  )
}

export default App
