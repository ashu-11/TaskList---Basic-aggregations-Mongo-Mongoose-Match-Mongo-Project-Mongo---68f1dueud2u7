const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;
app.use(cors());

app.use(express.json());
const { connector } = require("./connector");

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

exports.app;
