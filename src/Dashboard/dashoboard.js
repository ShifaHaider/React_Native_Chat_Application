import React, { Component } from "react";

import {
    SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TextInput,
    ImageBackground, TouchableOpacity, ActivityIndicator, Image
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import ContactsIcon from 'react-native-vector-icons/dist/Ionicons';
import ReqIcon from 'react-native-vector-icons/dist/Octicons';

import Chats from "./Chats/chats";
import Contacts from "./Contacts/contacts";
import Request from "./Request/request";

class Dashboard extends Component {

    constructor(props) {

        super(props);
        this.state = {
            chats: true,
            contacts: false,
            request: false,
            chatColor: "#fff",
            conColor: "#eeadaf",
            reqColor: "#eeadaf",


        }
    }

    routes(s) {
        if (s === "chats") {
            // this.props.navigation.navigate("Chats");
            this.setState({ chats: true, contacts: false, request: false, chatColor: "#fff", conColor: "#eeadaf", reqColor: "#eeadaf", })
        }
        else if (s === 'contacts') {
            // this.props.navigation.navigate("Contacts");
            this.setState({ contacts: true, chats: false, request: false, conColor: "#fff", chatColor: "#eeadaf", reqColor: "#eeadaf", })
        }
        else if (s === 'request') {
            // this.props.navigation.navigate("Request");
            this.setState({ request: true, chats: false, contacts: false, reqColor: "#fff", chatColor: "#eeadaf", conColor: "#eeadaf" })
        }
    }
 profile(){
    this.props.navigation.navigate("Profile")
 }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: "#ef6e73", }}>
                    <View style={{flexDirection:"row" , justifyContent:"space-between" , 
                    alignItems:"center", height:50, paddingRight:10, paddingLeft:10 }}>
                        <Text style={{ color: "#fff", fontSize: 21,  fontWeight: "bold" }}>
                            ChatApp</Text>
                            <TouchableOpacity activeOpacity={.5} onPress={this.profile.bind(this)}>
                        <Icon name="account-circle" style={{ color: "#fff", fontSize: 28 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 32, flexDirection: "row", justifyContent: "space-around" }}>
                        <TouchableOpacity activeOpacity={.5} style={styles.tabButton} onPress={this.routes.bind(this, "chats")}>
                            <Icon name="chat" style={{ color: this.state.chatColor, fontSize: 24 }} />
                            <Text style={{ color: this.state.chatColor, fontSize: 12 }}>Chats</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={.5} style={styles.tabButton} onPress={this.routes.bind(this, "contacts")}>
                            <ContactsIcon type="Ionicons" name="md-contacts" style={{ color: this.state.conColor, fontSize: 25 }} />
                            <Text style={{ color: this.state.conColor, fontSize: 12 }}>Contacts</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={.5} style={styles.tabButton} onPress={this.routes.bind(this, "request")}>
                            <ReqIcon name="request-changes" style={{ color: this.state.reqColor, fontSize: 23, }} />
                            <Text style={{ color: this.state.reqColor, fontSize: 12 }}>Requests</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 5, }}>
                    <ScrollView>
                        {this.state.chats ? <Chats routes={this.props} /> : null}
                        {this.state.contacts ? <Contacts /> : null}
                        {this.state.request ? <Request /> : null}
                    </ScrollView>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    tabButton: {
        justifyContent: "center",
        alignItems: "center"

    },
    tabText: {
        color: "#fff",

    }

});

export default Dashboard;

