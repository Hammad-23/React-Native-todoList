import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

export default function App() {

  const[name,setName]= useState([])

  const add = function(){

  }

  // const name = ['hello','hammad','Arif','wasey']
  

  // const names= function(e){

  //   const inp = e.target.value
  //   console.log(inp)

  // }
  return (
    <ScrollView >


    <View style={styles.container}>
      <View>
      <TextInput  onChangeText={(text)=>setName({text})} placeholder='Write Here'  style={{ height: 40, borderColor: 'gray', borderWidth: 1, maxWidth: 200,minWidth:200 }}/>
      <Button onPress={add} title='Add'/>
      </View>
      <View style={{marginTop:20}}>
        {name.map(function(item){
          return(
            <View style={{display: "flex"}}>
          <Text style={{marginTop:20}}>{item}</Text> 
          <Button title='Delete'/>
          </View>
          )
        })}

   {/* <Text style={{marginTop:20}}>hammad</Text> */}
        
      </View>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
