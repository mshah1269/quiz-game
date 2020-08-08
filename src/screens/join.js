
import React , {useState} from 'react';
import { StyleSheet, View ,ImageBackground, FlatList, TouchableOpacity, ViewBase } from 'react-native';
import  { Button, Text, Searchbar , Card , TextInput}  from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';



 const Join = (props) =>{
    
    const [text, setText] = React.useState('');


  return (

    <View style={styles.container}>
        
    <Text style={styles.text}>Enter ID  to Join Game</Text>

    <TextInput
      label="ENTER ID"
      mode='outlined'
    //   value={text}
      onChangeText={text => setText(text)}
    />      
    
    <View style={styles.buttonOut}>
        <Button  mode="contained" style={styles.button}>
            JOIN GAME
        </Button>    
    </View>    
    {/* <ImageBackground source={require('../../assets/join.png')} style={{flex:1, resizeMode: "cover",
    justifyContent: "center"}}>
      <Text style={styles.text}>Inside</Text>
    </ImageBackground> */}
     
      
    </View>
  
  );
}



const styles = StyleSheet.create({
  container: {
    
    height:'100%',
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingHorizontal:20,
    // backgroundColor:'red'
  },
  button : {
    
    width : '80%',
    paddingVertical:10,
    marginVertical:10,
    justifyContent: 'center',
  },
  text:{
      color:'black',
      width:'90%',
      textAlign:'center',
      margin:10,
      marginVertical:20,
      fontSize:17
  },
  buttonOut:{
      justifyContent:'center',
      width:'100%',
    //   backgroundColor:'red',
      alignItems:'center',
      marginTop:50
  }
 

});



export default Join;