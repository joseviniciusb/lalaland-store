const express = require("express");

const router = express.Router();
const Product = require('../models/product')

router.get("/api/products", async function (req, res) {
  console.log("dsadsadsadsadsadsadasdsadsadsa");
  const products = await Product.findAll()
  res.status(200).json( products )
});

router.post("/api/product", async function (req, res) {
  const product = req.body;
  console.log(product);
  res.status(202).json( product );
});

module.exports = router;
