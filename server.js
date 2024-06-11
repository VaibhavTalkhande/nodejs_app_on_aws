const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
  <h1 style="color: red;">
    Hello World!
  </h1>
  <h2>I am a Node.js Application</h2>
  <h3>Running on Aws</h3>
  <h4>Vaibhav Talkhande is a DevOps Engineer</h4>
  `);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
  console.log("http://localhost:3000");
});
