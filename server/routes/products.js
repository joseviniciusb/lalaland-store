const express = require("express");

const router = express.Router();

const db = require("../models/db");

router.get("/api/products", async function (req, res) {
  console.log("dsadsadsadsadsadsadasdsadsadsa");
  res.send({ message: "Teste de rota lalalandDD" });
});

router.post("/api/product", async function (req, res) {
  const product = req.body;
  console.log(product);
  res.status(202).json( product );
});

module.exports = router;
