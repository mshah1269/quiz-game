
import React from 'react';
import { StyleSheet, View } from 'react-native';
import  { Button, Text }  from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';



 const Main = (props) =>{
  return (

    <View style={styles.container}>
        <LinearGradient
          colors={['#620bee', 'transparent']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: 300,
          }}
        />  
    <Text style={styles.text}>Each round is 10 questions, you can host as many rounds as you want</Text>
    
      
    
    <Button icon="star-three-points" mode="contained" style={styles.button}
      onPress={() => props.navigation.navigate('Host')}
    >
         HOST
    </Button>

    <Button icon="set-all" mode="contained" style={styles.button}
       onPress={() => props.navigation.navigate('Join')}
    >
         JOIN
    </Button>

    <Button icon="star" mode="contained" style={styles.button}
      onPress={() => props.navigation.navigate('Leaderboard')}
    >
         LEADERBOARD
    </Button>
    <Button icon="star" mode="contained" style={styles.button}
      onPress={() => props.navigation.navigate('History')}
    >
         HISTORY
    </Button>
     
      
    </View>
  
  );
}



const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal:20

  },
  button : {
    width : '60%',
    marginVertical:10,
   
  },
  text:{
      color:'white',
      width:'90%',
      textAlign:'center',
      marginBottom:'80%',
      fontSize:15

  }
});



export default Main;