const mongoose = require('mongoose');



const productSchema = new mongoose.Schema({
    // sku: {
    //     type: String,
    //     required: true,
    //     minLength: 6,
    //     maxLength: 6
    // },
    nombre: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 130,
        trim: true
    },
    valor: {
        type: Number,
        required: true,
        min: 0,
        max: 1000000000
    },

    img:{
         String,
    }
    // stock: {
    //     type: Number,
    //     default: 0,
    //     required: true,
    //     min: 0
    // }
})


const Product = mongoose.model("productos", productSchema)

module.exports = Product;




