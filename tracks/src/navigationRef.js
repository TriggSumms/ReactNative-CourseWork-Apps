import { NavigationActions } from 'react-navigation';

//Just a little helper to pass the nav's Id's throughout every build of the app...

let navigator;

export const setNavigator = nav => {
  navigator = nav;
};

export const navigate = (routeName, params) => {
  navigator.dispatch(
    NavigationActions.navigate({
        //Navigator library has an internal API that will grab the key/values and change the state
      routeName,
      params
    })
  );
};