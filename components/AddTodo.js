import React, {useState} from 'react';
import { StyleSheet, Button, View, TextInput, Alert } from 'react-native';


const AddTodo = ({submitHandler}) => {
    const [text, setText] = useState('')

    const changeHandler = (val) => {
        setText(val)
    }

    const addTodo = () => {
        if(text.length > 3) {
            submitHandler(text)
            setText('')
        } else {
            Alert.alert('OOPS!', 'Todos must be over 3 chars long', [
                {text:'Understood', onPress: () => console.log('alert closed')}
            ])
        }
       
    }

    return (
        <View>
            <TextInput
                value={text}
                style={styles.input}
                placeholder="new todo..."
                onChangeText={changeHandler}
            />
            <Button onPress={addTodo} title="Add Todo" color='coral'/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd'
    }
})

export default AddTodo