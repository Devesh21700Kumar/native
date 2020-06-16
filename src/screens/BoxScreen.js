import React from 'react';
import {Text,View,StyleSheet,Button} from 'react-native';

const BoxScreen=()=>{
    return(
    <View style={styles.viewStyle}>
        <Text style={styles.textOneStyle}>
            child1
        </Text>
        <Text style={styles.textTwoStyle}>
            child1
        </Text>
        <Text style={styles.textThreeStyle}>
            child1
        </Text>
    </View>
    );
}

const styles=StyleSheet.create({
    viewStyle:{
        borderWidth:3,
        borderColor:'black',
       //DEFAULT PARENT VIEW--> alignItems:'stretch'
       //DEFAULT -->flexDirection:'column'
        alignItems:'stretch',
        flexDirection:'column',
        height:200,
        justifyContent:'flex-start'
    },
    textOneStyle:{
        borderWidth:3,
        borderColor:'red',
        flex:1
        //marginVertical:20,
        //marginHorizontal:20       
    },
    textTwoStyle:{
        borderWidth:3,
        borderColor:'red',
        flex:1
        //default-->position:'relative'
    },
    textThreeStyle:{
        borderWidth:3,
        borderColor:'red',
        flex:1
    }
})

export default BoxScreen;