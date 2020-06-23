const db = require('../models');
const axios = require('axios');

// Defining methods for the primary items controller
module.exports = {
  getData: async function (req, res) {
    return axios
      .get('http://data-generation-svc-staging.herokuapp.com/api/datapoc')
      .then((dgsData) => {
        if (dgsData) {
          console.log('its there');
          console.log(dgsData.data);
        }
        res.json(dgsData.data);
      })
      .catch((err) => {
        res.json('error' + err);
      });
  },
};
