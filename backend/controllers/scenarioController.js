// const db = require('../models');
const axios = require('axios');

// Defining methods for the primary items controller
module.exports = {
  create: async function (req, res) {
    const scenario = req.body;

    return axios
      .post(
        'http://data-generation-svc-staging.herokuapp.com/api/scenario',
        scenario
      )
      .then((dgsData) => {
        res.json(dgsData.data);
      })
      .catch((err) => {
        res.json('error' + err);
      });
  },
};
