import React, { Component } from "react";

import {
    SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TextInput,
    ImageBackground, TouchableOpacity, ActivityIndicator, Image
} from 'react-native';
import { ListItem } from 'react-native-elements'
class Request extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],

        }
        this.findUsers();
    }
    findUsers() {
        var url = "http://192.168.1.102:9000/users/findAllUsers";
        fetch(url, {
            method: "get"
        }).then(res => res.json())
            .then((usersData) => {
                this.setState({ users: usersData });
            })
    }
    render() {
        return (
            <View>
                <View>
                    {
                        this.state.users.map((l, i) => (
                            <ListItem
                                key={i}
                                title={l.name}
                                leftAvatar={{ source: require('../../Images/flower.jpg') }}
                                rightElement={<View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around" , }}>
                                    <TouchableOpacity activeOpacity={.5} style={styles.confirmButton} >
                                    <Text style={{color: "#fff",fontSize: 12}}>Accept</Text>
                                </TouchableOpacity><TouchableOpacity activeOpacity={.5} style={styles.deleteButton}>
                                        <Text style={{ fontSize: 12, color: "#ef6e73" }}>Remove</Text>
                                    </TouchableOpacity></View>
                                }
                                bottomDivider
                            />
                        ))
                    }
                </View>

            </View>
        )
    }
}
export default Request;

const styles = StyleSheet.create({
    confirmButton: {
        height: 30,
        width: 30,
        flex: 1,
        backgroundColor: "#ef6e73",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 3,
        // borderRightWidth:0,

    },
    deleteButton: {
        flex: 1,
        borderRadius: 3,
        borderColor: "#ef6e73",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        borderLeftWidth:0,
    
    },
    ratingText: {
        color: 'grey'
    },

    subtitleView: {
        flexDirection: 'row',
        // paddingLeft: 10,
        paddingTop: 5
    },

})