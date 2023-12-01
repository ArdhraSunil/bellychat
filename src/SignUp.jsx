import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import './signup.css'; // Import the CSS file
import { Link } from 'react-router-dom';



  const SignUp = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
    };
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };


    const handleSignUp = (e) => {
      e.preventDefault();
  
      // Implement your signup logic here
      const signUpAsync = async () => {
        try {
          const response = await fetch('http://localhost:3001/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({ username, email, password }),
          });
  
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
    
          // Ensure that there is content in the response before trying to parse JSON
          const contentType = response.headers.get('content-type');
          if (contentType && contentType.includes('application/json')) {
            const data = await response.json();
            console.log('User signed up successfully:', data);
            // Redirect to login page or perform other actions as needed
          } else {
            console.error('Error signing up. Unexpected response format:', await response.text());
            // Handle error, show error message, etc.
          }
        } catch (error) {
          console.error('Error:', error.message);
          // Handle network error, show error message, etc.
        }
      };
  
      // Call the asynchronous function
      signUpAsync();
    
  
      // Clear form inputs after submission
      setUsername('');
      setEmail('');
      setPassword('');
    };

  return (
    <div className="bg-div">
      <div className='c-div'>
      <div className="form-container">
          <form onSubmit={handleSignUp}>
            <div className="button-container">
            <button className="google-btn" type='button'>
            </button>
            <button className="google-btns" type='button'>
            </button>
            </div>
            <h6 className='continue'>---------------------Or continue with------------------------</h6>
            <div className="form-group">
              <input type="text" placeholder="Username" className="wide-input" value={username}
                onChange={handleUsernameChange} />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email" className="wide-input" value={email}
                onChange={handleEmailChange} />
            </div>
            <div className="form-groups">
              <input type="password" placeholder="Password" className="wide-input" value={password}
                onChange={handlePasswordChange} />
            </div>
            <button type="submit">Sign Up</button>
            
            <Link to="/login" className="member-link">
              <h6 className='member'>Already a member? Log in</h6>
            </Link>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
