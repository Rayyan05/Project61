import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import db from '../config'





export default class HomeScreen extends React.Component{

  backtoHomeScreen(){
    this.props.navigation.navigate('HomeScreen')
  }
    render(){
      return(
        <TouchableOpacity style = {{width: 100,
    height: 50,
    marginTop: 15,
    marginLeft:100,
   
    justifyContent: 'center',
    backgroundColor: 'red',}} onPress={()=>{
                    this.backtoHomeScreen()
               }}>
        <Text>Get Attendence</Text>
        </TouchableOpacity>
      )
    }
}