import React, { Component, PropTypes } from 'react';

import { Text, View, TextInput, TouchableHighlight, NavigatorIOS, StyleSheet, Button } from 'react-native';

class SignUp extends Component {
    static propTypes = {
        navigator: PropTypes.object.isRequired
    };
    constructor(props, context) {
        super(props, context);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            username: '',
            password: '',
            re_password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        fetch('http://127.0.0.1:5000/user', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                email: this.state.email,
                password: this.state.password,
                username: this.state.username
            })
        })
    }

    render(){
        return (
            <View style={styles.wrapper}>
                <Text style={styles.label}>First Name:</Text>
                <View style={styles.field}>
                    <TextInput
                        style={{height: 25}}
                        placeholder="First Name"
                        onChangeText={(text) => this.state.first_name = text}
                    />
                </View>
                <Text style={styles.label}>Last Name:</Text>
                <View style={styles.field}>
                    <TextInput
                        style={{height: 25}}
                        placeholder="Last Name"
                        onChangeText={(text) => this.state.last_name = text}
                    />
                </View>
                <Text style={styles.label}>Email:</Text>
                <View style={styles.field}>
                    <TextInput
                        style={{height: 25}}
                        placeholder="john.smith123@example.com"
                        onChangeText={(text) => this.state.email = text}
                    />
                </View>
                <Text style={styles.label}>Desired Username:</Text>
                <View style={styles.field}>
                    <TextInput
                        style={{height: 25}}
                        placeholder="420blazeit123"
                        onChangeText={(text) => this.state.username = text}
                    />
                </View>
                <Text style={styles.label}>Password:</Text>
                <View style={styles.field}>
                    <TextInput
                        style={{height: 25}}
                        placeholder="besttousephraseslikethisone"
                        onChangeText={(text) => this.state.password = text}
                    />
                </View>
                <Text style={styles.label}>Confirm Password:</Text>
                <View style={styles.field}>
                    <TextInput
                        style={{height: 25}}
                        placeholder="besttousephraseslikethisone"
                        onChangeText={(text) => this.state.re_password = text}
                    />
                </View>
                <Button
                    style={styles.submit}
                    onPress={this.handleSubmit}
                    title="Submit"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        flex: 1,
        padding: 20,
        paddingTop: 74,
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

export default SignUp
