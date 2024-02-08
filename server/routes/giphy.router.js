const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const GIPHY_API_KEY = process.env.GIPHY_API_KEY;

router.get("/", (req, res) => {
  const searchText = req.query.searchText
  axios
    .get(
      `http://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${searchText}`
    )
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      res.sendStatus(500);
    });
});

module.exports = router;