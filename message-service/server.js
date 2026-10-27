const express = require('express');

const app = express();
const PORT = 4000;

app.get('/message', (req, res) => {
  res.json({
    message: 'Hello from the message service!'
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Message service running on port ${PORT}`);
});