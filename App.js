import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableWithoutFeedback, Keyboard} from 'react-native';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

export default function App() {
  const [todos, setTodos] = useState([
    {text:'buy coffee', key: '1' },
    {text:'go to school', key: '2' },
    {text:'cook dinner', key: '3' },
  ])

  const pressHandler = (key) => {
    setTodos((prevItem) => {
      return prevItem.filter(item => item.key != key)
    })
  }

  const submitHandler = text => {
      setTodos((prevTodos) => {
        return [{text, key:Math.random().toString()}, ...prevTodos]
      })
  } 

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}/>
        <View style={styles.list}>
            <FlatList 
              data={todos}
              renderItem={(({item}) => (<TodoItem item={item} pressHandler={pressHandler}/>))}
            />
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding:40
  },
  list: {
    marginTop:20
  }
});
