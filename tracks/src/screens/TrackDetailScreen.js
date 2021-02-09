import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';
import MapView, { Polyline } from 'react-native-maps';





const TrackDetailScreen = ({ navigation }) => {
    const { state } = useContext(TrackContext); // pull the track's list
    const _id = navigation.getParam('_id'); //pull id from route


    const track = state.find(t => t._id === _id); //find function pulls apart the arrray of tracks and pairs it with the "_id" number given?

    const initialCoords = track.locations[0].coords; //Takes the first element in the track object...

    return (
        <>
            {/* this is similar to the component we created but...we dont want to grab current info so reusability is not deemed */}

            <Text style={{ fontSize: 48 }}>...{track.name}</Text>
            <MapView
                initialRegion={{
                    longitudeDelta: 0.01,
                    latitudeDelta: 0.01,
                    ...initialCoords
                }}
                style={styles.map}
            >
                {/* draws a coordinates line */}
                <Polyline coordinates={track.locations.map(loc => loc.coords)} />
            </MapView>
        </>
    );
};

const styles = StyleSheet.create({
    map: { 
        height: 300
    }
});

export default TrackDetailScreen;