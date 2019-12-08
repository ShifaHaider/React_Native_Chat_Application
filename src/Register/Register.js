import React, { useState } from 'react';
import {
    SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TextInput,
    ImageBackground, TouchableOpacity, ActivityIndicator, Image
} from 'react-native';

import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';



const Register = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");


    function signUp() {
        console.log(name, email, password, phone)
        // firebase.auth().createUserWithEmailAndPassword(email, password).then((data)=>{
        //    console.log(data);
        // })
        props.navigation.navigate("Dashboard")
    }
    function signIn() {
        props.navigation.navigate("SignIn")
    }
    return (
        <View style={{ flex: 1, backgroundColor: "#ef6e73" }}>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <View>
                    <Icon name="account-group" style={{ color: "#fff", fontSize: 150 }} />
                </View>
            </View>
            <View style={{ flex: 3, alignItems: "center" }}>
                <View style={styles.textInputHeader}>
                    <TextInput
                        placeholder="Name"
                        placeholderTextColor="#fff"
                        value={name}
                        onChangeText={(name) => setName(name)}
                        style={styles.textInput}
                    />
                </View>
                <View style={styles.textInputHeader}>
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor="#fff"
                        value={email}
                        onChangeText={(email) => setEmail(email)}
                        style={styles.textInput}
                    />
                </View>
                <View style={styles.textInputHeader}>
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="#fff"
                        value={password}
                        onChangeText={(password) => setPassword(password)}
                        style={styles.textInput}
                    />
                </View>
                <View style={styles.textInputHeader}>
                    <TextInput
                        placeholder="Phone"
                        placeholderTextColor="#fff"
                        value={phone}
                        onChangeText={(phone) => setPhone(phone)}
                        style={styles.textInput}
                    />
                </View>
                <View style={styles.buttonView} >
                    <TouchableOpacity
                        onPress={signUp}
                        activeOpacity={.5} style={styles.button} >
                        <Text style={styles.buttonText} >SIGN Up</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.signButtonView} >
                    <TouchableOpacity
                        onPress={signIn}
                        activeOpacity={.5}
                        style={styles.SignUpbutton} >
                        <Text style={styles.SignIpText} >SIGN In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    textInput: {
        color: "#fff",
        // flex: 1,
        // alignItems:"center",
        width: "100%",
        fontSize: 12,
        borderBottomColor: "#fff",
        borderBottomWidth: 1,
        // padding: 3,
    },
    textInputHeader: {
        height: 50, width: "85%", marginTop: 20,
        alignItems: "center",

    },
    ImageBackground: {
        // flex: 1,
        justifyContent: "center",
        width: '100%', height: '100%',
    },
    signButtonView: {
        height: 45,
        width: "85%",
        marginTop: 12,
        justifyContent: "center",
        // marginBottom:5
    },
    SignUpbutton: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 2,
        borderColor: "#fff",
        borderWidth: 1,
    },
    SignIpText: {
        fontSize: 12,
        color: "#fff"
    },
    buttonView: {
        height: 45,
        width: "85%",
        marginTop: 20,
        justifyContent: "center",
        // paddingLeft: 18,
        // marginBottom:5
    },
    button: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 2,
    },
    buttonText: {
        color: "#ef6e73",
        fontSize: 12,
    },
});

export default Register;
