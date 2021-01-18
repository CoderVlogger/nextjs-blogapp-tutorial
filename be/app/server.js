const express = require("express");

const app = express();

const hostname = "127.0.0.1";
const port = 3000;

let posts = [
  { id: 1, slug: "post1", title: "Post #1", author: "Alex" },
  { id: 2, slug: "post2", title: "Post #2", author: "John" },
  { id: 3, slug: "post3", title: "Post #3", author: "Boris" },
  { id: 4, slug: "post4", title: "Post #4", author: "Adam" },
];

function createError(status, message) {
  var err = new Error(message);
  err.status = status;
  return err;
}

app.get("/posts/", (req, res) => {
  console.log("Call to /posts/")

  let body = {
    posts,
  };

  res.json(body);
});

app.get("/posts/:post/", (req, res, next) => {
  const { post } = req.params;
  postID = post - 1;

  console.log(`Call to /post/${post}/`)

  if (posts[postID]) {
    next();
  } else {
    next(createError(404, "failed to find post"));
  }

  let body = {
    post: posts[postID],
  };

  res.json(body);
});

app.listen(port, hostname, () => {
  console.log(`Example app listening at http://${hostname}:${port}`);
});
