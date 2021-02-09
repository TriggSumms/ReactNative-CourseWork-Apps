import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// import {
//   createAppContainer,
//   createStackNavigator,
//   createBottomTabNavigator,
//   createSwitchNavigator
// } from 'react-navigation';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import { Provider as LocationProvider } from './src/context/LocationContext';
import { Provider as TrackProvider } from './src/context/TrackContext';
import { FontAwesome } from '@expo/vector-icons';


// //First step is to make a user sign in/up ....creating a navigation or logical user "flow"
// const switchNavigator = createSwitchNavigator({
//   ResolveAuth: ResolveAuthScreen,
//   loginFlow: createStackNavigator({
//     //toggling between "views"
//     Signup: SignupScreen,
//     Signin: SigninScreen
//   }),
//   //Create the nav's routes... (*assinging bottom tabs)
//   mainFlow: createBottomTabNavigator({
//     trackListFlow,
//     TrackCreate: TrackCreateScreen,
//     Account: AccountScreen
//   })
// });

// const App = createAppContainer(switchNavigator);


// const trackListFlow = createStackNavigator({
//   TrackList: TrackListScreen,
//   TrackDetail: TrackDetailScreen
// });


// //bottom tab navi bar styling 
// trackListFlow.navigationOptions = {
//   title: 'Tracks',
//   tabBarIcon: <FontAwesome name="th-list" size={20} />
// };




// export default () => {
//   return (
//     <TrackProvider>
//       <LocationProvider>
//         <AuthProvider>
//           <App
//           //We need to give access to the navigator helper function 
//             ref={navigator => {
//               setNavigator(navigator);
//             }}
//           />
//         </AuthProvider>
//       </LocationProvider>
//     </TrackProvider>
//   );
// };


const trackListFlow = createStackNavigator({
  TrackList: TrackListScreen,
  TrackDetail: TrackDetailScreen
});

trackListFlow.navigationOptions = {
  title: 'Tracks',
  tabBarIcon: <FontAwesome name="th-list" size={20} />
};

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow,
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen
  })
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App
            ref={navigator => {
              setNavigator(navigator);
            }}
          />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};