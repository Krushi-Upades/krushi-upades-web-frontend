// import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from "./pages/landingPage.tsx";
import Login from './pages/login/login.tsx';
import Signup from './pages/login/signup.tsx';

import Dashboard from './pages/farmers/Dashboard.tsx';
import Price from './pages/farmers/Price.tsx';
import Consultant from './pages/farmers/Consultant.tsx';
import Category from './pages/farmers/Category.tsx';
import Description from './pages/farmers/Description.tsx';

import Profile from './pages/farmers/Profile.tsx';
import Notification from './pages/farmers/Notification.tsx';

import ConfirmSignUpPage from "./pages/signupConfirmation.tsx";
// import CreatePassowrd from './pages/createPassword.tsx';


function App() {

  return (
      <Router>
          <Routes>
              <Route path="/" element={<LandingPage />} />

              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/signupConfirmation" element={<ConfirmSignUpPage />} />
              {/*<Route path="/register" element={<Register />} />*/}

              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />

              <Route path="/farmer_dashboard" element={<Dashboard />} />
              <Route path="/farmer_profile" element={<Profile />} />
              <Route path="/farmer_notification" element={<Notification />} />
              <Route path="/farmer_price" element={<Price />} />
              <Route path="/farmer_consultant" element={<Consultant />} />
              <Route path="/farmer_category" element={<Category />} />
              <Route path="/farmer_category/description/:name" element={<Description />} />

          </Routes>
      </Router>
  )
}

export default App
