import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    {name:'Ahmet', key: '1' },
    {name:'Mehmet', key: '2' },
    {name:'Ali', key: '3' },
    {name:'Veli', key: '4' },
    {name:'Cemil', key: '5' },
    {name:'Dursun', key: '6' },
    {name:'Sergen', key: '7' },
  ])


  const clickHandler = () => {
    setName('Ismail')
 
  }

  return (
    <View style={styles.container}>
      <ScrollView>
      {people.map(person => <View key={person.key}>
        <Text style={styles.person}>{person.name}</Text>
      </View>)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop:40,
    paddingHorizontal:20
  },
  person: {
    marginTop:24,
    padding:30,
    backgroundColor:'pink',
    fontSize:24
  }
});
