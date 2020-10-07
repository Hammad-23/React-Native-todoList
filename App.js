import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {

  const[name,setName]= useState()
  

  // const names= function(e){

  //   const inp = e.target.value
  //   console.log(inp)

  // }
  return (
    <View style={styles.container}>
      <View>
      <TextInput  onChangeText={(text)=>setName({text})} placeholder='Write Here'  style={{ height: 40, borderColor: 'gray', borderWidth: 1, maxWidth: 200,minWidth:200 }}/>
      </View>
      <View style={{marginTop:20}}>
        {/* {name.map(function(item){
          return(
          <Text style={{marginTop:20}}>{item}</Text>
          )
        })} */}

   <Text style={{marginTop:20}}>hammad</Text>
        
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
