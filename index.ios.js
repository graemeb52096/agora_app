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


export default class AgoraReact extends Component {
    render() {
        return(
            <NavigatorIOS
                initialRoute={{
                    title: 'Agora',
                    component: Login
                }}
                style={styles.container}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

AppRegistry.registerComponent('AgoraReact', () => AgoraReact);
