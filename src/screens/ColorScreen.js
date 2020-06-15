import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';

const ColorScreen=()=>{
return(
    <View>
        <Button title='Add a color'/>
     <View style={{height:100,width:100,backgroundColor:randomRgb()}}/>
    </View>
)
}
//Random colors generation
const randomRgb=()=>{
    const red=Math.floor(Math.random()*256);
    const green=Math.floor(Math.random()*256);
    const blue=Math.floor(Math.random()*256);

    return `rgb(${red},${green},${blue})`;
}

const styles=StyleSheet.create({});

export default ColorScreen;
