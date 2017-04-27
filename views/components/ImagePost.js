import React, { Component, PropTypes } from 'react';
import { Text, View, TextInput, StyleSheet, Button, Image, ScrollView } from 'react-native';

class ImagePost extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Image resizeMode="contain" source={{uri: 'http://127.0.0.1:5000/uploads/images/0'}} style={{width: 300, height: 300}}/>
        )
    };
}

export default ImagePost;