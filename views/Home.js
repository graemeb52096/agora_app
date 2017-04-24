import React, { Component, PropTypes } from 'react';

import { Text, View, TextInput, TouchableHighlight, NavigatorIOS, StyleSheet, Button, Image, ScrollView } from 'react-native';

import Post from './Post';


function PostDetails(){
    return (
        <View style={styles.post}>
            <Image resizeMode="contain" source={require('../resources/images/placeholder.png')} style={{width: 300, height:300}}/>
            <View style={{flex:1, flexDirection: 'row', padding: 5, paddingTop: 10}}>
                <View style={{
                    flex:1,
                    flexDirection: 'column',
                    alignItems: "flex-start"
                }}>
                    <Text>Chris Zenti</Text>
                </View>
                <View style={{
                    flex:1,
                    flexDirection: 'column',
                    alignItems: "center"
                }}>
                    <Text>mid</Text>
                </View>
                <View style={{
                    flex:1,
                    flexDirection: 'column',
                    alignItems: "flex-end"
                }}>
                    <Text>like</Text>
                </View>
            </View>
        </View>
    )
}

class Home extends Component {
    static propTypes = {
        navigator: PropTypes.object.isRequired,
    };
    constructor(props) {
        super(props);
        this.handlePostRequest = this.handlePostRequest.bind(this);
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
    handlePostRequest() {
        this.props.navigator.push({
            title: 'Post',
            component: Post,
            passProps: {User: 'something'}
        });
    }
    render(){
        return (
            <View style={styles.wrapper}>
                <Button
                    title='Post!'
                    onPress={this.handlePostRequest}
                />
                <ScrollView>
                    <PostDetails></PostDetails>
                    <PostDetails></PostDetails>
                    <PostDetails></PostDetails>
                </ScrollView>
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
        backgroundColor: '#FFFAF9',
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
        padding: 5,
        paddingTop: 10,
        marginTop: 30,
        marginBottom: 35,
        backgroundColor: 'white',
        borderRadius: 3,
        shadowColor: "#000000",
        shadowOpacity: 0.5,
        shadowRadius: 1,
        shadowOffset: {
            height: 4,
            width: -4
        }
    }
});

export default Home;