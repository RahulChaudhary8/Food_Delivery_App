// import mongoose from "mongoose";
// export const connectDB = async () => {
//     await mongoose.connect('mongodb://localhost:27017/food-del').then(() => console.log("DB Connected"));
        
    
// }


import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/food-del");
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    throw error;
  }
};