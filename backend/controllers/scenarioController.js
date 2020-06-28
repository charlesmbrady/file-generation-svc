// const db = require('../models');
const axios = require('axios');
const stringify = require('csv-stringify');
const fs = require('fs');

// Defining methods for the primary items controller
module.exports = {
  create: function (req, res) {
    const scenario = req.body;

    return axios
      .post(
        'http://data-generation-svc-staging.herokuapp.com/api/scenario',
        scenario
      )
      .then((dgsData) => {
        const records = dgsData.data;

        res.set('Content-disposition', 'attachment; filename=testing.csv');
        res.set('Content-Type', 'text/csv');
        res.status(200).send('hey,there,whatcha,doin');
      })
      .catch((err) => {
        res.json('error' + err);
      });
  },
};
