

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

class AppNavigato extends React.Component{
  login(){
    // firebase.auth().signInWithPhoneNumber("+923172679586")
    // .then(confirmResult => console.log(confirmResult))
    // .catch(error => console.log(error ));
  }
  render(){
    return(
      <View>
        <Text>Hello</Text>
        <Button title="Hello" onPress={this.login.bind(this)}/>
        </View>
    )
  }
}


const AppNavigator = createAppContainer(createStackNavigator({
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
export default AppNavigator;


// const App = ()  => {
//   return (
//       <View>
//         jjjj
//       </View>

//   );
// };

// export default App;
