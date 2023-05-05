const express = require("express");
const router = express.Router();
const User = require("../models/user")

router.get("/api/users", async function (req, res) {

  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error('Erro ao buscar usuários', error);
    return res.status(500).json({ message: 'Erro ao buscar usuários' });
  }

});


module.exports = router;
