

import React from 'react';
import {
  View, Text , Button
} from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack"
import firebase from 'react-native-firebase';
import Login from "./src/Login/Login";
import Register from './src/Register/Register';
import Dashboard from "./src/Dashboard/dashoboard";
import Contacts from "./src/Dashboard/Contacts/contacts";
import Chats from "./src/Dashboard/Chats/chats";
import Request from "./src/Dashboard/Request/request";
import Room from "./src/Dashboard/Room/room";
import Profile from "./src/Profile/profile"
import { GoogleSignin } from '@react-native-community/google-signin';

// import firebase from 'react-native-firebase'
// 767381233678-5m57rfovetu92ago5qhpnmb8j6dl63e3.apps.googleusercontent.com

class AppNavigato extends React.Component{
  // login(){
    // firebase.auth().signInWithPhoneNumber("+923172679586")
    // .then(confirmResult => console.log(confirmResult))
    // .catch(error => console.log(error ));
  // }
  async  googleLogin() {
    try {
      // add any configuration settings here:
      
      // await GoogleSignin.configure({
      //   androidClientId:"767381233678-5m57rfovetu92ago5qhpnmb8j6dl63e3.apps.googleusercontent.com"
      // });
      GoogleSignin.configure({
        webClientId: '767381233678-5m57rfovetu92ago5qhpnmb8j6dl63e3.apps.googleusercontent.com',// my clientID
        
    });
  
      const data = await GoogleSignin.signIn();
      console.log(data)
      // create a new firebase credential with the token
      const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken)
      // login with credential
      const firebaseUserCredential = await firebase.auth().signInWithCredential(credential);
  
      console.warn(JSON.stringify(firebaseUserCredential.user.toJSON()));
    } catch (e) {
      console.error(e);
    }
  }
// googleLogin(){
//   try {
//     // add any configuration settings here:
//     await GoogleSignin.configure();
//     const data = await GoogleSignin.signIn();
//     // create a new firebase credential with the token
//     const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken)
//     // login with credential
//     const firebaseUserCredential = await firebase.auth().signInWithCredential(credential);

//     console.warn(JSON.stringify(firebaseUserCredential.user.toJSON()));
//   } catch (e) {
//     console.error(e);
//   }
// }

  
  render(){
    return(
      <View>
        {/* <Text>Hello</Text> */}
        <Button title="Hello" onPress={this.googleLogin.bind(this)}/>
        </View>
    )
  }
}


const AppNavigator = createAppContainer(createStackNavigator({
  Room: {
    screen: Room, navigationOptions: {
      header: null
    }
  },
  SignIn: {
    screen: Login, navigationOptions: {
      header: null
    }
  },
  Dashboard: {
    screen: Dashboard, navigationOptions: {
      header: null
    }
  },
  Profile: {
    screen: Profile, navigationOptions: {
      header: null
    }
  },
  
  SignUp: {
    screen: Register, navigationOptions: {
      header: null
    }
  },
  Contacts: {
    screen: Contacts, navigationOptions: {
      header: null
    }
  },
  Chats: {
    screen: Chats, navigationOptions: {
      header: null
    }
  },
 

}))
export default AppNavigato;


// const App = ()  => {
//   return (
//       <View>
//         jjjj
//       </View>

//   );
// };

// export default App;
