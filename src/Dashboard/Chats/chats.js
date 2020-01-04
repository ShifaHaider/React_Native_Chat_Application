import React, { Component, useState } from "react";

import {
    SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TextInput,
    ImageBackground, TouchableOpacity, ActivityIndicator, Image, Button,
} from 'react-native';
import { ListItem } from 'react-native-elements';


class Chats extends Component {
    constructor(props){
        super(props);
        this.state={
            messages:[{
                name: 'Amy Farha',
                avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
                subtitle: 'Vice President'
            },
            {
                name: 'Amy Farha',
                avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
                subtitle: 'Vice President'
            }, {
                name: 'Amy Farha',
                avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
                subtitle: 'Vice President'
            },
            {
                name: 'Amy Farha',
                avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
                subtitle: 'Vice President'
            },
            {
                name: 'Amy Farha',
                avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
                subtitle: 'Vice President'
            },
            {
                name: 'Amy Farha',
                avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
                subtitle: 'Vice President'
            },
            {
                name: 'Amy Farha',
                avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
                subtitle: 'Vice President'
            },
            {
                name: 'Amy Farha',
                avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
                subtitle: 'Vice President'
            }, {
                name: 'Amy Farha',
                avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
                subtitle: 'Vice President'
            }, {
                name: 'Amy Farha',
                avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
                subtitle: 'Vice President'
            }, {
                name: 'Amy Farha',
                avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
                subtitle: 'Vice President'
            }, {
                name: 'Amy Farha',
                avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
                subtitle: 'Vice President'
            },]
        }
        this.findUsers()
    }
   goToRoom(d) {
        this.props.routes.navigation.navigate("Room", { friendID: d._id });
    }
   findUsers() {
        var url = "http://192.168.0.101:9000/users/findAllUsers";
        fetch(url, {
            method: "get"
        }).then(res => res.json())
            .then((text) => {
                this.setState({messages: text})
            })
    }
    render(){
        return (
            <View>
                <View>
                    {
                        this.state.messages.map((l, i) => (
                            <TouchableOpacity key={i} activeOpacity={.5} onPress={this.goToRoom.bind(this , l)}>
                                <ListItem
                                    key={i}
                                    title={l.name}
                                    subtitle={
                                        <View style={styles.subtitleView}>
                                            {/* <Text style={styles.ratingText}>{l.subtitle}</Text> */}
                                        </View>
                                    }
                                    // leftAvatar={{ source: require('../../Images/flower.jpg') }}
                                    leftAvatar={{
                                        source: {
                                            uri: l.picture ?
                                                l.picture : "https://www.caretechfoundation.org.uk/wp-content/uploads/anonymous-person-221117.jpg"
                                        }
                                    }}
                                    bottomDivider
                                />
                            </TouchableOpacity>
                            // <ListItem
                            //     key={i}
                            //     leftAvatar={{ source: { uri: l.avatar_url } }}
                            //     title={l.name}
                            //     subtitle={l.subtitle}
                            //     bottomDivider
                            //     chevron
                            // />
                        ))
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    subtitleView: {
        flexDirection: 'row',
        // paddingLeft: 10,
        paddingTop: 5
    },
    ratingImage: {
        height: 19.21,
        width: 100
    },
    ratingText: {
        // paddingLeft: 10,
        color: 'grey'
    }
})
export default Chats;


