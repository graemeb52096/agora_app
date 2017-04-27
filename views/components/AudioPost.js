import React, { Component, PropTypes } from 'react';
import { Text, View, TextInput, StyleSheet, Button, Image, ScrollView } from 'react-native';

class AudioPost extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>
                <View style={styles.audio_details}>
                    <View style={styles.artwork}>
                        <Image resizeMode="contain" source={{uri: 'http://127.0.0.1:5000/uploads/images/0'}} style={{width: 150, height: 150}}/>
                    </View>
                    <View style={styles.details}>
                        <Text>Title - Band</Text>
                        <Text>Album</Text>
                    </View>
                </View>
                <View style={styles.controls}>
                    <Text> Controls</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    audio_details: {
        height: 150,
        width: 300,
        flexDirection: 'row',
    },
    artwork: {
        width: 150,
        height: 150,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    details: {
        width: 150,
        height: 100,
        flexDirection: 'column',
        paddingTop: 50
    },
    controls: {
        width: 300,
        height: 25,
        flexDirection: 'row',
        backgroundColor: 'grey'
    }
});

export default AudioPost;