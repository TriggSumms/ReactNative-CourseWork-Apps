//import '../_mockLocation';
import React, { useContext, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
//import { withNavigationFocus } from 'react-navigation';
//import { requestPermissionsAsync} from 'expo-location';
// import React, { useEffect, useState } from 'react';
// import { Accuracy, watchPositionAsync } from 'expo-location';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';
import { FontAwesome } from '@expo/vector-icons';


//Is focused is the props object imported from RN's withNavigationFocus....it allows for an event listener to tell if the screen is focused....through a [bit]


const TrackCreateScreen = ({ isFocused }) => {
    const {
        //state declared to recording....."state.recording"
        state: { recording },
        addLocation
    } = useContext(LocationContext);
    const callback = useCallback(
        location => {
            addLocation(location, recording);
        },
        [recording] //just an array of the current recordings and it will rebuild if there is a change 
        //basically just returning the callback v1 until a new value is given in the array....then a new function is built 
    );
    const [err] = useLocation(isFocused || recording, callback);

    return (
         <SafeAreaView forceInset={{ top: 'always' }}>
            {/* <View> */}
            <Text h2>Create a Quick lil Track</Text>
            <Map />
            {err ? <Text>Please enable location services</Text> : null}
            <TrackForm />
            {/* </View> */}
        </SafeAreaView>
    );
};

//This is a lil helper function to request the users location permissions approve/deny
// Im currently not running this version of the application

// const startWatching = async () => {
//  try {
//   const { granted } = await requestPermissionsAsync();
//     await watchPositionAsync({
//        accuracy: Accuracy.BestNavigation,
//        timeInterval: 1000,
//        distanceInterval: 10,
//     }, location =>{
//         console.log(location)
//     }) }
//       if (!granted) {
//         throw new Error('Location permission not granted');
//       }
//     } catch (e) {
//       setErr(e);
//     }  };


//navi bar styling
TrackCreateScreen.navigationOptions = {
    title: 'Add a New Track Babi',
    tabBarIcon: <FontAwesome name="plus" size={20} />
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);