const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { randomBytes } = require("crypto");
const axios = require("axios");
// This generates new ID that the user is trying to create

const app = express();

app.use(bodyParser.json());
app.use(cors());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", async (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;
  posts[id] = {
    id,
    title,
  };

  await axios.post("http://localhost:4005/events", {
    type: "Post Created",
    data: {
      id,
      title,
    },
  });

  res.status(201).send(posts[id]);
});

app.post("/events",(req,res)=>{
  console.log("Received new Event: ",req.body.type)
  res.send({});
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("Listening to Port " + PORT);
});
