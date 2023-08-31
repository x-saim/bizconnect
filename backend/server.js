const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect to MongoDB Database
connectDB();

//Initializing Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

//Define Routes

app.use('/api/users', require('./routes/users'));
//
//
//
//
//

//PORT

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
