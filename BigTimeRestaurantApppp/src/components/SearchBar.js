import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
//import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (

    <View style={styles.backgroundStyle}>
      {/* <Feather name="search" style={styles.iconStyle} /> */}
      <FontAwesome5 name="searchengin" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false} //No auto correct needed
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit} //initiates search to yelp API ()
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 20
  },
  inputStyle: {
    flex: 1,
    fontSize: 18
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center', //*on child
    marginHorizontal: 15
  }

});

export default SearchBar;