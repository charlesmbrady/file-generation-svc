import axios from 'axios';

export default {
  newScenario: function (scenario) {
    return axios.post('/api/scenario', scenario).catch((err) => {
      throw err;
    });
  },
};
