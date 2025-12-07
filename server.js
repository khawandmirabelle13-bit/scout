const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// Default route → always serve Home.html first
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Home.html"));
});

// THEN serve static files (CSS, JS, images, other HTML pages)
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
