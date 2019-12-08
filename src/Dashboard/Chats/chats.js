import React, { Component } from "react";

import {
    SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TextInput,
    ImageBackground, TouchableOpacity, ActivityIndicator, Image, 
} from 'react-native';
import { ListItem } from 'react-native-elements';
class Chats extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listArr: [{
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
            },    {
                name: 'Amy Farha',
                avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
                subtitle: 'Vice President'
            },    {
                name: 'Amy Farha',
                avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
                subtitle: 'Vice President'
            },    {
                name: 'Amy Farha',
                avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
                subtitle: 'Vice President'
            },    {
                name: 'Amy Farha',
                avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
                subtitle: 'Vice President'
            },    {
                name: 'Amy Farha',
                avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
                subtitle: 'Vice President'
            },    {
                name: 'Amy Farha',
                avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
                subtitle: 'Vice President'
            },    {
                name: 'Amy Farha',
                avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
                subtitle: 'Vice President'
            },    {
                name: 'Amy Farha',
                avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
                subtitle: 'Vice President'
            },    {
                name: 'Amy Farha',
                avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
                subtitle: 'Vice President'
            },    {
                name: 'Amy Farha',
                avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
                subtitle: 'Vice President'
            },    {
                name: 'Amy Farha',
                avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
                subtitle: 'Vice President'
            },    {
                name: 'Amy Farha',
                avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
                subtitle: 'Vice President'
            },    {
                name: 'Amy Farha',
                avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
                subtitle: 'Vice President'
            },    {
                name: 'Amy Farha',
                avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
                subtitle: 'Vice President'
            },    {
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
            },  {
                name: 'Amy Farha',
                avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
                subtitle: 'Vice President'
            },  {
                name: 'Amy Farha',
                avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
                subtitle: 'Vice President'
            },  {
                name: 'Amy Farha',
                avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
                subtitle: 'Vice President'
            },  {
                name: 'Amy Farha',
                avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
                subtitle: 'Vice President'
            },  {
                name: 'Amy Farha',
                avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
                subtitle: 'Vice President'
            },  {
                name: 'Amy Farha',
                avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
                subtitle: 'Vice President'
            },  {
                name: 'Amy Farha',
                avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
                subtitle: 'Vice President'
            },  {
                name: 'Amy Farha',
                avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
                subtitle: 'Vice President'
            },  {
                name: 'Amy Farha',
                avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
                subtitle: 'Vice President'
            },
            ],

        }
    }
    goToRoom(){
        this.props.routes.navigation.navigate("Room");

    }
    render() {
        return (
            <View>
                <View>

                    {
                        this.state.listArr.map((l, i) => (
                            <TouchableOpacity key={i} activeOpacity={.5} onPress={this.goToRoom.bind(this)}>
                            <ListItem
                                key={i}
                                title={l.name}
                                subtitle={
                                    <View style={styles.subtitleView}>
                                        <Text style={styles.ratingText}>{l.subtitle}</Text>
                                    </View>
                                }
                                leftAvatar={{ source: require('../../Images/flower.jpg') }}

                                // leftAvatar={{ source: { uri: l.avatar_url } }}
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


