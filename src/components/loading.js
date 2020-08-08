import React from 'react';
// import { Button ,TextInput} from 'react-native-paper';
import {
  ActivityIndicator,
  View,
  StyleSheet
} from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';

const LoadingScreen = () => {

  return (
   <View style={styles.loading}> 
    <ActivityIndicator size="large" color="blue" />
   </View>
  );
};


const styles= StyleSheet.create({
    loading:{
    flex:1,
    justifyContent:"center",
    alignItems:"center" 
    }
    
  })


export default LoadingScreen;