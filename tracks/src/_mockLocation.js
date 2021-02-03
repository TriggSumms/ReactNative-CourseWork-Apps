import * as Location from 'expo-location';


//TEST FILE TO INPUT USERS location progression (FAUX)....testing purpose (not for build)

const tenMetersWithDegrees = 0.0001;

const getLocation = increment => {

  return {
    timestamp: 10000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      longitude: -122.0312186 + increment * tenMetersWithDegrees,
      latitude: 37.33233141 + increment * tenMetersWithDegrees
    }
  };
};

let counter = 0;
//interval runs every second, it gets the current location (long/lat) starts it at 0 and changes and records state as time passes 
setInterval(() => {
  Location.EventEmitter.emit('Expo.locationChanged', {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter)
  });
  counter++;
}, 1000);
