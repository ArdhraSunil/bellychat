import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Typography, TextField, Button } from '@mui/material';

const TrackNow = () => {
  const location = useLocation();
  const userEmail = location.state?.userEmail;
  const [answers, setAnswers] = useState({
    drinkingWater: '',
    showers: '',
    showerDuration: '',
    waterTapsUsage: '',
    otherUsage: '',
  });


    const handleChange = (question, value) => {
    setAnswers({ ...answers, [question]: value });
  };


  const handleSubmit = async () => {
    try {
      // Get the current date in ISO format (e.g., 2023-12-09T12:34:56)
      const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ');

      // Prepare data to send to the backend
      const data = {
        answers,
        date: currentDate,
        userEmail: userEmail,
      };

      console.log('Data to be submitted:', data);

      // Send a POST request to the backend
      const response = await fetch('http://localhost:3001/trackData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Data submitted successfully');
      } else {
        console.error('Error submitting data');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };




  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh',marginLeft:'550px' }}>
    <Container>
      <Typography variant="h4" gutterBottom>
        TrackNow
      </Typography>

      {/* List of Questions and Text Boxes in the Same Line */}
      <div>
        <div>
          <Typography>1. How many litres of water used for drinking?</Typography>
          <TextField
            variant="outlined"
            value={answers.drinkingWater}
            onChange={(e) => handleChange('drinkingWater', e.target.value)}
          />
        </div>

        <div>
          <Typography>2. How many showers on average you took today?</Typography>
          <TextField
            variant="outlined"
            value={answers.showers}
            onChange={(e) => handleChange('showers', e.target.value)}
          />
        </div>

        <div>
          <Typography>3. What was the average length (in minutes) of each shower?</Typography>
          <TextField
            variant="outlined"
            value={answers.showerDuration}
            onChange={(e) => handleChange('showerDuration', e.target.value)}
          />
        </div>

        <div>
          <Typography>4. How many times you use water taps for shaving, brushing, washing, etc.?</Typography>
          <TextField
            variant="outlined"
            value={answers.waterTapsUsage}
            onChange={(e) => handleChange('waterTapsUsage', e.target.value)}
          />
        </div>

        <div>
          <Typography>5. Any additional water use such as watering, cleaning, etc.?</Typography>
          <TextField
            variant="outlined"
            value={answers.otherUsage}
            onChange={(e) => handleChange('otherUsage', e.target.value)}
          />
        </div>
      </div>

      {/* Enter Button */}
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Enter
      </Button>
    </Container>
    </div>
  );
};

export default TrackNow;
