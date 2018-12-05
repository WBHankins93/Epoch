const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  name: String,
  price: String,
  category: String,
  image_url: String
})

module.exports = mongoose.model('Products', ProductSchema)
