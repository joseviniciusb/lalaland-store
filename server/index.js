const express = require("express");
const products = require("./routes/products");
const login = require("./routes/login");
const cors = require("cors");
const path = require("path");

const app = express();
const port = process.env.PORT || 3001;

const whitelist = ["http://localhost:3000"];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.static(path.resolve(__dirname, "../client/build")));
app.use(express.json());
app.use(products);
app.use(login);

app.get("/api", (req, res) => {
  res.json({ message: "Teste nodemon com tailwind" });
  console.log("tamo aeeeeeee");
});

app.listen(port, () => {
  console.log(`Example app listening at Port: ${port}`);
});
