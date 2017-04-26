import React, { Component, PropTypes } from 'react';


class User extends Component{
    constructor(Props){
        super(props);
        this.state = { details: {} };
        this.getUserDetails = this.getUserDetails.bind(this);
    }

    getUserDetails(){
        fetch('http://127.0.0.1:5000/feed/1', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.state.details = (responseJson.details);
                this.setState(this.state);
            })
            .catch((error) => {
                alert(error);
            });

        return(
            <Text>{this.state.details.firstName} {this.state.details.lastName}</Text>
        )
    }

    render(){
        return(
            <View>
                {this.getUserDetails()}
            </View>
        )
    }
}

export default User;