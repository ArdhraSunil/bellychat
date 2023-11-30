
import './App.css';
import SignUp from './SignUp';
import Login from './Login';
//import History from './history';
//import Cal from './Cal';
//import Graph from './Graph';
//import Sidebar from './Sidebar';
//import TrackNow from './TrackNow';
//import UserProfileCard from './UserProfileCard';
//import NewCard from './UserProfileCard';
//import LoginCredentialsCard from './UserProfileCard';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import HeroSection from './HeroSection';
//import Footer from './Footer';


function App() {
  return (
    <>
    <Router>
        <Navbar />
        <Routes>
          {/* <Route path='/' exact component={Home} />
        
          <Route path='/login' component={Login} />
          <Route path='/sign-up' component={SignUp} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
