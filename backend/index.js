const express = require('express');
const mongoose = require('mongoose');
const TaskRouter = require('./routes/tasks');
const cors = require('cors');

require('dotenv').config();

const app = express(); 
const PORT = 5000;
const MongoURI = process.env.MONGO_URI;

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(MongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Rohan, Your MongoDB connected'))
    .catch(err => console.error(err));

// Use the task router
app.use('/api/tasks', TaskRouter);

// Root route
app.get('/', (req, res) => {
    res.send("Rohan, You did it, Your server is LIVE!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});