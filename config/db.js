const mongoose = require("mongoose");

 const connectDB = async () => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://nanthinisampath3009:Nanthini@cluster0.xs26c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"   
      )
      .then(() => console.log("🚀 MongoDB Connected..."))
      .catch((err) => console.log(err));
  } catch (error) {
    console.error(error);
  }
};
module.exports = connectDB;