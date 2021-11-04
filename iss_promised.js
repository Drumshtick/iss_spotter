const request = require('request-promise-native');

const fetchMyIP = function() {
  return request('https://api64.ipify.org');
};

const fetchCoordsByIP = function(ip) {
  return request(`https://freegeoip.app/json/${ip}`);
};

const fetchISSFlyOverTimes = function(coords) {
  let lat = JSON.parse(coords).latitude;
  let long = JSON.parse(coords).longitude;
  return request(`https://iss-pass.herokuapp.com/json/?lat=${lat}&lon=${long}`);
};

const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((data) => {
      const { response } = JSON.parse(data);
      return response;
    });
};

module.exports = { nextISSTimesForMyLocation };