import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://root:Carambolo13@projectmean.usymmnl.mongodb.net/login");
        console.log(">> DB Connect");
    } catch (error) {
        console.log(error)
    }
}