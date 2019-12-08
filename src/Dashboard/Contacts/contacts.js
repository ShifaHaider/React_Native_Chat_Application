import React, { Component } from "react";

import {
    SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TextInput,
    ImageBackground, TouchableOpacity, ActivityIndicator, Image
} from 'react-native';
import { ListItem } from 'react-native-elements';

class Contacts extends Component {

    constructor(props) {
        console.log(props)

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
            ],

        }
    }
    render() {
        return (
            <View>

                <View>

                    {
                        this.state.listArr.map((l, i) => (
                            <ListItem
                                key={i}
                                title='Shifa khan'
                                subtitle={
                                    <View style={styles.subtitleView}>
                                        {/* <Image source={require('../../Images/shifa.jpg')} style={styles.ratingImage} /> */}
                                        <Text style={styles.ratingText}/>
                                    </View>
                                }
                                leftAvatar={{ source: require('../../Images/flower.jpg') }}
                                rightElement={<View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around" }}><TouchableOpacity activeOpacity={.5} style={styles.button} >
                                    <Text style={styles.buttonText}>Send Request</Text>
                                </TouchableOpacity></View>}
                            // bottomDivider

                            />

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
    },
    button: {
        height: 30,
        width: 30,
        flex: 1,
        backgroundColor: "#ef6e73",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 3,
    },
    buttonText: {
        color: "#fff",
        fontSize: 12,
    },
})
export default Contacts;