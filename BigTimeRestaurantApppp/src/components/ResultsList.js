import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({ title, results, navigation }) => {
    //quick lil app fix
    if (!results.length) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                //Returning the yelp business Id as a key....but item === 'yelp business object' being iterated 
                keyExtractor={result => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('ResultsShow', { id: item.id })
                            }
                        >
                            <ResultsDetail result={item} />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>

        //Initital work, but a Flatlist is way smarter for a scrollable *RN* list 
        // <View>
        //     <Text style={styles.title}>{title}</Text>
        //     <Text>Results: {results.length} </Text>
        // </View>

    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
        //shadow: 
    },
    container: {
        marginBottom: 10
    }
});

//Were wrapping the resultslist with the extra tied function that reactNative utilizes "withNavigation"
export default withNavigation(ResultsList);