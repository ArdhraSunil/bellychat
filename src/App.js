import React, { useState } from 'react';
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
import TrackNow from './TrackNow';
import Sidebar from './Sidebar';
//import UserProfileCard from './UserProfilePage';
import History from './History';
//import UserProfilePage from './UserProfilePage';
import UserProfileCard from './UserProfileCard';
import { UserProvider } from './UserContext';


// function App() {
//   return (
//     <>
//     <Router>
//          <Navbar /> 
//         {/* <Sidebar/> */}
//         <Routes>
//           {/* <Route path='/' exact component={Home} />
        
//           <Route path='/login' component={Login} />
//           <Route path='/sign-up' component={SignUp} /> */}
          
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/sign-up" element={<SignUp />} /> 
//           <Route
//           path="/tracknow"
//           element={
//             <>
//               <Sidebar />
//               <TrackNow />
//             </>
//           }
//         />


//           {/* <Route path="/userprofilecard" element={<UserProfileCard/>} />
//           <Route path="/tracknow" element={<TrackNow/>} />
//           <Route path="/history" element={<History/>} /> */}
//         </Routes>
//       </Router>
//     </>
//   );
// }




// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <>
//       <Router>
//         {isLoggedIn && <Navbar isLoggedIn={isLoggedIn} />}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route
//             path="/login"
//             element={<Login setIsLoggedIn={setIsLoggedIn} />}
//           />
//           <Route path="/sign-up" element={<SignUp />} />
//           <Route
//             path="/tracknow"
//             element={
//               <>
//                 {isLoggedIn && <Sidebar />}
//                 <TrackNow />
//               </>
//             }
//           />

//           <Route path="/userprofilecard" element={<UserProfileCard />} />
//           <Route path="/history" element={<History />} />
//         </Routes>
//       </Router>
//     </>
//   );
// }









function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UserProvider>
      <Router>
        {isLoggedIn && <Navbar isLoggedIn={isLoggedIn} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="/sign-up" element={<SignUp />} />
          <Route
            path="/tracknow"
            element={
              <>
                {isLoggedIn && <Sidebar />}
                <TrackNow />
              </>
            }
          />


          <Route path="/userprofilecard" element={<UserProfileCard />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </Router>
      </UserProvider>
  );
}


export default App;
