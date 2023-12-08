import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Sidebar from './Sidebar';
import { useUserContext } from './UserContext';

const cardContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  height: '100vh',
  padding: '0 20px', // Add left padding to align to the right
  margin:'1cm auto 0',

};

const UserProfileCard = () => {
  const { userEmail } = useUserContext();
  const [isEditing, setEditing] = useState(true);
  const [userData, setUserData] = useState({
    name: '',
    email: userEmail, 
    address: '',
    phoneNumber: '',
    city: '',
    country: '',
    pincode: '',
  });
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`http://localhost:3001/userProfile/${userEmail}`);
        if (response.ok) {
          const profileData = await response.json();
          setUserProfile(profileData);
          setUserData({
            ...userData,
            ...profileData,
          });
        }
      } catch (error) {
        console.error('Error fetching user profile:', error.message);
      }
    };

    fetchProfile();
  }, [userEmail]);


const handleEditClick = () => {
    setEditing(!isEditing);
    if (!isEditing) {
      saveUserProfile();
    }
    
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };


  // const saveUserProfile = async () => {
  //   try {
  //     const response = await fetch('http://localhost:3001/userProfile', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ ...userData, email: userEmail }),
  //     });

  //     if (response.ok) {
  //       console.log('User profile updated successfully.');
  //     } else {
  //       console.error('Failed to update user profile.');
  //     }
  //   } catch (error) {
  //     console.error('Error updating user profile:', error.message);
  //   }
  // };

  const saveUserProfile = async () => {
    try {
      const endpoint = userProfile ? `http://localhost:3001/userProfile/${userEmail}` : 'http://localhost:3001/userProfile';
      const method = userProfile ? 'PUT' : 'POST';

      const response = await fetch(endpoint, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log('User profile updated successfully.');
      } else {
        console.error('Failed to update user profile.');
      }
    } catch (error) {
      console.error('Error updating user profile:', error.message);
    }
  };


  const cardStyle = {
    width: 900,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '6cm',
  };

 
  return (
    <div>
    <Sidebar />
    <Container maxWidth="sm" style={cardContainerStyle}>
      <Card variant="outlined" style={cardStyle}>
      
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                name="name"
                label="Name"
                value={userData.name}
                onChange={handleChange}
                disabled={!isEditing}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="email"
                label="Email"
                value={userData.email}
                onChange={handleChange}
                disabled
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="address"
                label="Address"
                value={userData.address}
                onChange={handleChange}
                disabled={!isEditing}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="phoneNumber"
                label="Phone Number"
                value={userData.phoneNumber}
                onChange={handleChange}
                disabled={!isEditing}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="city"
                label="City"
                value={userData.city}
                onChange={handleChange}
                disabled={!isEditing}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="country"
                label="Country"
                value={userData.country}
                onChange={handleChange}
                disabled={!isEditing}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="pincode"
                label="Pincode"
                value={userData.pincode}
                onChange={handleChange}
                disabled={!isEditing}
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button
              onClick={handleEditClick}
              variant="contained"
              color="primary"
            >
              {isEditing ? 'Save Changes' : 'Edit'}
            </Button>
          </Grid>
        </CardContent>
      </Card>
     </Container> 
     </div>
  );
};

export default UserProfileCard;

// const NewCard = () => {
//   const newCardStyle = {
//     width: 500,
//     height: '30vh',
//   };
//   const cardContainerWithGap = {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     margin: '2cm', // Add 1cm margin to the top and bottom to create a gap
//   };
//   const userProfileCardStyle = {
//     display: 'flex',
//     justifyContent: 'space-between', // Align the items to the right
//     alignItems: 'center',
//     padding: '1.5rem',
//   };
//   const profileImageStyle = {
//     width: '110px', // Adjust the size of the profile picture as needed
//     height: '110px',
//     borderRadius: '100%', // Make the image circular
//     backgroundColor: 'lightgrey', // Set a background color for the placeholder image
//     alignItems:'left',
//   };
//   const updateButtonStyle = {
//     marginTop: '1rem', // Add spacing between the image and the button
//   };
//   const [userProfileImage, setUserProfileImage] = useState(null); // State to hold the user's profile image

//   // Function to handle updating the user profile picture
//   const handleUpdateProfilePicture = () => {
//     // Implement functionality to update the user's profile picture here
//     // You can use a file input or a dialog to let the user choose or upload an image
//     // Once an image is selected, you can update the userProfileImage state
//   };
//   return (
//     <div style={cardContainerWithGap}>
//       <Card variant="outlined" style={newCardStyle}>
//         <CardContent>
//         <div style={userProfileCardStyle}>
//             <img
//               src={userProfileImage || 'img profile.jpg'} // Use a placeholder image if no user image is set
//               style={profileImageStyle}
//             />
//             <div>
//               <p>Update your profile picture</p>           
//                <Button
//               variant="contained"
//               color="primary"
//               onClick={handleUpdateProfilePicture}
//               style={updateButtonStyle}
//             >
//             Update            
//              </Button>
//           </div>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// const LoginCredentialsCard = () => {
//   const credentialsCardStyle = {
//     width: 500,
//     margin: 'auto', // Center-align the card

//   };

//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handlePasswordReset = () => {
//     // Implement functionality to reset the password and send an email
//   };

//   return (
//     <Card variant="outlined" style={credentialsCardStyle}>
//       <CardContent>
//         <Grid container spacing={2} className="container">
//           <Grid item xs={6}>
//             <label htmlFor="username">Username</label>
//           </Grid>
//           <Grid item xs={6}>
//             <TextField id="username" value={username} onChange={(e) => setUsername(e.target.value)} fullWidth />
//           </Grid>
//           <Grid item xs={6}>
//             <label htmlFor="password">Password</label>
//           </Grid>
//           <Grid item xs={6}>
//             <TextField id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} fullWidth />
//           </Grid>
//           <Grid item xs={12}>
//           </Grid>
//           <Grid item xs={12}>
//             <p>Forgot your password? <a href="#">Reset it here.</a></p>
//           </Grid>
//         </Grid>
//       </CardContent>
//     </Card>
//   );
// };




