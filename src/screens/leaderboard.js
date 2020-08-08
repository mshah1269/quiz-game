
import React , {useState} from 'react';
import { StyleSheet, View ,ImageBackground, FlatList, TouchableOpacity, ViewBase } from 'react-native';
import  { Button, Text, Searchbar , Card , TextInput}  from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { color } from 'react-native-reanimated';



 const Leaderboard = (props) =>{
    
   
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
        
    <Text style={styles.text}>Leaderboard</Text>
      

    <FlatList 
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => item.id}
            data={[
                { name: 'Manan', id: '1',score:'200' },
                { name: 'John', id: '2' , score:'200'},
                { name: 'Will', id: '3', score:'200' },
                { name: 'Yash', id: '4' ,score:'200' },
                { name: 'Manan', id: '5',score:'200' },
                { name: 'John', id: '6' , score:'200' },
                { name: 'Will', id: '7' ,score:'200' },
                { name: 'Yash', id: '18' , score:'200' },
                { name: 'Manan', id: '9',score:'200' },
                { name: 'John', id: '10' , score:'200'},
                { name: 'Will', id: '13', score:'200' },
                { name: 'Yash', id: '14' ,score:'200' },
                { name: 'Manan', id: '15',score:'200' },
                { name: 'John', id: '16' , score:'200' },
                { name: 'Will', id: '17' ,score:'200' },
                { name: 'Yash', id: '12' , score:'200' },
                
                ]}
            renderItem={renderGridItem}

            />
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
  text:{
    
      width:'90%',
      textAlign:'center',
      margin:10,
      marginVertical:20,
      fontSize:25,
      color:'#620bee'
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



export default Leaderboard;