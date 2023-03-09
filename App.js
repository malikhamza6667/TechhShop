
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {ScrollView,StatusBar,StyleSheet,Text,View,} from 'react-native';
import Splash from './Screens/Splash';
import Home from './Screens/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screens/Login';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const ButtomTab=createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Login" component={Login} />
    </Drawer.Navigator>
  );
}

const Tab=()=>{
  return(
  
    <ButtomTab.Navigator>
    <ButtomTab.Screen name="MyDrawer" component={MyDrawer} />
    <ButtomTab.Screen name="Home" component={Home} />
    <ButtomTab.Screen name="Login" component={Login} />
  </ButtomTab.Navigator>
 
  );
}



const  App =() => {
  
  return (

   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Tab' component={Tab}  options={{headerShown:false}}/>
      {/* <Stack.Screen  name='Splash' component={Splash} options={{headerShown:false}}/> */}
      <Stack.Screen  name='Home' component={Home} options={{headerShown:false}}/>
      <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
      </Stack.Navigator>
   </NavigationContainer>

   
  );
}

const styles = StyleSheet.create({
 });

export default App;
