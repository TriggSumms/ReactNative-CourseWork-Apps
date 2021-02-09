import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context } from '../context/AuthContext';

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(Context);

  return (
    <View style={styles.container}>
      {/* onWillBlur, I believe allows synchronous navigation between signin/signup */}
      <NavigationEvents onWillBlur={clearErrorMessage} />  {/* When were about to navigate away from the screen  */}
      {/* <NavigationEvents onWillFocus={clearErrorMessage} /> When we are about to navigate, the instant*/}
      {/* <NavigationEvents onDidFocus={clearErrorMessage} /> Call'd when a completion of navigation is onscreen*/}
      {/* <NavigationEvents onDidBlur={clearErrorMessage} />  Buggy */}
      <AuthForm
        headerText="Sign In to Your Account"
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitButtonText="Sign In"
      />
      <NavLink
        text="Dont have an account? Sign up instead"
        routeName="Signup"
      />
    </View>
  );
};


SigninScreen.navigationOptions = () => {
  return {
    //v39
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250
  }
});

export default SigninScreen;