const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Endpoint to receive POST requests and process messages
app.post('/process-message', (req, res) => {
  const message = req.body.message;

  // Process message (replace with actual processing logic)
  const response = processMessage(message);

  // Simulate delay for response
  setTimeout(() => {
    res.json({ response: response });
  }, 1000); // Simulated delay of 1 second
});

// Function to process message (replace with actual logic)
function processMessage(message) {
  // Basic example: just return the message for demonstration
  return `Echo: ${message}`;
}

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
