const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
const connectDB = require("./config/db.js")
// Bodyparser middleware
app.use(cors());
app.use(express.json());
dotenv.config();

// DB Config
const db = process.env.DATABASE_URL;

// Connect to MongoDB
// mongoose
//     .connect("mongodb+srv://nanthinisampath3009:Nanthini@cluster0.xs26c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
//     .then(() => console.log('🚀 MongoDB Connected...'))
//     .catch((err) => console.log(err));

// Routes
const auth = require('./routes/api/auth');
const bookings = require('./routes/api/bookings');
const hotels = require('./routes/api/hotels');
const rooms = require('./routes/api/rooms');
app.get("/",(req,res)=>{res.send("work")})
// Use Routes
app.use('/api/auth', auth);
app.use('/api/bookings', bookings);
app.use('/api/hotels', hotels);
app.use('/api/rooms', rooms);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, async() =>{
    await connectDB();
console.log(`✈️  Server running on port http://localhost:${port}`);
});