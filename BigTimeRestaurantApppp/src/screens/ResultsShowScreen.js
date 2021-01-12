import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
    //Note: brings in the null as defaulted state and then useEffect runs the call concisely 
    const [result, setResult] = useState(null);
    //getParam as always... pulls the specific business Id handed down and stores it
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

//Testing the buizID
console.log('test3', result)



    useEffect(() => {
        getResult(id);
    }, []);



    //
    if (!result) {
        return null;
    }

    return (
        <View>
            <Text style={styles.name}>{result.name}...</Text>
            <FlatList
                data={result.photos}
                keyExtractor={photo => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{ uri: item }} />;
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontSize: 25,
        borderRadius: 10,
        marginBottom: 10
    }

});

export default ResultsShowScreen;