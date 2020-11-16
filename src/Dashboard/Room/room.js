import React, { Component, useState } from "react";

import {
    SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TextInput,
    ImageBackground, TouchableOpacity, ActivityIndicator, Image
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import Video from 'react-native-video';

const R = (props) => {
    const [email, setEmail] = useState("")
    const [messages, setMessages] = useState([
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
    ])
    function goToDashboard() {
        props.navigation.navigate("Dashboard")
    }
    function sendMessage() {
        messages.push({ message: "Hello", id: "me", date: Date.now() })
        setMessages({ messages: messages })
    }
    return (
        <View style={{ flex: 1, backgroundColor: "#f4f1f1" }}>
            <View style={styles.header}>
                <View style={styles.headerItems}>
                    <View >
                        <TouchableOpacity activeOpacity={.5} onPress={goToDashboard}>
                            <Icon name="arrow-back" style={{ color: "#fff", fontSize: 24, }} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.headerText}>Shifa Khan</Text>
                </View>
            </View>
            <ScrollView ref={ref => this.scrollView = ref}
                onContentSizeChange={(contentWidth, contentHeight) => {
                    this.scrollView.scrollToEnd({ animated: true });
                }}>
                {messages.map((data, key) => {
                    return (
                        <View key={key} >
                            {key % 2 === 0 ? <View style={styles.myMessage}>
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
                        value={email}
                        onChangeText={(email) => setEmail({ email })}
                        style={styles.textInput}
                    />
                </View>
                <TouchableOpacity activeOpacity={.7} onPress={sendMessage}>
                    <View style={styles.senderIconView}>
                        <Icon name="send" style={{ color: "#fff", fontSize: 18, }} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )

}

class Room extends Component {

    constructor(props) {
        super(props);
        // console.log(props.navigation.state.params)
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
            message: "",
        }
    }


    goToDashboard() {
        this.props.navigation.navigate("Dashboard");
    }

    sendMessage() {
        var data = {
            text: this.state.message,
            roomID: this.props.navigation.state.params.friendID,
            senderID: this.props.navigation.state.params.friendID
        }
        var url = "http://192.168.0.102:9000/messages/messages";
        fetch(url, {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(text => console.log(text)).catch(err => console.log(err))

        if (this.state.message) {
            this.state.messages.push({ message: this.state.message, id: "me", date: Date.now() })
            this.setState({ messages: this.state.messages });
        }
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#f4f1f1" }}>
                <View style={styles.header}>
                    <View style={styles.headerItems}>
                        <View>
                            <TouchableOpacity activeOpacity={.5} onPress={this.goToDashboard.bind(this)}>
                                <Icon name="arrow-back" style={{ color: "#fff", fontSize: 24, }} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.headerText}>Shifa Khan</Text>
                    </View>
                </View>
                <ScrollView style={{ padding: 5 }} ref={ref => this.scrollView = ref}
                    onContentSizeChange={(contentWidth, contentHeight) => {
                        this.scrollView.scrollToEnd({ animated: true });
                    }}>
                    {this.state.messages.map((data, key) => {
                        return (
                            <View key={key} >
                                <Video source={{uri: 'https://www.youtube.com/watch?v=UlMtZChqT_E' }}
                                    ref={(ref) => {
                                        console.log(ref)
                                        this.player = ref
                                    }}
                                    onBuffer={this.onBuffer}
                                    onError={this.videoError}
                                    style={styles.backgroundVideo} />
                                {key % 2 === 0 ? <View style={styles.myMessage}>
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
                            value={this.state.message}
                            onChangeText={(message) => this.setState({ message })}
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
        marginBottom: 3
    },
    friendMessage: {
        height: "auto", width: "60%", backgroundColor: "#fff",
        padding: 10, alignSelf: "flex-end", marginRight: 6,
        marginBottom: 3,
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
    },
    backgroundVideo: {
        height:250,
        width:300,
        borderRadius:8,
        // position: 'absolute',
        // top: 0,
        // left: 0,
        // bottom: 0,
        // right: 0,
    },
});

export default Room;
