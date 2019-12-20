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
  TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import MaterialIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-picker';


import { Dimensions, TouchableHighlight, } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editProfile: false,
      name:"Shifa",
      nickName: "no nick name",
      phone:"0344567987"
    }
  }


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
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source,
        });
      }
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
            <Text style={styles.headerText}>Hello</Text>
          </View>
        </View>
        <ScrollView>
          <TouchableOpacity activeOpacity={.5} onPress={this.selectPhotoTapped.bind(this)}
            style={{
              height: 35, width: 35, backgroundColor: "#ef6e73",
              borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
              position: "absolute", left: 200, top: 125, zIndex: 1, alignItems: "center", justifyContent: "center"
            }}>
            <MaterialIcon name="camera-outline" style={{ color: "#fff", fontSize: 18, }} />
          </TouchableOpacity>
          <View style={styles.profileView}>
            <Image style={styles.image} source={this.state.avatarSource ? this.state.avatarSource : require('../Images/flower.jpg')} />
          </View>
          <View style={{ paddingLeft: 15,  }}>
            {this.state.editProfile ?
              <View>
                 <View style={{height: 50, width: "85%",}}>
                    <TextInput
                        placeholder="Name"
                        placeholderTextColor="#ef6e73"
                        value={this.state.name}
                        onChangeText={(name) => this.setState({ name })}
                        style={styles.textInput}
                    />
                </View>
                <View style={styles.textInputHeader}>
                    <TextInput
                        placeholder="Nick Name"
                        placeholderTextColor="#ef6e73"
                        value={this.state.nickName}
                        onChangeText={(nickName) => this.setState({ nickName })}
                        style={styles.textInput}
                    />
                </View>
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
                onPress={this.editProfile.bind(this)}
                activeOpacity={.6} style={styles.button} >
                <Text style={styles.buttonText} >UPDATE PROFILE</Text>
              </TouchableOpacity>
            </View>
          </View>
              </View> :
              <View>
                <View>
                  <Text style={{ fontSize: 14, color: "#ef6e73" }}>Name</Text>
                  <Text style={{ fontSize: 16 }}>My name is fsfsdfsdfs</Text>
                </View>
                <View style={{ marginTop: 20, }}>
                  <Text style={{ fontSize: 14, color: "#ef6e73" }}>Nick name</Text>
                  <Text style={{ fontSize: 16 }}>Shifa sdsdfsdfsdf</Text>
                </View>
                <View style={{ marginTop: 20 }}>
                  <Text style={{ fontSize: 14, color: "#ef6e73" }}>Contect Number</Text>
                  <Text style={{ fontSize: 16 }}>0343534535</Text>
                </View>
                <View style={{alignItems: "flex-end", justifyContent: "flex-end" , marginRight:12 , marginTop: 20 }}>
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