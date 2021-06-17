const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
// This generates new random ID that the user is trying to create

const app = express();

app.use(bodyParser.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

const commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByPostId[req.params.id]) || [];
});

app.post("/posts/:id/comments", (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;
  const comments = commentsByPostId[req.params.id] || [];
  comments.push({ id: commentId, content });
  commentsByPostId[req.params.id] = comments;
  res.status(201).send(comments);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("Listening to Port " + PORT);
});
