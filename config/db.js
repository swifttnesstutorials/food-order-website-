const mongoose = require('mongoose');

const connectdb = async () => {
    try {
        await mongoose.connect("mongodb+srv://aryanandhaaryanandha5:4Bh1827PvvzBJv2V@cluster0.rwrcn.mongodb.net");
        console.log("Connected to the database");
    } catch (error) {
        console.log("Database connection error:", error);
     
        throw error;
    }
};

module.exports = { connectdb };