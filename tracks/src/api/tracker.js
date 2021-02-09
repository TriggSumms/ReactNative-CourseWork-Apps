import axios from 'axios';
//import { AsyncStorage } from '@react-native-community/async-storage';
// import { AsyncStorage } from 'react-native-async-storage';
import { AsyncStorage } from 'react-native';

let url;
if (__DEV__) {
  url = 'http://b8dfef8620d0.ngrok.io';
} else {
 // url = 'https://POSSIBLE LINKAGE TO TRIGG.herokuapp.com';
}

//implement axios with NGROK....*2hour timer
const instance = axios.create({
  baseURL: url
});


//Interesting token grabbing function to impend tokens to any request ever made to axios.....(*so crazy)
instance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  //boilerplate err code
  err => {
    return Promise.reject(err);
  }
);

export default instance;
