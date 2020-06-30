// const db = require('../models');
const axios = require('axios');
const stringify = require('csv-stringify');
const fs = require('fs');

// Defining methods for the primary items controller
module.exports = {
  create: function (req, res) {
    const scenario = req.body;

    return axios
      .post('http://data-generation-svc.herokuapp.com/api/scenario', scenario)
      .then((dgsData) => {
        const records = dgsData.data;

        res.json(records);
      })
      .catch((err) => {
        console.log(err);
        res.json('error' + err);
      });
  },
};
