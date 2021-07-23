import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import db from '../config'
import NextScreen from '../screens/NextScreen'





export default class HomeScreen extends React.Component{

 nextScreen =()=>{
    this.props.navigation.navigate('NextScreen');
  }
  

    jacobPressed(){
        var jacob1  = db.ref('Jacob/'+'/')
        jacob1.update({
            present:true
        })
    }

    tomPressed(){
        var tom1  = db.ref('Tom/'+'/')
        tom1.update({
            present:true
        })
    }

    raviPressed(){
        var ravi1  = db.ref('Ravi/'+'/')
        ravi1.update({
            present:true
        })
    }

    jacobPressed2(){
        var jacob2 = db.ref('Jacob/'+'/')
        jacob2.update({
            absent:true
        })
    }

    tomPressed2(){
        var tom2  = db.ref('Tom'+'/')
        tom2.update({
            absent:true
        })
    }

    raviPressed2(){
        var ravi2  = db.ref('Ravi/'+'/')
        ravi2.update({
            absent:true
        })
    }


    render(){
        return(
           <View>
               <Text style = {styles.studentNames}>Ravi</Text>
               <TouchableOpacity style = {styles.presentButton} onPress={()=>{
                    this.raviPressed()
               }}>
                <Text>Submit</Text>
               </TouchableOpacity>
                <TouchableOpacity style = {styles.absentButton}onPress={()=>{
                    this.raviPressed2()
               }}>
                <Text>Absent</Text>
               </TouchableOpacity>
                <Text style = {styles.studentNames}>Tom</Text>
                  <TouchableOpacity style = {styles.presentButton}onPress={()=>{
                    this.tomPressed()
               }}>
                <Text>Submit</Text>
               </TouchableOpacity>
                <TouchableOpacity style = {styles.absentButton} onPress={()=>{
                    this.tomPressed2()
               }}>
                <Text>Absent</Text>
               </TouchableOpacity>
                  <Text style = {styles.studentNames}>Jacob</Text>
                    <TouchableOpacity style = {styles.presentButton} onPress={()=>{
                    this.jacobPressed()
               }}>
                <Text>Submit</Text>
               </TouchableOpacity>
                <TouchableOpacity style = {styles.absentButton} onPress={()=>{
                    this.raviPressed2()
               }}>
                <Text>Absent</Text>
               </TouchableOpacity>
               <TouchableOpacity style = {styles.submitButton}onPress={()=>{
                  this.nextScreen()
               }}>
                <Text>Submit</Text>
               </TouchableOpacity>
           </View>
         
          



        )
    }
}

const styles = StyleSheet.create({
    studentNames:{
        marginTop:100,
        marginLeft:30
    },

    presentButton:{
      width: 100,
    height: 50,
    marginTop: 15,
    marginLeft:100,
   
    justifyContent: 'center',
    backgroundColor: 'green',

    },

    absentButton:{
      width: 100,
    height: 50,
    marginTop: 15,
    marginLeft:100,
   
    justifyContent: 'center',
    backgroundColor: 'red',
},
submitButton:{
   width: 100,
    height: 50,
    marginTop: 50,
    marginLeft:100,
   
    justifyContent: 'center',
    alignItems:"center",
    backgroundColor: 'yellow',
}

})