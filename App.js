import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';

export default function App() {

  // const[name,setName]= useState([])

  // const add = function(){

  //   const newName = [...name]
  //   newName.push(text)
  //   setName(newName)

  // }

  // const name = ['hello','hammad','Arif','wasey']
  

  // const names= function(e){

  //   const inp = e.target.value
  //   console.log(inp)

  // }
  return (
    


    
      <View style={styles.container}>
      <View>
      <TextInput   placeholder='Write Here'  style={{ height: 40, borderColor: 'gray', borderWidth: 1, maxWidth: 200,minWidth:200 }}/>
      <Button  title='Add'/>
      </View>
      <View style={{marginTop:20}}>
        {/* {name.map(function(item){
          return(
            <View style={{display: "flex"}}>
          <Text style={{marginTop:20}}>{item}</Text> 
          <TouchableOpacity>
          <Button title='Delete'/>
          </TouchableOpacity>
          </View>
          )
        })} */}

   <Text style={{marginTop:20}}>hammad</Text>
   <TouchableOpacity>
     <Button title='Delete'/>
    
   </TouchableOpacity>
        
      </View>
      <StatusBar style="auto" />
      </View>
      
    
   
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
