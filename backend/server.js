const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

// Mitali's code
const postRoute = require('./routes/api/postsRoute')

//Connect to MongoDB Database
connectDB();

// Enable CORS for all routes
app.use(cors());

// Mitali's code
app.use(express.json({ limit : '25mb' }));

//Initializing Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

//Define Routes

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/publicposts', require('./routes/api/publicpost'));
app.use('/api/jobposts', require('./routes/api/jobpost'));

// Mitali's code
app.use('/api/posts', postRoute)

//PORT

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
