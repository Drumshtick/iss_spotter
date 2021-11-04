const request = require('request');

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const fetchMyIP = function(callback) {
  request('https://api64.ipify.org', (error, response, body) => {
    if (error !== null) {
      callback(error, null);
    } else if (body.length === 0) {
      callback("No response", null);
    } else {
      let ip = body;
      callback(null, ip);
    }
  });
};
module.exports = { fetchMyIP };