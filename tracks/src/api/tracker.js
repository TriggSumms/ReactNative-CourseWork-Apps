import axios from 'axios';
import { AsyncStorage } from 'react-native';

let url;
if (__DEV__) {
  url = '  http://0a2a7fc2a914.ngrok.io';
} else {
 // url = 'https://POSSIBLE LINKAGE TO TRIGG.herokuapp.com';
}

//implement axios with NGROK....*2hour timer
const instance = axios.create({
  baseURL: url
});

instance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

export default instance;
