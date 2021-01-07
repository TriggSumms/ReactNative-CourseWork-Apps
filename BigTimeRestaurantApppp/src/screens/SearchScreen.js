import React from 'react';
import {View, Text, StyleSheet} from 'react-Native';



const SearchScreen = () => {

   
     return (
     <View>
       <Text style={styles.text}>My Search Screen</Text>
       //<Button title="Go to Components Demo" onPress={() => props.navigation.navigate('Components')}/>

   </View>
     )
   };
   
   const styles = StyleSheet.create({
     text: {
       fontSize: 30
     }
   });
   
   export default SearchScreen;