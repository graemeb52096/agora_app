import React, { Component, PropTypes } from 'react';
import { Text, View, TextInput, StyleSheet, Button, Image, ScrollView } from 'react-native';

import Profile from '../Profile';
import ImagePost from './ImagePost';
import AudioPost from './AudioPost';


class PostDetails extends Component{
    static propTypes = {
        navigator: PropTypes.object.isRequired,
    };
    constructor(props){
        super(props);
        this.handleProfileClick = this.handleProfileClick.bind(this);
        this.getComments = this.getComments.bind(this);
    };
    getComments(){

    };
    handleProfileClick(){
        this.props.navigator.push({
            title: 'Profile',
            component: Profile,
            passProps: {User: this.props.post.username}
        })
    };
    render(){
        return(
            <View style={styles.post}>
                {this.props.post.media.substring(0, 3) == 'img' &&
                    <ImagePost id={this.props.post.id} />
                }
                {this.props.post.media.substring(0, 3) == 'aud' &&
                    <AudioPost id={this.props.post.id} />
                }
                {this.props.post.media.substring(0, 3) == 'vid' &&
                    <ImagePost id={this.props.post.id} />
                }
                <View style={{flexDirection: 'row', padding: 5, paddingTop: 10, borderBottomWidth: 1}} refreshing>
                    <View style={{flex: 1, flexDirection: 'column', alignItems: "flex-start", width: 'auto'}}>
                        <Button title={this.props.post.username} onPress={this.handleProfileClick} style={styles.username}/>
                    </View>
                    <View style={{flex: 1, flexDirection: 'column', alignItems: "flex-end"}}>
                        <Text>options</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    username: {
        height: 10,
    },
    menu: {
        flexDirection: 'row',
        padding: 2,
        height: 40,
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

export default PostDetails;