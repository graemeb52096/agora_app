import React, { Component, PropTypes } from 'react';

import { Text, View, TextInput, TouchableHighlight, NavigatorIOS, StyleSheet, Button } from 'react-native';

import Home from './Home';
import SignUp from './SignUp';


class Login extends Component {
    static propTypes = {
        navigator: PropTypes.object.isRequired
    };
    constructor(props, context) {
        super(props, context);
        this.state = {Username: '', Password: ''};
        this.handleSignUp = this.handleSignUp.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    handleSubmit(){
        if(this.state.Username=='' || this.state.Password==''){
            alert("You must provide both your username and password.")
        }
        else{
            fetch('http://127.0.0.1:5000/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    Username: this.state.Username,
                    Password: this.state.Password
                })
            })
                .then((response) => response.json())
                .then((responseJson) => {
                    response = (responseJson.Response);
                    if(response == 'Valid authentication'){
                        this.handleLogin();
                    }
                    else{
                        alert("Login failed");
                    }
                })
                .catch((error) => {
                    alert(error);
                });
        }

    }

    handleSignUp(){
        this.props.navigator.push({
            component: SignUp,
            title: 'Sign Up'
        });
    }

    handleLogin(){
        this.props.navigator.resetTo({
            title: 'Home',
            component: Home,
            passProps: {User: 'something'}
        });
    }

    render(){
        return (
            <View style={styles.wrapper}>
                <Text style={styles.label}>Username:</Text>
                <View style={styles.field}>
                    <TextInput
                        style={{height: 25}}
                        placeholder="Username"
                        onChangeText={(text) => this.setState({Username: text, Password: this.state.Password})}
                    />
                </View>
                <Text style={styles.label}>Password</Text>
                <View style={styles.field}>
                    <TextInput
                        style={{height: 25}}
                        placeholder="Password"
                        secureTextEntry={true}
                        onChangeText={(text) => this.setState({Username: this.state.Username, Password: text})}
                    />
                </View>
                <Button
                    style={styles.submit}
                    onPress={this.handleSubmit}
                    title="Login"
                    color="#876543"
                    accessibilityLabel="Login"
                />

                <Button
                    style={styles.submit}
                    onPress={this.handleSignUp}
                    title="Sign Up"
                    color="#876543"
                    accessibilityLabel="Sign Up"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        flex: 1,
        padding: 20,
        paddingTop: 148,
    },
    submit: {
        fontSize: 30
    },
    label: {
        fontSize: 20,
    },
    field: {
        height: 25,
        borderColor: 'gray',
        borderBottomWidth: 1,
        margin: 20
    }
});
export default Login;