import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import HomeScreen from './screens/HomeScreen'
import NextScreen from './screens/NextScreen'
import {createSwitchNavigator,createAppContainer} from 'react-navigation'


export default class App extends React.Component{
  render(){
    return(
      <View>
      <Text style = {{justifyContent:"center",marginLeft:100}}>SCHOOL ATTENDANCE APP</Text>
    <AppContainer/>
      </View>
    )
  }
}
var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  NextScreen:NextScreen,
})

const AppContainer = createAppContainer(AppNavigator)

