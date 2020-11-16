

import React from 'react';
import {
  View, Text , Button
} from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack"
import Login from "./src/Login/Login";
import Register from './src/Register/Register';
import Dashboard from "./src/Dashboard/dashoboard";
import Contacts from "./src/Dashboard/Contacts/contacts";
import Chats from "./src/Dashboard/Chats/chats";
import Request from "./src/Dashboard/Request/request";
import Room from "./src/Dashboard/Room/room";
import Profile from "./src/Profile/profile"
// import { GoogleSignin } from 'react-native-google-signin';
import { GoogleSignin } from '@react-native-community/google-signin';

import firebase from 'react-native-firebase'
// 767381233678-5m57rfovetu92ago5qhpnmb8j6dl63e3.apps.googleusercontent.com
GoogleSignin.configure({
  scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
  webClientId: '<FROM DEVELOPER CONSOLE>', // client ID of type WEB for your server (needed to verify user ID and offline access)
  offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  hostedDomain: '', // specifies a hosted domain restriction
  loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
  forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
  accountName: '', // [Android] specifies an account name on the device that should be used
  iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
});
class AppNavigato extends React.Component{
  // login(){
    // firebase.auth().signInWithPhoneNumber("+923172679586")
    // .then(confirmResult => console.log(confirmResult))
    // .catch(error => console.log(error ));
    
  // }

  async  googleLogin() {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo)
      this.setState({ userInfo });
    } catch (error) {
    console.log(error)
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
    // try {
      // add any configuration settings here:
      
      // await GoogleSignin.configure({
      //   androidClientId:"767381233678-5m57rfovetu92ago5qhpnmb8j6dl63e3.apps.googleusercontent.com"
      // });
    //   GoogleSignin.configure({
    //     scopes: ['https://www.googleapis.com/auth/userinfo.profile', 
    //     'react-todo-b9ad7@appspot.gserviceaccount.com'],
    //     webClientId: '767381233678-5m57rfovetu92ago5qhpnmb8j6dl63e3.apps.googleusercontent.com',// my clientID
    //     offlineAccess: false, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    //     hostedDomain: '', // specifies a hosted domain restriction
    //     loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
    //     forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
    //     accountName: '',
    // });
  
    //   const data = await GoogleSignin.signIn();
    //   console.log(data)
    //   // create a new firebase credential with the token
    //   const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken)
    //   // login with credential
    //   const firebaseUserCredential = await firebase.auth().signInWithCredential(credential);
  
    //   console.warn(JSON.stringify(firebaseUserCredential.user.toJSON()));
    // } catch (e) {
    //   console.error(e);
    // }
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
        <Button title="Hello World" onPress={this.googleLogin.bind(this)}/>
        </View>
    )
  }
}


const AppNavigator = createAppContainer(createStackNavigator({
  SignIn: {
    screen: Login, navigationOptions: {
      header: null
    }
  },
  Room: {
    screen: Room, navigationOptions: {
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
