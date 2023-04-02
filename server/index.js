const express = require("express")
const cors = require("cors")
const app = express()
const port = process.env.PORT || 3001

const whitelist = ["http://localhost:3000"]
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}
app.use(cors(corsOptions))

app.get("/", (req, res) => {
  res.send({ message: "Hello World!" })
})

app.listen(port, () => {
  console.log(`Example app listening at Port: ${port}`)
})