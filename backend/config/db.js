import mongoose from "mongoose";
export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://rahul_ecommerce:8318676674@cluster0.bj06r.mongodb.net/ecommerce').then(() => console.log("DB Connected"));
        
    
}