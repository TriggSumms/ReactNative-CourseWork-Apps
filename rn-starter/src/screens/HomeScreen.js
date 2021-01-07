import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
 // DESTRUCTTION EXAMPLE : const HomeScreen = ({navigation}) => {
  //console.log(props);

  return (
  <View>
    <Text style={styles.text}>Trigg's Screen</Text>
    <Button title="Go to Components Demo" onPress={() => props.navigation.navigate('Components')}/>
    <Button title="Go to List Demo" onPress={() => props.navigation.navigate('List')}/>
    <Button title="Go to Image" onPress={() => props.navigation.navigate('Image')}/>
  {/* <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
    <Text>Go to List Demoz</Text>
  </TouchableOpacity> */}
</View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
