const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT || 4005;

app.post("/events",  (req, res) => {
  try {
     const event = req.body;
    axios.post("http://localhost:4000/events", event);
    axios.post("http://localhost:4001/events", event);
    axios.post("http://localhost:4002/events", event);
    res.send({ status: "Ok" });
  } catch (err) {
    res.status(404).send(err.message);
  }
});
app.listen(PORT, () => {
  console.log("Listening to PORT " + PORT);
});

