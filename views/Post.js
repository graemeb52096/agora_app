import React, { Component, PropTypes } from 'react';

import { Text, View, TextInput, TouchableHighlight, NavigatorIOS, StyleSheet, Button, CameraRoll, Image } from 'react-native';


class Post extends Component {

    constructor(props){
        super(props);
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
export default Post;