const { res } = require("express");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 80;

app.post("/post", (req, res) => {
  console.log("Connection to /post recieved!");
  res.redirect("/");
});

app.listen(PORT, console.log(`Server running on http://localhost:${PORT}`));
