import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
const greeting = 'Oh wow default text';
//arrays & text elements are fair game for the greeting but javascript objects are a no no

    return (
        <View>
            <Text style={styles.textStyle}>Oh yuh babi React Native Component Test</Text>
            <Text style={styles.subHeaderStyle}>{greeting}</Text>
        </View>
    );
    //or inline
    //return <Text style={{fontSize: 30}}>Oh yuh babi React Native Component Test</Text>;
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    subHeaderStyle: {
        fontSize: 13
    },
});

export default ComponentsScreen;

