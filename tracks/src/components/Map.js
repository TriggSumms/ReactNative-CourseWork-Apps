import React, { useContext } from 'react';
import { Text, StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
    const {
        state: { currentLocation, locations }
    } = useContext(LocationContext);


    //No location.....exhibits a spinning "activityindicator"
    if (!currentLocation) {
        return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
    }

    return (
        <MapView
            style={styles.map}
            // radius={}
            //what the map should show upon first intitializing....if we wanted to show a region and zoom in..we would add region={{}}
            initialRegion={{
                ...currentLocation.coords,
                //latitude: ,
                //longitude: ,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
        >
            <Circle
                //native element that....simply gives a basis for the exact pinpoint of the user 
                center={currentLocation.coords}
                radius={45}
                strokeColor="rgba(158, 158, 255, 1.0)"
                fillColor="rgba(158, 158, 255, 0.3)"
            />
            {/* Polyline is a react component (*draw-a-ble line) shown on the actual mapview element.....*map'd array of coordinates creates drawn line */}
            <Polyline coordinates={locations.map(loc => loc.coords)} />
        </MapView>
    );
};

//fully featured map screen parameters (IOS=apple maps)(android=google maps)
const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default Map;