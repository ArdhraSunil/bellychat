const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

// Create MySQL connection
const db = mysql.createConnection({
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: 'blessy@462002',
  database: 'local server',
  authPlugin: 'mysql_native_password',
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.message);
  } else {
    console.log('Connected to MySQL database.');
    // Create users table if not exists
    db.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255),
        email VARCHAR(255) UNIQUE,
        password VARCHAR(255)
      );
    `, (err) => {
      if (err) {
        console.error('Error creating users table:', err.message);
      } else {
        console.log('Users table created successfully.');
      }
    });
  }
});

// Endpoint to handle user signup
app.post('/signup', (req, res) => {
  const { username, email, password } = req.body;

  // Insert user details into the users table
  db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, password], (err, result) => {
    if (err) {
      console.error('Error inserting user:', err.message);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      console.log('User inserted successfully.');
      res.status(200).json({ message: 'User signed up successfully', userId: result.insertId });
    }
  });
});

// Endpoint to handle user login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Retrieve user details from the users table based on email and password
  db.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (err, results) => {
    if (err) {
      console.error('Error retrieving user:', err.message);
      res.status(500).json({ error: 'Internal Server Error' });
    } else if (results.length === 0) {
      console.log('User not found.');
      res.status(401).json({ error: 'Invalid credentials' });
    } else {
      console.log('User retrieved successfully.');
      const user = results[0];
      res.status(200).json({ message: 'User logged in successfully', user });
    }
  });
});

app.get('/users', (req, res) => {
  // Retrieve all users from the users table
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('Error retrieving users:', err.message);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      console.log('Users retrieved successfully.');
      res.status(200).json(results);
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
