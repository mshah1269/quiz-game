
import React , {useState} from 'react';
import { StyleSheet, View , FlatList , TouchableOpacity } from 'react-native';
import  { Button, Text, Searchbar , Card , TextInput}  from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { ToggleButton } from 'react-native-paper';

import Earned from '../components/earned'

 const History = (props) =>{
    
   
    const [status, setStatus] = useState('earned');
    const renderGridItem = itemData =>{
      return(
          <View style={styles.cardview}>
              <View style={styles.card}>
                  <View>
                      <Text style={{ borderWidth : 2, borderColor:'#620bee', borderRadius: 50 ,textAlignVertical:'center',textAlign:'center', width:40, height:40 }}>{itemData.item.id}</Text>
                  </View>
                  <View>
                      <Text>{itemData.item.name}</Text>
                  </View>
                      <Text>{itemData.item.score}</Text>             
              </View>
          </View>
      );    
    }






  return (

    <View style={styles.container}>
        
    <Text style={styles.text}>Your History</Text>

    <View style={styles.toggleButton}>
      <Button mode={status =='earned' ? 'contained' : 'outlined'}
       style={{borderTopRightRadius : 0 , borderBottomRightRadius:0}}
       onPress={() => setStatus('earned')}
       >
        EARNED
      </Button>
      <Button mode={status=='earned' ? 'outlined' : 'contained'}
        style={{borderTopLeftRadius : 0 , borderBottomLeftRadius:0}}
        onPress={() => setStatus('played')}
        >
        PLAYED 
      </Button>      
    </View>

    {
      status=='earned' ? 
      
        <Earned />
    

       : 

       <View>

       <FlatList 
           showsVerticalScrollIndicator={false}
           keyExtractor={(item, index) => item.id}
           data={[
             
               { name: 'Yash', id: '14' ,score:'200' },
               { name: 'Manan', id: '15',score:'200' },
               { name: 'John', id: '16' , score:'200' },
               { name: 'Will', id: '17' ,score:'200' },
               { name: 'Yash', id: '12' , score:'200' },
               
               ]}
           renderItem={renderGridItem}

           />
     </View>

    }
    </View>
  
  );
}



const styles = StyleSheet.create({
  container: {
    
    height:'100%',
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingHorizontal:10,
    // backgroundColor:'red'
  },
  buttonOut:{
    marginBottom:250
  },
  text:{
      color:'black',
      width:'90%',
      textAlign:'center',
      margin:10,
      marginVertical:20,
      fontSize:17
  },
  toggleButton :{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center' 
  },
  sub:{
    height:'50%',
  //   backgroundColor:'white',
    marginVertical:20,
    padding:10
},
card: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    paddingHorizontal:10,
    width:"90%",
    margin:10,
    flexDirection:'row',
    paddingVertical:5,
    justifyContent:'space-between',
    alignItems:'center'

  },
  cardview:{
      justifyContent:'center',
      alignItems:'center',
      
  }

 

});



export default History;