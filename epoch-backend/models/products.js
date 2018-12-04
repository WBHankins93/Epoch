const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  id: String,
  name: String,
  price: String,
  image_url: String
})

module.exports = mongoose.model('Products', ProductSchema)
