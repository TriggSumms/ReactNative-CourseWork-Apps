import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Spacer from './Spacer';
import { withNavigation } from 'react-navigation';


//Lil helper withNavi is brought in so we can create this reusable navlink comp

const NavLink = ({ navigation, text, routeName }) => {
  return (

    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      <Spacer>
        <Text style={styles.link}>{text}</Text>
      </Spacer>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    color: 'blue'
  }
});

export default withNavigation(NavLink);