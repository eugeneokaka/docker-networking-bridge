const express = require('express');

const app = express();
const PORT = 3000;
app.get('/', async (req, res) => {
  try {
    
    const response = await fetch(
      'http://message-service:4000/message'
    );

    const data = await response.json();

    res.json({
      api: 'Hello from the main Express API!',
      messageService: data
    });
  } catch (error) {
    console.error('Message service request failed:', error.message);

    res.status(502).json({
      error: 'Could not reach the message service'
    });
  }
});


app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});