import React,{useState} from 'react';
import {StyleSheet,Text,View,Button,TextInput} from 'react-native';

const TextScreen=()=>{
const [name,setName]=useState('');

    return(
<View>
    <Text>Enter Password</Text>
    <TextInput
     style={styles.input}
     autoCapitalize="none"
     autoCorrect={false}
     value={name}
     onChangeText={(newValue)=>setName(newValue)}
     />
     <Text>My name is {name}</Text>
  {name.length<4 ? <Text>Password must be 4 characters</Text> : null}
</View>
    );
}

const styles=StyleSheet.create({
    input:{
        margin:15,
        borderColor:'black',
        borderWidth:1
    }
})

export default TextScreen;