import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
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
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: response.data.token });
        //If you sign up, you get the golden ticket and your state allows you to navigate to the next "true/auth'd" route
        navigate('TrackList');
    } catch (err) {
        dispatch({
            type: 'add_error',
            payload: 'Wowza, Something went wrong with sign up...*Try again'
        });
    }
};



// const tryLocalSignin = dispatch => async () => {
//   const token = await AsyncStorage.getItem('token');
//   if (token) {
//     dispatch({ type: 'signin', payload: token });
//     navigate('TrackList');
//   } else {
//     navigate('Signup');
//   }
// };

const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'clear_error_message' });
};



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