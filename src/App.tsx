// import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from "./pages/landingPage.tsx";
import Login from './pages/login.tsx';

import Dashboard from './pages/farmers/Dashboard.tsx';
import Price from './pages/farmers/Price.tsx';

function App() {

  return (
      <Router>
          <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login-signup" element={<Login />} />

              <Route path="/farmer_dashboard" element={<Dashboard />} />
              <Route path="/farmer_price" element={<Price />} />

          </Routes>
      </Router>
  )
}

export default App
