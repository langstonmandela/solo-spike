const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios')
const router = express.Router();
require ('dotenv').config();
const GIPHY_API_KEY = process.env.GIPHY_API_KEY;

router.get("/:query", (req, res) => {
  const searchText = req.params.query;
  console.log("search giphy,", searchText);
  // https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}
  console.log(GIPHY_API_KEY);
  axios
    .get(
      `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${searchText}`
      
    )
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      res.sendStatus(500);
    });
});

module.exports = router;