const app = require('./app');

const port = process.env.PORT || 8000;

app.listen(port, (err) => {
  if (err) {
    console.log(`Server listening error: ${err.message}`);
  }
  console.log(`Server is listening on port ${port}`);
});
