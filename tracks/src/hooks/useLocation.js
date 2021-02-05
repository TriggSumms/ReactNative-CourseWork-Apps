import { useState, useEffect } from 'react';
import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync
} from 'expo-location';


//exporting hooks
//runs anytime we get an update

//Isfocused is the flag and first argument....the second arg is the callback function for when the users location changes
//shouldTrack is the "isFocused" flag for agument 1
//REMINDER: *isFocused is bool

export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null);

  useEffect(() => {
    let subscriber;

    const startWatching = async () => {
      try {
        const { granted } = await requestPermissionsAsync();
        if (!granted) {
          throw new Error('Location permission not granted');
        }
        
        //cleanup and setting subscriber to the WatchpositionAsync....declaring as a variable of change above
        subscriber = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10
          },
          callback
        );
      } catch (e) {
        setErr(e);
      }
    };

    //without subscriber we dont track....the bool controls the run time...this is a bit of a difficult reusable hook example
    //Here is a codepen that explains some of the logic:
//-----------------------> 

    if (shouldTrack) {
      startWatching();
    } else {
      if (subscriber) {
        subscriber.remove();
      }
      subscriber = null;
    }

    return () => {
      if (subscriber) {
        subscriber.remove();
      }
    };
  }, [shouldTrack, callback]);

  //As an array
  return [err];
};