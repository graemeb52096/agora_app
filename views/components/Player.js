import React, { Component, PropTypes } from 'react';
import { Text, View, TextInput, TouchableHighlight, NavigatorIOS, StyleSheet, Button, Image, ScrollView } from 'react-native';

class Player extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={styles.player}>
                <Text>Player</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
   player: {
       height: 50,
       backgroundColor: 'grey'
   }
});
export default Player;