import axios from 'axios';

export default {
  newScenario: function (scenario) {
    return axios.post('/api/scenario', scenario).catch((err) => {
      throw err;
    });
  },
  getDatatypes: function () {
    return axios
      .get('https://data-generation-svc-staging.herokuapp.com/api/datatypes')
      .catch((err) => {
        throw err;
      });
  },
};
