const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
// const jwt = require('jsonwebtoken');

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

        db.query(`
  CREATE TABLE IF NOT EXISTS user_profile (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    address VARCHAR(255),
    phone_number VARCHAR(20),
    city VARCHAR(100),
    country VARCHAR(100),
    pincode VARCHAR(20)
  );
`, (err) => {
  if (err) {
    console.error('Error creating user_profile table:', err.message);
  } else {
    console.log('User profile table created successfully.');
  }
});
        
 }
      });
    }
  });


// db.query(`
//       DROP TABLE IF EXISTS user_profile;
//     `, (err) => {
//       if (err) {
//         console.error('Error dropping user_profile table:', err.message);
//       } else {
//         console.log('user_profile table dropped successfully.');
//       }
//     });
//   }
// });
//   }
// });






app.post('/signup', (req, res) => {
  const { username, email, password } = req.body;

  
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




// app.post('/userProfile', (req, res) => {
//   const { name, address, phoneNumber, city, country, pincode, email  } = req.body;
//   console.log('Request Body:', req.body);
//   // Insert user profile details into user_profile table
//   db.query(
//     'INSERT INTO user_profile (name, address, phone_number, city, country, pincode, email) VALUES (?, ?, ?, ?, ?, ?, ?)',
//     [name, address, phoneNumber, city, country, pincode, email],
//     (err, result) => {
//       if (err) {
//         console.error('Error inserting user profile:', err.message);
//         res.status(500).json({ error: 'Internal Server Error' });
//       } else {
//         console.log('User profile inserted successfully.');
//         res.status(200).json({ message: 'User profile updated successfully', userProfileId: result.insertId });
//       }
//     }
//   );
// });

app.get('/userProfile/:email', (req, res) => {
  const email = req.params.email;

  // Retrieve user profile details based on email
  db.query('SELECT * FROM user_profile WHERE email = ?', [email], (err, results) => {
    if (err) {
      console.error('Error retrieving user profile:', err.message);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      console.log('User profile retrieved successfully.');
      res.status(200).json(results[0] || {}); // Return an empty object if no profile found
    }
  });
});

app.post('/userProfile', (req, res) => {
  const { name, address, phoneNumber, city, country, pincode, email } = req.body;

  // Insert or update user profile details into user_profile table
  const query = `
    INSERT INTO user_profile (name, address, phone_number, city, country, pincode, email)
    VALUES (?, ?, ?, ?, ?, ?, ?)
    ON DUPLICATE KEY UPDATE
    name = VALUES(name),
    address = VALUES(address),
    phone_number = VALUES(phone_number),
    city = VALUES(city),
    country = VALUES(country),
    pincode = VALUES(pincode);
  `;

  db.query(query, [name, address, phoneNumber, city, country, pincode, email], (err, result) => {
    if (err) {
      console.error('Error inserting/updating user profile:', err.message);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      console.log('User profile inserted/updated successfully.');
      res.status(200).json({ message: 'User profile updated successfully', userProfileId: result.insertId });
    }
  });
});









app.delete('/deleteAllEntries', async (req, res) => {
  try {
    // Delete all entries from the users table
    const deleteUserQuery = 'DELETE FROM users';
    await db.query(deleteUserQuery);

    // Delete all entries from the user_profile table
    const deleteProfileQuery = 'DELETE FROM user_profile';
    await db.query(deleteProfileQuery);

    console.log('All entries deleted successfully.');
    res.status(200).json({ message: 'All entries deleted successfully' });
  } catch (error) {
    console.error('Error deleting entries:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
