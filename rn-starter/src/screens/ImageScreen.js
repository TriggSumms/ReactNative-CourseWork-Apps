
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
//import ImageDetail from '../src/components/ImageDetail';

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imageSource={require('../../assets/(*)')}
        score={9}
      />
      <ImageDetail
        title="Beach"
        imageSource={require('../../assets/(*)')}
        score={7}
      />
      <ImageDetail
        title="Mountain"
        imageSource={require('../../assets/(*)')}
        score={10}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;