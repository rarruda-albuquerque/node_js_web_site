const express = require("express");
const path = require("path");
const app = express();
const port = 8080;

/*
app.get("/", (req, res) => {
  res.send("Hello World!");
});
*/

const staticFiles = path.join(__dirname, "../public");
app.use(express.static(staticFiles));

console.log(`serving static files from ${staticFiles}`);
console.log('running on!!');

// sendFile will go here
app.get("/", function (req, res) {
  res.sendFile(staticFiles, "/index.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
