

import React from 'react';
import {
  View,
} from 'react-native';
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack"



import SignIn from "./src/Login/fan";
import Login from "./src/Login/Login";
import Register from './src/Register/Register'
import { from } from 'rxjs';




const AppNavigator = createAppContainer(createStackNavigator({
      SignIn:{screen:Login, navigationOptions:{
        header:null
      }},
      SignUp:{screen:Register, navigationOptions:{
        header:null
      }},
}))



export default AppNavigator;


// const App = ()  => {
//   return (
//       </>
  
//   );
// };

// export default App;
