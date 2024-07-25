const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/tasks');
const dotenv = require('dotenv');

// console.log(`dotenv: ${JSON.stringify(dotenv.config('/server'))}`);
dotenv.config('/server');
const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);


mongoose.connect(process.env.MONGO_URI, { })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
