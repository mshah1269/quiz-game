
import React , {useState, useEffect} from 'react';
import { StyleSheet, View  } from 'react-native';
import  { Button, Text, Divider , ActivityIndicator}  from 'react-native-paper';




 const GameId = (props) =>{

  const [animating , setAnimating] = useState(true)

  useEffect(()=>{

   setTimeout(() => {
      console.log("gameid")
      setAnimating(false)
    }, 1000)
  })  

  if(animating){
    return(
      <View  style={{flex:1 , justifyContent:"center" , alignItems:'center'}}>
      <ActivityIndicator animating={true} />
    </View>

    );
  }
  else{  
  return (

    <View style={styles.container}>

        <View style={styles.card}>
          <Text style={styles.text}>Your Game ID</Text>
          <Text style={styles.text}>12345</Text>
        </View>

        <Text style={{marginTop:20 }}>Share your GameID with Friends !</Text>

        <Divider style={{width:"100%" , marginVertical:20, elevation: 5 }}/>

        <Text style={styles.text , {color:'red'}}>Player Waiting...</Text>
        <Text style={styles.text}>Player1</Text>

        
        <View style={styles.buttonOut}>
            <Button  mode="contained" style={styles.button}>
                START GAME
            </Button>    
        
      </View>
      

    

   

    </View>
    
  );
}
}



const styles = StyleSheet.create({
  container: {
    
    height:'100%',
    backgroundColor: '#fff',
    alignItems: 'center',
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
      color:'white',
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
  },
  card: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: '#620bee',
    marginTop:30,
    width:'70%',
    height:'20%'
    
  },
  outercard:{
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,


  }
 

});



export default GameId;