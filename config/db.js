require('dotenv').config();

const mongoose = require('mongoose');
function connectDB() {
    // Database connection 🥳

    mongoose.connect(process.env.MONGO_CONNECTION_URL, {

        useNewUrlParser: true, 
        useUnifiedTopology: true 
        
        }, error => {
        if(error) throw error;
        console.log('Connected to MongoDB!!!')
        });
}

// mIAY0a6u1ByJsWWZ

module.exports = connectDB;