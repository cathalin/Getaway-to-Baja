const express = require('express');
const app = express();
require('dotenv').config()

const{
  PORT
} = process.env

app.listen(PORT, () => {
  console.log('App Online at ' + PORT)
})