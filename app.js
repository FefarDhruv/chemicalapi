const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// Connect to your MongoDB database (replace with your database URI)
mongoose.connect('mongodb+srv://dhruvfefar111806:aVxOISYP7q6xDFqS@cluster0.3oouyxo.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());

// Use the products route
app.use('/products', require('./routes/products'));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
