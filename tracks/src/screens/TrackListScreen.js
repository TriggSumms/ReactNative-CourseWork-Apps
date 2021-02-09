import React, { useContext } from 'react';
import { StyleSheet, Text, FlatList, TouchableOpacity, View } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { ListItem, Avatar } from 'react-native-elements';
import { Context as TrackContext } from '../context/TrackContext';


//ListItem is a lil native element that will easily show off the items

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);

  return (
    <>
      <NavigationEvents onWillFocus={fetchTracks} />
      {/* <Text style={{ fontSize: 48 }}>TrackListScreen</Text> */}
      <FlatList
        data={state}
        keyExtractor={item => item._id} //key extractor is mapping through all tracks specific "_id"
        renderItem={({ item }) => {
          return (
            //carrying down the specific _id of the selected track to the trackdetails route
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('TrackDetail', { _id: item._id })
              }
            >
              {/* chevron is just a little icon used in convention...it makes a little clickable arrow "details icon" */}
              {/* <ListItem.Title>{item.name} </ListItem.Title> */}
              <ListItem>
                {/* <Avatar source={require('../images/avatar1.jpg')} /> */}
                <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                  <View style={styles.subtitleView}>
                    {/* <Image source={require('../images/rating.png')} style={styles.ratingImage}/> */}
                    <Text style={styles.ratingText}>5 months ago(*DATE)</Text>
                  </View>
                </ListItem.Content>
              </ListItem>

            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

TrackListScreen.navigationOptions = {
  title: 'Tracks'
};

styles = StyleSheet.create({
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5
  },
  ratingImage: {
    height: 19.21,
    width: 100
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey'
  }
})

export default TrackListScreen;
