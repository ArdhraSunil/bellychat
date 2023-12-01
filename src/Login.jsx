import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import './signup.css'; // Import the CSS file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*', // Include this only if needed; it's usually handled by the server
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
  
      const data = await response.json();
  
      // Handle the response from the server
      if (response.ok) {
        console.log('User logged in successfully:', data);
        // Redirect or perform other actions as needed
      } else {
        console.error('Error logging in:', data.error);
        // Handle error, show error message, etc.
      }
    } catch (error) {
      console.error('Error:', error.message);
      // Handle network error, show error message, etc.
    }
  };

  return (
    <div className="bg-div">
      <div className='c-div'>
      <div className="form-container">
          <form onSubmit={handleLogin}>
            <div className="button-container">
            <button className="google-btn" type='button'>
            </button>
            <button className="google-btns" type='button'>
            </button>
            </div>
            <h6 className='continue'>---------------------Or continue with------------------------</h6>
            
            <div className="form-group">
              <input type="email" placeholder="Email" className="wide-input" value={email}
                onChange={handleEmailChange} />
            </div>
            <div className="form-groups">
              <input type="password" placeholder="Password" className="wide-input" value={password}
                onChange={handlePasswordChange} />
            </div>
            <button type="submit">Login</button>
            
            <h6 className='member'>Already a member? Log in</h6>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
