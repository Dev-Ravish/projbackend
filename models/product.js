const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;

const productSchema = new mongoose.Schema({
        name:{
            type: String,
            required: true,
            trim:true,
            maxlength: 32,
        },
        description:{
            type: String,
            required: true,
            trim: true,
            maxlength:2000,
        },
        price:{
            type:Number,
            required: true,
        },
        stock:{
            type:Number,
            required:true,
        },
        sold:{
            type:Number,
            default:0,
        },
        category: {
            type: ObjectId,
            ref: "Category",
            required: true,
        },

        image: {
            data: Buffer,
            contentType: String,
        }

}, {timestamps: true});

module.exports = mongoose.model("Product", productSchema);