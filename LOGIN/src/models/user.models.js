import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        required: true,
        trim: true
    },

    email : {
        type:String,
        unique:true,
        require:true,
        trim:true
    },

    password : {
        type:String,
        required:true,
    }
},{
    timestamps: true //crea y actualiza las fechas de creacion de los schemas
});

export default mongoose.model("User", userSchema);