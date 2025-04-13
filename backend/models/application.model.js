import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    businessinfo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Businessinfo',
        required: true
    },
    applicant:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true     
    },
    status:{
        type:String,
        enum:['pending','accepted','rejected'],
        default:'pending'
    }
},{timestamps:true});
export const Application = mongoose.model("Application", applicationSchema)