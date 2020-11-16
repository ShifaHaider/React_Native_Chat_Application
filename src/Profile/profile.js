import React from 'react';
import {
  Image,
  PixelRatio,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  ScrollView,
  TextInput,
  AsyncStorage, ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import MaterialIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-picker';
import { Input, Tooltip, } from 'react-native-elements';
import firebase from 'react-native-firebase';


import { Dimensions, TouchableHighlight, } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editProfile: false,
      // name: "Shifa",
      nickName: "-",
      // phone: "0344567987",
      userID: "",
      userData: {},
      isLoader: false,
    }

    this.findUser();

  }

  // componentDidMount = () => AsyncStorage.getItem('ID').then((val) => this.setState({userID: val}))

  goToDashboard() {
    this.props.navigation.navigate("Dashboard")
  }
  editProfile() {
    this.setState({ editProfile: true });
  }
  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.showImagePicker(options, response => {
      this.setState({ isLoader: true })
      firebase.storage().ref().child(response.fileName).put(response.path).then((snapshot) => {
        console.log(snapshot.downloadURL)
        this.setState({ picture: snapshot.downloadURL, isLoader: false })
      });
      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = { uri: response.uri };

      }
    });
  }
  findUser() {
    AsyncStorage.getItem('ID').then((id) => {
      var url = "http://192.168.0.102:9000/users/findOneUser?id=" + id;
      fetch(url, {
        method: "get"
      }).then(res => res.json())
        .then((userData) => {
          this.setState({ userData: userData, name: userData.name, phone: userData.phone, picture: userData.picture })
        })
    }
    )
  }

  updateProfile() {
    var userData = this.state.userData;
    userData.name = this.state.name;
    userData.phone = this.state.phone;
    userData.picture = this.state.picture;
    var url = "http://192.168.0.102:9000/users/updateUserProfile";
    fetch(url, {
      method: "post",
      body: JSON.stringify({ updatedData: this.state.userData }),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    }).then((data) => {
      data.json().then((userData) => {
        this.setState({ editProfile: false })
      });
    })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <View style={styles.headerItems}>
            <View>
              <TouchableOpacity activeOpacity={.5} onPress={this.goToDashboard.bind(this)}>
                <Icon name="arrow-back" style={{ color: "#fff", fontSize: 24, }} />
              </TouchableOpacity>
            </View>
            <Text style={styles.headerText}>Profile</Text>
          </View>
        </View>
        <ScrollView>
          {this.state.editProfile ?
            <TouchableOpacity activeOpacity={.5} onPress={this.selectPhotoTapped.bind(this)}
              style={{
                height: 35, width: 35, backgroundColor: "#ef6e73",
                borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                position: "absolute", left: 200, top: 125, zIndex: 1, alignItems: "center", justifyContent: "center"
              }}>
              <MaterialIcon name="camera-outline" style={{ color: "#fff", fontSize: 18, }} />
            </TouchableOpacity> : null}
          <View style={styles.profileView}>
            {this.state.isLoader ?
              <ActivityIndicator size="large" color="gray" /> :
              <Image style={styles.image} source={{ uri: this.state.picture ? this.state.picture : "https://www.caretechfoundation.org.uk/wp-content/uploads/anonymous-person-221117.jpg" }} />}
          </View>
          <View style={{ paddingLeft: 15, }}>
            {this.state.editProfile ?
              <View>
                <View style={{ marginTop: 20, }}>
                  <Text style={{ fontSize: 14, color: "#ef6e73" }}>Email</Text>
                  <Text style={{ fontSize: 16, marginTop: 5, color: "gray" }}>{"this.state.userData.email"}</Text>
                </View>
                <View style={{ height: 50, width: "85%", }}>
                  <TextInput
                    placeholder="Name"
                    placeholderTextColor="#ef6e73"
                    value={this.state.name}
                    onChangeText={(name) => this.setState({ name })}
                    style={styles.textInput}
                  />
                </View>
                {/* <View style={styles.textInputHeader}>
                  <TextInput
                    placeholder="Nick Name"
                    placeholderTextColor="#ef6e73"
                    value={this.state.nickName}
                    onChangeText={(nickName) => this.setState({ nickName })}
                    style={styles.textInput}
                  />
                </View> */}
                <View style={styles.textInputHeader}>
                  <TextInput
                    placeholder="Contact Number"
                    placeholderTextColor="#ef6e73"
                    value={this.state.phone}
                    onChangeText={(phone) => this.setState({ phone })}
                    style={styles.textInput}
                  />
                </View>
                <View style={{ justifyContent: "center", alignItems: "center", marginTop: 20, }}>
                  <View style={styles.buttonView}>
                    <TouchableOpacity
                      onPress={this.updateProfile.bind(this)}
                      activeOpacity={.6} style={styles.button} >
                      <Text style={styles.buttonText} >UPDATE PROFILE</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View> :
              <View>

                <View>
                  <Text style={{ fontSize: 14, color: "#ef6e73" }}>Name</Text>
                  <Text style={{ fontSize: 16 }}>{this.state.userData.name}</Text>
                </View>
                <View style={{ marginTop: 20, }}>
                  <Text style={{ fontSize: 14, color: "#ef6e73" }}>Email</Text>
                  <Text style={{ fontSize: 16 }}>{this.state.userData.email}</Text>
                </View>
                <View style={{ marginTop: 20 }}>
                  <Text style={{ fontSize: 14, color: "#ef6e73" }}>Contect Number</Text>
                  <Text style={{ fontSize: 16 }}>{this.state.userData.phone}</Text>
                </View>

                {/* <View style={{height: 10, width: "85%", }}>
                <Input label='Name' />
                </View> */}
                <View style={{ alignItems: "flex-end", justifyContent: "flex-end", marginRight: 12, marginTop: 20 }}>
                  <TouchableOpacity activeOpacity={.5}
                    onPress={this.editProfile.bind(this)}
                    style={{
                      height: 50, width: 50, backgroundColor: "#ef6e73",
                      borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                      alignItems: "center", justifyContent: "center"
                    }}>
                    <Icon name="edit" style={{ color: "#fff", fontSize: 24, }} />
                  </TouchableOpacity>
                </View>

              </View>}
          </View>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: "#ef6e73",
    justifyContent: "center",

  },
  headerItems: {
    alignItems: "center", flexDirection: "row",
    width: 100, justifyContent: "space-around",
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  },
  profileView: {
    height: 200, justifyContent: 'center', alignItems: 'center',
  },
  image: {
    height: 130, width: 130,
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    borderColor:"#000"
    
  },
  buttonView: {
    height: 45,
    width: "80%",
    justifyContent: "center",

    // paddingLeft: 18,
    // marginBottom:5
  },
  button: {
    flex: 1,
    backgroundColor: "#ef6e73",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 24,
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
  },
  textInput: {
    // color: "#fff",
    width: "100%",
    fontSize: 12,
    borderBottomColor: "#ef6e73",
    borderBottomWidth: 1,
  },
  textInputHeader: {
    height: 50, width: "85%", marginTop: 20,
    // alignItems: "center",

  },
});