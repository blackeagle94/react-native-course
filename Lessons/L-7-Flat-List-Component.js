import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    {name:'Ahmet', id: '1' },
    {name:'Mehmet', id: '2' },
    {name:'Ali', id: '3' },
    {name:'Veli', id: '4' },
    {name:'Cemil', id: '5' },
    {name:'Dursun', id: '6' },
    {name:'Sergen', id: '7' },
  ])


  const clickHandler = () => {
    setName('Ismail')
  }

  return (
    <View style={styles.container}>

      <FlatList 
        numColumns={2}
        keyExtractor={item => item.id}
        data={people}
        renderItem={({ item }) => <Text style={styles.person}>{item.name}</Text>}
      />

      {/* <ScrollView>
      {people.map(person => <View key={person.key}>
        <Text style={styles.person}>{person.name}</Text>
      </View>)}
      </ScrollView> */}
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
    fontSize:24,
    marginRight:'auto',
    marginLeft:'auto',
    marginTop:24,
  }
});
