const {nextISSTimesForMyLocation } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP("174.2.172.162", (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned coordinates: ', coordinates);
// });

// fetchISSFlyOverTimes({ latitude: 52.157, longitude: -106.5614 }, (error, flybys) => {
//   if (error) {
//     console.log("Failed.", error);
//     return;
//   }
//   console.log("Success! flybys: ", flybys);
// });

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    console.log("It didn't work!", error);
  }
  for (const flyby of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(flyby.risetime);
    console.log(`Next pass at ${datetime} for ${flyby.duration} seconds!`);
  }
});