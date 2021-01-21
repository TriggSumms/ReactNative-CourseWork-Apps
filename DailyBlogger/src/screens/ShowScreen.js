import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  //as always getparam carries down the id via the touchableOpacity click and navigate

  //"find" is a built in helper... loop and then...if id's touched and carried equal then carry on with the details/edit pg
  const blogPost = state.find(
    blogPost => blogPost.id === navigation.getParam('id')
  );

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Edit', { id: navigation.getParam('id') })
        }
      >
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    )
  };
};
//Provided because of above depreciation 
// return {
//   headerRight: () => (
//     <TouchableOpacity onPress={() => navigation.navigate('Edit')}>
//       <EvilIcons name="pencil" size={35} />
//     </TouchableOpacity>
//   ),
// };
// };

const styles = StyleSheet.create({});

export default ShowScreen;
