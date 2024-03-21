const mongoose = require('mongoose')


const ProductSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true,"please enter product name"]
    },
    quantity: {
      type: Number,
      required: true,
      default: 0
    },
    price: {
      type: Number,
      required: true,
      default: 0
    },
    Image:{
        type:String,
        required: false
    }
  })

module.exports = mongoose.model('Products', ProductSchema)

