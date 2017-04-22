import React, { Component, PropTypes } from 'react';

import { Text, View, TextInput, TouchableHighlight, NavigatorIOS, StyleSheet, Button } from 'react-native';

class Home extends Component {
    static propTypes = {
        navigator: PropTypes.object.isRequired,
    };
    constructor(props) {
        super(props);
        this.state = {
            feed: []
        };
        fetch('http://127.0.0.1:5000/feed/def/0', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
    }
    render(){
        return (
            <View style={styles.wrapper}>

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

export default Home;