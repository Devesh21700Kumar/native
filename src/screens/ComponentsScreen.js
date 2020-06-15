import React from 'react';
import {Text,StyleSheet,View} from 'react-native';

const ComponentsScreen=()=>{
    const greeting="HEY";
    
  return(
       <View>
      <Text style={styles.textStyle}>This is the Components Screen YES</Text>
       <Text style ={styles.subHeaderStyle}>{greeting} CHIKULU</Text>   
      </View>
  );
}

const styles =StyleSheet.create({
    textStyle:{
        fontSize:30
    },
    subHeaderStyle:{
        fontSize:20
    }
});

export default ComponentsScreen;