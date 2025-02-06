const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Wrap the asynchronous operation in a Promise to handle errors
  Promise.resolve().then(() => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      res.send('Success!');
    } else {
      // Use try...catch to handle exceptions
      throw new Error('Something went wrong!');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  });
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Add your custom handling logic here
});
app.listen(3000, () => console.log('Server listening on port 3000'));