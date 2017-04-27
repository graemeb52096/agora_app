import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    NavigatorIOS,
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Login from './views/Login';
import Player from './views/components/Player';


export default class AgoraReact extends Component {
    render() {
        return(
            <View style={styles.container}>
                <NavigatorIOS
                    initialRoute={{
                        title: 'Agora',
                        component: Login
                    }}
                    style={styles.container}
                />
                <Player />
                <Text>@agora version: 0.0.1</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

AppRegistry.registerComponent('AgoraReact', () => AgoraReact);
