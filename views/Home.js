import React, { Component, PropTypes } from 'react';

import { Text, View, TextInput, TouchableHighlight, NavigatorIOS, StyleSheet, Button, Image, ScrollView } from 'react-native';

import Post from './Post';
import User from './User';
import PostDetails from './components/PostDetails';


class Home extends Component {
    static propTypes = {
        navigator: PropTypes.object.isRequired,
    };
    constructor(props) {
        super(props);
        this.handlePostRequest = this.handlePostRequest.bind(this);
        this.profileClick = this.profileClick.bind(this);
        this.state = {
            feed: []
        };
        fetch('http://127.0.0.1:5000/feed/1', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.state.feed = (responseJson.feed);
                this.setState(this.state);
            })
            .catch((error) => {
                alert(error);
            })
    };
    profileClick(){
        this.props.navigator.push({
            component: User,
            title: 'Sign Up'
        });
    };
    handlePostRequest() {
        this.props.navigator.push({
            title: 'Post',
            component: Post,
            passProps: {User: 'something'}
        });
    };
    render(){
        return (
            <View style={styles.wrapper}>
                <View style={styles.menu}>
                    <View style={{flex:1, flexDirection: 'column'}}>
                        <Button title='Post!' onPress={this.handlePostRequest}/>
                    </View>
                    <View style={{flex:1, flexDirection: 'column'}}>
                        <Button title='Post!' onPress={this.handlePostRequest}/>
                    </View>
                    <View style={{flex:1, flexDirection: 'column'}}>
                        <Button title='Menu!' onPress={this.handlePostRequest}/>
                    </View>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <ScrollView>
                        {this.state.feed.map(function(post, i) {
                            return <PostDetails post={post} key={i}/>
                        })}
                    </ScrollView>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    menu: {
        flexDirection: 'row',
        padding: 2,
        height:40,
        borderBottomWidth: 1
    },
    wrapper: {
        flex: 1,
        padding: 20,
        paddingTop: 74,
        backgroundColor: '#FFFCFC',
        justifyContent: 'center',
        alignItems: 'center',
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
    },
    post: {
        height: 450,
        width: 310,
        margin: 10,
        alignItems: "center",
        padding: 10,
        paddingTop: 10,
        marginTop: 30,
        marginBottom: 35,
        backgroundColor: 'white',
        borderRadius: 3,
        shadowColor: "#000000",
        shadowOpacity: 0.5,
        shadowRadius: 1,
        shadowOffset: {
            height: 2,
            width: -2
        }
    }
});

export default Home;