const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT || 4005;

app.post("/event", (req, res) => {
  const event = req.body;
  axios.post("http://localhost:4000/events", event);
  axios.post("http://localhost:4001/events", event);
  axios.post("http://localhost:4002/events", event);
  res.send({ status: "Ok" });
});
app.listen(PORT, () => {
  console.log("Listening to PORT " + PORT);
});
