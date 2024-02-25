import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import './signup.css'; 
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import styles from "./s.module.css";



  const SignUp = ({ isLoggedIn }) => {

    // const [username, setUsername] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // const handleUsernameChange = (e) => {
    //   setUsername(e.target.value);
    // };
  
    // const handleEmailChange = (e) => {
    //   setEmail(e.target.value);
    // };
  
    // const handlePasswordChange = (e) => {
    //   setPassword(e.target.value);
    // };


    // const handleSignUp = (e) => {
    //   e.preventDefault();
  

    //   const signUpAsync = async () => {
    //     try {
    //       const response = await fetch('http://localhost:3001/signup', {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //           'Access-Control-Allow-Origin': '*',
    //         },
    //         body: JSON.stringify({ username, email, password }),
    //       });
  
    //       if (!response.ok) {
    //         throw new Error(`HTTP error! Status: ${response.status}`);
    //       }
    
         
    //       const contentType = response.headers.get('content-type');
    //       if (contentType && contentType.includes('application/json')) {
    //         const data = await response.json();
    //         console.log('User signed up successfully:', data);
           
    //       } else {
    //         console.error('Error signing up. Unexpected response format:', await response.text());
           
    //       }
    //     } catch (error) {
    //       console.error('Error:', error.message);
          
    //     }
    //   };
  
      
    //   signUpAsync();
    
  
      
    //   setUsername('');
    //   setEmail('');
    //   setPassword('');
    // };

  return (
    // <>
    // <Navbar isLoggedIn={isLoggedIn} />
    // <div className="bg-div">
    //   <div className='c-div'>
    //   <div className="form-container">
    //       <form onSubmit={handleSignUp}>
    //         <div className="button-container">
    //         <button className="google-btn" type='button'>
    //         </button>
    //         <button className="google-btns" type='button'>
    //         </button>
    //         </div>
    //         <h6 className='continue'>---------------------Or continue with------------------------</h6>
    //         <div className="form-group">
    //           <input type="text" placeholder="Username" className="wide-input" value={username}
    //             onChange={handleUsernameChange} />
    //         </div>
    //         <div className="form-group">
    //           <input type="email" placeholder="Email" className="wide-input" value={email}
    //             onChange={handleEmailChange} />
    //         </div>
    //         <div className="form-groups">
    //           <input type="password" placeholder="Password" className="wide-input" value={password}
    //             onChange={handlePasswordChange} />
    //         </div>
    //         <button type="submit">Sign Up</button>
            
    //         <Link to="/login" className="member-link">
    //           <h6 className='member'>Already a member? Log in</h6>
    //         </Link>
            
    //       </form>
    //     </div>
    //   </div>
    // </div>
    // </> 

    <>
    <Navbar isLoggedIn={isLoggedIn} />
      <div className={styles["textwrapper"]}>
        <form action="" className={styles["form-wrapper"]}>
          <h1>Sign-up</h1>
          <input type="text" className={styles["textbox"]} placeholder="username" />
  
          <input type="text" className={styles["textbox"]} placeholder="Email" />
          
  
          <input
            type="password"
            className={styles["textbox"]}
            placeholder="Password"
          />
          <input type="submit" name="" id="" className={styles["textbox"]} />
        </form>
      </div>
      </>

  );
};

export default SignUp;
