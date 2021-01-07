import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

const ListScreen = () => {
    //strings not numbers as keys
    const buddies = [
        //key method1:
        { name: 'Friend #1', age: 33,  key: '1' },
        { name: 'Friend #2', age: 44,  key: '2' },
        { name: 'Friend #3', age: 55,  key: '3' },
        { name: 'Friend #4', age: 32,  key: '4' },
        { name: 'Friend #5', age: 35,  key: '5' },
        { name: 'Friend #6', age: 78,  key: '6' },
        { name: 'Friend #7', age: 101,  key: '7' }
        // { name: 'Friend #1' },
        // { name: 'Friend #2' },
        // { name: 'Friend #3' },
        // { name: 'Friend #4' },
        // { name: 'Friend #5' },
        // { name: 'Friend #6' },
        // { name: 'Friend #7' }
    ];
    //FlatList element, turns array into a list of elements or as formally undertood in react.js....were "mapping"

    return (
        <FlatList
            //KeyMethod2:
            // keyExtractor={(buddy) => buddy.name}

           // horozontial //Controls list grid axis
           // showsHorizontalScrollIndicator={false} // Scrollbar Vanish Control 
            data={buddies}
            renderItem={({ item }) => {
                //buddies 
                //item = 1 buddy
                return <Text style={styles.textStyle}>{item.name}- Age {item.Age}</Text>;
            }}
        />
    );

};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;
