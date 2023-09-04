const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect to MongoDB Database
connectDB();

// Enable CORS for all routes
app.use(cors());

//Initializing Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

//Define Routes

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/publicposts', require('./routes/api/publicpost'));
app.use('/api/jobposts', require('./routes/api/jobpost'));

//PORT

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
