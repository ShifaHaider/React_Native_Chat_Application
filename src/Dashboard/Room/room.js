import React, { Component } from "react";

import {
    SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TextInput,
    ImageBackground, TouchableOpacity, ActivityIndicator, Image
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';




class Room extends Component {

    constructor(props) {
        console.log(props)
        super(props);
        this.state = {
            messages: [
                { message: "Hi", id: "me", date: Date.now() }, { message: "Hello", id: "friend", date: Date.now() },
                { message: "How are you", id: "me", date: Date.now() }, ,
                { message: "How are you", id: "me", date: Date.now() }, { message: "I am fine...", id: "friend", date: Date.now() },
                , { message: "I am fine...", id: "friend", date: Date.now() },
                { message: "How are you", id: "me", date: Date.now() }, { message: "I am fine...", id: "friend", date: Date.now() },
                { message: "How are you", id: "me", date: Date.now() }, { message: "I am fine...", id: "friend", date: Date.now() },
                { message: "How are you", id: "me", date: Date.now() },
                { message: "How are you", id: "me", date: Date.now() }, { message: "I am fine...", id: "friend", date: Date.now() },
                , { message: "I am fine...", id: "friend", date: Date.now() },
                { message: "How are you", id: "me", date: Date.now() }, { message: "I am fine...", id: "friend", date: Date.now() },
                , { message: "I am fine...", id: "friend", date: Date.now() },
                { message: "How are you", id: "me", date: Date.now() }, { message: "I am fine...", id: "friend", date: Date.now() },
                , { message: "I am fine...", id: "friend", date: Date.now() },
                { message: "How are you", id: "me", date: Date.now() }, { message: "I am fine...", id: "friend", date: Date.now() },
                , { message: "I am fine...", id: "friend", date: Date.now() }, { message: "How are you", id: "me", date: Date.now() }
            ],
            email: "",
        }
    }


    goToDashboard() {
        this.props.navigation.navigate("Dashboard")
    }

    sendMessage() {
        console.log(this.state.email)
        this.state.messages.push({ message: "Hello", id: "me", date: Date.now() })
        this.setState({messages:this.state.messages})
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#f4f1f1" }}>
                <View style={styles.header}>
                    <View style={styles.headerItems}>
                        <View >
                            <TouchableOpacity activeOpacity={.5} onPress={this.goToDashboard.bind(this)}>
                                <Icon name="arrow-back" style={{ color: "#fff", fontSize: 24, }} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.headerText}>Shifa Khan</Text>
                    </View>
                </View>
                <ScrollView style={{padding:5}} ref={ref => this.scrollView = ref}
                    onContentSizeChange={(contentWidth, contentHeight) => {
                        this.scrollView.scrollToEnd({ animated: true });
                    }}>
                    {this.state.messages.map((data, key) => {
                        return (
                            <View key={key} >
                                {key %2 === 0 ? <View style={styles.myMessage}>
                                    <Text style={{ color: "#fff", }}>{data.message}</Text>
                                </View> : <View>
                                        <View style={styles.friendMessage}>
                                            <Text style={{ color: "#2f2c2c", }}>{data.message}</Text>
                                            <Text style={{ color: "gray", alignSelf: "flex-end", }}>{new Date(data.date).toLocaleTimeString()} </Text>
                                        </View>
                                    </View>}
                            </View>
                        )
                    })}
                </ScrollView>
                <View style={styles.bottomItems}>
                    <View style={styles.textInputHeader}>
                        <TextInput
                            placeholder="Type a message"
                            value={this.state.email}
                            onChangeText={(email) => this.setState({ email })}
                            style={styles.textInput}
                        />
                    </View>
                    <TouchableOpacity activeOpacity={.7} onPress={this.sendMessage.bind(this)}>
                        <View style={styles.senderIconView}>
                            <Icon name="send" style={{ color: "#fff", fontSize: 18, }} />
                        </View>
                    </TouchableOpacity>

                </View>

            </View>
        )
    }
}
// ea8b8e
const styles = StyleSheet.create({
    header: {
        height: 60,
        backgroundColor: "#ef6e73",
        justifyContent: "center",

    },
    headerItems: {
        alignItems: "center", flexDirection: "row",
         width: 150, justifyContent: "space-around",
    },
    headerText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold"
    },
    myMessage: {
        height: "auto", width: "60%", backgroundColor: "#ef6e73", marginTop: 12, marginLeft: 6,
        borderRadius: 8, padding: 10, borderTopLeftRadius: 0,
        marginBottom:3
    },
    friendMessage: {
        height: "auto", width: "60%", backgroundColor: "#fff",
        padding: 10, alignSelf: "flex-end", marginRight: 6,
        marginBottom:3,
        borderRadius: 8, marginTop: 12, borderTopRightRadius: 0
    },
    bottomItems: {
        flexDirection: "row", height: 65, alignItems: "center", justifyContent: "space-around", paddingLeft: 6, paddingRight: 6,
    },
    textInput: {
        alignItems: "center",
        width: "100%",
        fontSize: 15,
        // borderBottomColor: "#fff",
        // borderBottomWidth: 1,
    },
    textInputHeader: {
        // height: 45,
        width: "85%",
        backgroundColor: "#fff",
        borderRadius: 24,
        paddingLeft: 8,

    },
    senderIconView: {
        height: 45, width: 45,
        backgroundColor: "#ef6e73",
        borderRadius: 100,
        //  marginLeft: 8,
        // marginBottom: 8,
        justifyContent: "center",
        alignItems: "center",
    }
});

export default Room;

// box-shadow:{
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,
        // elevation: 5
// }