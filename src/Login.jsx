import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import './signup.css'; // Import the CSS file

const Login = () => {
  return (
    <div className="bg-div">
      <div className='c-div'>
      <div className="form-container">
          <form>
            <div className="button-container">
            <button className="google-btn" type='button'>
            </button>
            <button className="google-btns" type='button'>
            </button>
            </div>
            <h6 className='continue'>---------------------Or continue with------------------------</h6>
            
            <div className="form-group">
              <input type="email" placeholder="Email" className="wide-input" />
            </div>
            <div className="form-groups">
              <input type="password" placeholder="Password" className="wide-input" />
            </div>
            <button type="submit">Sign Up</button>
            
            <h6 className='member'>Already a member? Log in</h6>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
