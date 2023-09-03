const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect to MongoDB Database
connectDB();

//Initializing Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

//Define Routes

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
//app.use('/api/publicpost', require('./routes/api/publicpost'));
//app.use('/api/jobpost', require('./routes/api/jobpost'));
//app.use('/api/profile', require('./routes/api/profile'));

//PORT

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
