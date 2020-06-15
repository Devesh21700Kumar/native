import React from "react";
import { View,Text,Button,StyleSheet,TouchableOpacity } from "react-native";

//const HomeScreen=(props)=>{
  //DESTRUCTURING BELOW
  const HomeScreen=({navigation})=>{
//console.log(props);

 return( 
   <View>
    <Text style={styles.text}>HomeScreen</Text>

   <Button
    onPress={()=>navigation.navigate('Components')}
    title="Go to components demo"
    />

    <Button 
    title='Go to List demo now'
    onPress={()=>navigation.navigate('List')}
    />

    <Button 
    title='Go to Image demo'
    onPress={()=>navigation.navigate('Image')}
    />
    
     <Button 
    title='Go to Counter demo'
    onPress={()=>navigation.navigate('Counter')}
    />

    <Button 
    title='Go to Color demo'
    onPress={()=>navigation.navigate('Color')}
    />

  </View>
 );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});


export default HomeScreen;
/*<TouchableOpacity onPress={()=>props.navigation.navigate('List')}>
<Text>Go to List demo</Text>
<Text>Go to List demo</Text>
<Text>Go to List demo</Text>
</TouchableOpacity>
*/