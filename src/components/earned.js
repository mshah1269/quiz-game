
import React , {useState} from 'react';
import { StyleSheet, View ,ImageBackground, FlatList, TouchableOpacity, ViewBase } from 'react-native';
import  { Button, Text, Searchbar , Card , TextInput}  from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { color } from 'react-native-reanimated';



 const Earned = (props) =>{
    
   
    const renderGridItem = itemData =>{
        return(
            <View style={styles.cardview}>
                <View style={styles.card}>
                    <View>
                        <Text style={{color: itemData.item.result== 'W' ? 'green' : 'red' , borderWidth : 2, borderColor:'#620bee', borderRadius: 50 ,textAlignVertical:'center',textAlign:'center', width:40, height:40 }}>{itemData.item.result}</Text>
                    </View>
                    <View style={{flexDirection:'column'}}>
                        <Text style={{marginVertical:5}}>2 Players      Public</Text>
                        <Text  style={{marginVertical:5}}>Subject         12/12/12</Text>
                    </View>
                 
                    <Text
                         style={{color: itemData.item.result== 'W' ? 'green' : 'red' }}
                    >{itemData.item.result=='W' ? '+' : '-'}{itemData.item.score}</Text>
                    

                       
                </View>
            </View>
        );    
      }



  return (

    <View style={{
        height:'80%',
        marginTop:10 
    }}>
      

    <FlatList 
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => item.id}
            data={[
                { name: 'Manan', id: '1',score:'200' , result:'W' },
                { name: 'John', id: '2' , score:'200', result:'L'},
                { name: 'Will', id: '3', score:'200' , result:'W'},
                { name: 'Yash', id: '4' ,score:'200' , result:'W'},
                { name: 'Manan', id: '5',score:'200' , result:'L'},
                { name: 'John', id: '6' , score:'200' , result:'W'},
                { name: 'Will', id: '7' ,score:'200' , result:'W'},
                { name: 'Yash', id: '18' , score:'200' , result:'L'},
                { name: 'Manan', id: '9',score:'200' , result:'W'},
                { name: 'John', id: '10' , score:'200', result:'W'},
                { name: 'Will', id: '13', score:'200' , result:'L'},
                { name: 'Yash', id: '14' ,score:'200' , result:'W'},
                { name: 'Manan', id: '15',score:'200' , result:'W'},
                { name: 'John', id: '16' , score:'200' , result:'L'},
                { name: 'Will', id: '17' ,score:'200' , result:'W'},
                { name: 'Yash', id: '12' , score:'200' , result:'W'},
                
                ]}
            renderItem={renderGridItem}

            />
    </View>
  
  );
}



const styles = StyleSheet.create({
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
    margin:12,
    flexDirection:'row',
    paddingVertical:5,
    justifyContent:'space-between',
    alignItems:'center'

  },
  cardview:{
      justifyContent:'center',
      alignItems:'center',
    //   marginBottom:20
      
  }

 

});



export default Earned;