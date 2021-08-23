import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('Yhtyyar')
  const [age, setAge] = useState('27')


  const clickHandler = () => {
    setName('Ismail')
 
  }

  return (
    <View style={styles.container}>
        <Text>My name is {name} and I am {age}</Text>
        <Text>Enter name:</Text>
        <TextInput 
          style={styles.input}
          placeholder="e.g. John Doe"
          onChangeText={(val) => setName(val)}
        />
        <Text>Enter age:</Text>
        <TextInput 
          keyboardType="numeric"
          style={styles.input}
          placeholder="e.g. 99"
          onChangeText={(val) => setAge(val)}
        />
        <View style={styles.buttonContainer}>
          <Button title="Update State" onPress={clickHandler}/>
        </View>
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
  input :{
    borderWidth:1,
    borderColor:'#777',
    padding:8,
    margin:10,
    width:200
  }
});