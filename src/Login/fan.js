import React, { Component } from "react";
import { View, Text, TouchableOpacity, Animated, StyleSheet, Easing } from "react-native"

const SignIn = () => (
    <View style={{ flex: 1, justifyContent: "space-around", flexDirection: "row" , alignItems: "center" }}>
        {/* <View style={{ height: 45,width: "85%",  justifyContent: "center",alignItems:"center", backgroundColor:"blue" }}> */}
        <TouchableOpacity style={{
        backgroundColor: "red", justifyContent: "center", alignItems: "center", borderRadius: 2,
            height: 45, width: 150,
        }}>
            <Text style={{ color: "#fff" }}> Hello</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
             backgroundColor: "blue", justifyContent: "center", alignItems: "center", borderRadius: 2,
            height: 45, width: 150,
        }}>
            <Text style={{ color: "#fff" }}> Hello World</Text>
        </TouchableOpacity>

    </View>
)


export default SignIn;

 // <ImageBackground
        //     resizeMode={"stretch"}
        //     blurRadius={1}
        //     style={styles.ImageBackground}
        //     source={require("../Images/pahar.jpg")}>
        // <View style={{ }} >
        //     <View style={styles.textInputHeader}>
        //         <TextInput
        //             placeholder="Email"
        //             placeholderTextColor="#fff"
        //             value={email}
        //             onChangeText={(email) => setEmail({email})}
        //             style={styles.textInput}
        //         />
        //     </View>
        //     <View style={styles.textInputHeader}>
        //         <TextInput
        //             placeholder="Password"
        //             placeholderTextColor="#fff"
        //             value={email}
        //             onChangeText={(password) => setPassword({password})}
        //             style={styles.textInput}
        //         />
        //     </View>
        //     <View style={styles.buttonView} >
        //         {(isLoader) ?
        //             <ActivityIndicator size="large" color="#e91e8d" />
        //             :
        //             <TouchableOpacity
        //                 // onPress={this.SignIn.bind(this)}
        //                 activeOpacity={.5} style={styles.button} >
        //                 <Text style={styles.buttonText} >SIGN IN</Text>
        //             </TouchableOpacity>}
        //     </View>
        //     <View style={styles.signButtonView} >
        //         <TouchableOpacity
        //             activeOpacity={.5}
        //             style={styles.SignUpbutton} >
        //             <Text style={styles.SignIpText} >SIGN Up</Text>
        //         </TouchableOpacity>
        //     </View>
        // </View>
        // </ImageBackground>