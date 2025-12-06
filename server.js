const express = require('express');
const app = express();

// Serve static files if needed
app.use(express.static('public'));

// Example route
app.get('/', (req, res) => {
  res.send('Hello from Scout!');
});

// Listen on the port provided by EB
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
