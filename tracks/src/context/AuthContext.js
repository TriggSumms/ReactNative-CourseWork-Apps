//  import { AsyncStorage } from 'react-native-async-storage';
//import { AsyncStorage } from '@react-native-community/async-storage';
import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';


//err.messages setup via track-server file

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        //both signin/signup shares the case like they share their token
        case 'signin':
            return { errorMessage: '', token: action.payload };
        case 'clear_error_message':
            return { ...state, errorMessage: '' };
        case 'signout':
            return { token: null, errorMessage: '' };
        default:
            return state;
    }
};


//whats needed for the account creation, API request with an email/pass
const signup = dispatch => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signup', { email, password });
        //console.log('JTW test1', response.data)
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: response.data.token });
        //console.log('JTW test2', response.data)
        //If you sign up, you get the golden ticket and your state allows you to navigate to the next "true/auth'd" route.....*navigate is setup in helper file
        navigate('TrackList');
    } catch (err) {
        dispatch({
            type: 'add_error',
            payload: 'Wowza, Something went wrong with sign up...*Try again'
        });
    }
};

//basically just a function checkin for the token in ASyncStorage...
const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({ type: 'signin', payload: token });
    navigate('TrackList');
  } else {
    navigate('Signup');
  }
};


//spread the current states and resets the error message to empty/hidden
const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'clear_error_message' });
};

// The await keyword blocks execution of all the code that follows it until the promise fulfills, exactly as it would with a synchronous operation.
// Implicite returning as always....const add = (a, b) => a + b;


const signin = dispatch => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signin', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: response.data.token });
        //Sign in updates the current state and allows access to true/auth'd route
        navigate('TrackList');
    } catch (err) {
        dispatch({
            type: 'add_error',
            payload: 'Something went wrong with sign in'
        });
    }
};


const signout = dispatch => async () => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'signout' });
    //Token removal and navigation follows 
    navigate('loginFlow');
};

//pass reducer, all our objects, and the state
export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup, clearErrorMessage, tryLocalSignin },
    { token: null, errorMessage: '' }
);