import React, { Component , useEffect , useState } from "react";

import {
    SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TextInput,
    ImageBackground, TouchableOpacity, ActivityIndicator, Image,AsyncStorage
} from 'react-native';
import { ListItem } from 'react-native-elements';

const Contact = () => {
  const [users , setUsers] = useState([]);
   function findUsers() {
        var url = "http://192.168.0.102:9000/users/findAllUsers";
        fetch(url, {
            method: "get"
        }).then(res => res.json())
            .then((usersData) => {
                console.log(usersData)
                setUsers(usersData)
            })
    }
    useEffect(()=> {
           
    })
    // findUsers();
    return (
        <View>
            <View>

                {
                    users.map((l, i) => (
                        <ListItem
                            key={i}
                            title={l.name}
                            subtitle={
                                <View style={styles.subtitleView}>
                                    {/* <Image source={require('../../Images/shifa.jpg')} style={styles.ratingImage} /> */}
                                    <Text style={styles.ratingText} />
                                </View>
                            }
                            leftAvatar={{
                                source: {
                                    uri: l.picture ?
                                        l.picture : "https://www.caretechfoundation.org.uk/wp-content/uploads/anonymous-person-221117.jpg"
                                }
                            }}
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

class Contacts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
        }
        this.findUsers();
    }
    findUsers() {
        var url = "http://192.168.0.102:9000/users/findAllUsers";
        fetch(url, {
            method: "get"
        }).then(res => res.json())
            .then((usersData) => {
                this.setState({ users: usersData })
            })
    }
    updateProfile(user , t) {

        AsyncStorage.getItem('ID').then((id) => {
            user.reqSenderId = id;
        })
        if(t === "cancel"){
            user.isRequest = false;
        }
        else{
            user.isRequest = true;
        }
        var url = "http://192.168.0.102:9000/users/updateUserProfile";
        fetch(url, {
            method: "post",
            body: JSON.stringify({ updatedData: user }),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }).then((data) => {
            data.json().then(() => {
                this.setState({ editProfile: false })
            });
        })
            .catch((err) => {
                console.log(err);
            });
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
                                leftAvatar={{
                                    source: {
                                        uri: l.picture ?
                                            l.picture : "https://www.caretechfoundation.org.uk/wp-content/uploads/anonymous-person-221117.jpg"
                                    }
                                }}
                                // rightElement={<View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around" }}>
                                //     <TouchableOpacity activeOpacity={.5} style={styles.button} onPress={this.updateProfile.bind(this , l)}>
                                        
                                //     <Text style={styles.buttonText}>{!l.isRequest ?"Send Request":"Sent Request" }</Text>
                                // </TouchableOpacity></View>}
                                rightElement={
                              !l.isRequest?
                                    <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around" }}>
                                         <TouchableOpacity activeOpacity={.5} style={styles.button} onPress={this.updateProfile.bind(this , l)}>
                                     <Text style={styles.buttonText}>Send Request</Text>
                                 </TouchableOpacity>
                                 </View>
                                 : 
                                 <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around" }}>
                                     <View  style={styles.button} >
                                     <Text style={styles.buttonText}>Sent Req</Text>
                                 </View>
                                <TouchableOpacity activeOpacity={.5} style={styles.deleteButton} onPress={this.updateProfile.bind(this , l , "cancel" )}>
                                        <Text style={{ fontSize: 12, color: "#ef6e73" }}>Cancel</Text>
                                    </TouchableOpacity>
                                    </View>
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
})
export default Contacts;