const express = require("express");

const router = express.Router();

router.get("/api/products", async function (req, res) {
  res.send({ message: "Teste de rota lalaland" });
});

module.exports = router;
