const express = require('express');
const router = express.Router();

const Products = require('../models/products');



router.get('/', async (req, res) => {

  try {
    const allWatches = await Products.find();

    res.json({
        status: 200,
        data: allWatches
      });

  } catch (err) {
    res.send(err)
  }
});


router.post('/', async (req, res) => {

  try {
    const createdWatches = await Products.create(req.body);
    console.log(createdWatches)
    res.json({
      status: 200,
      data: createdWatches
    })

  } catch (err) {
    res.send(err)
  }
})







module.exports = router;
