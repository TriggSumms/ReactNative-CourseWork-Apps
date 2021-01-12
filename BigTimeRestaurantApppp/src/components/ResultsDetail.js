import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
// import { EvilIcons } from '@expo/vector-icons';

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
        {/* <EvilIcons name="star" size={15} color="black" /> */}
      </Text>
    </View>
  );
};

//Note: I can later integrate an actual icon system for star rating
//Note: ...Also: {{}} = outer bracket is declaring a javascript expression, inner is the object pulled

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  image: {
    //by default this bad boi wants to collaspe itself...need to intro parameters 
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5
  },
  name: {
    fontWeight: 'bold'
    //fontsize: *default= 14"
  }
});

export default ResultsDetail;