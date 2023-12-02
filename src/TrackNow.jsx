import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const TrackNow = () => {
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

  const handleSubmit = () => {
    // You can handle the submission of answers here.
    console.log(answers);
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
