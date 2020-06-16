import React from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import ColorCounter from '../components/ColorCounter'
import { useState } from 'react';

const COLOR_INCREMENT=15;
const COLOR_DECREMENT=5;

const SquareScreen=()=>{
    const[red,setRed]=useState(0);
    const[green,setGreen]=useState(0);
    const[blue,setBlue]=useState(0);
//initialised to 0

const setColor=(color,change)=>{
//if(color==='red'){
    switch(color){

    case 'red':   
    if(red+change>255|| red+change===0){
        return;
    }else{
        setRed(red+change);
    }
    return;

    //TERNARY
    case 'green':
    green+change>255||green+change<0?null:setGreen(green+change)
    return;

    case 'blue':
    blue+change>255||blue+change<0?null:setBlue(blue+change)
    return;
    
    default:
    return;    
 }
};

return(
    <View>
   
       <ColorCounter
       onIncrease={()=>setColor('red',COLOR_INCREMENT)}
       onDecrease={()=>setColor('red',-1*COLOR_INCREMENT)}
       color='red'/> 
   
       <ColorCounter
       onIncrease={()=>setColor('blue',COLOR_INCREMENT)}
       onDecrease={()=>setColor('blue',-1*COLOR_INCREMENT)}
       color='blue'/> 
   
       <ColorCounter 
       onIncrease={()=>setColor('green',COLOR_INCREMENT)}
       onDecrease={()=>setColor('green',-1*COLOR_INCREMENT)}
       color='green'/> 
   
   <View style={{height:150,width:150,backgroundColor:`rgb(${red},${green},${blue})`}}/>
   
    </View>
       );
   }

/*return(
 <View>

    <ColorCounter
    onIncrease={()=>setRed(red+COLOR_INCREMENT)}
    onDecrease={()=>setRed(red-COLOR_DECREMENT)}
    color='Red'/> 

    <ColorCounter
    onIncrease={()=>setBlue(Blue+COLOR_INCREMENT)}
    onDecrease={()=>setBlue(Blue-COLOR_DECREMENT)}
    color='Blue'/> 

    <ColorCounter 
    onIncrease={()=>setGreen(Green+COLOR_INCREMENT)}
    onDecrease={()=>setGreen(Green-COLOR_DECREMENT)}
    color='Green'/> 

<View style={{height:150,width:150,backgroundColor:`rgb(${red},${Green},${Blue})`}}/>

 </View>
    );
}*/


const styles=StyleSheet.create({})

export default SquareScreen;