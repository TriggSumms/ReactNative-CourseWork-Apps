import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
//import { Text, Input, Button } from 'react-native-elements';


const SignupScreen = ({ navigation }) => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext);
    //state is what needs to be retained/changed/gained...email/password
    return (
        <>
            {/* <Spacer> <Text>Sign up Babi</Text></Spacer>  <Input label="Email" value={email} onChangeText={setEmail} autoCapitalize= "none" autoCorrect={false} /><Spacer /> <Input label="Password" /><Spacer /><Spacer><Button title="Sign Up" /></Spacer>  */}
            {/* TESTING: {state.errorMessage ? <Text>{state.errorMessage}</Text> : null} */}

            <View style={styles.container}>
                <NavigationEvents onWillBlur={clearErrorMessage} />
                <AuthForm
                    headerText="Sign Up for ThaDistance Pers'i App"
                    errorMessage={state.errorMessage}
                    submitButtonText="Sign Up"
                    onSubmit={signup}
                />
                <NavLink
                    routeName="Signin"
                    text="Already have an account? Sign in instead!"
                />
            </View>

        </>
    );
};

//Hides the header ...v39 EXPO
SignupScreen.navigationOptions = () => {
    return {
        headerShown: false,
        //(v37) header: null
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250,
        borderColor: 'green',
        borderWidth: 2
    }
});

export default SignupScreen;
