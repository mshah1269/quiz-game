
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './screens/main'
import Join from './screens/join'
import Host from './screens/host'
import Leaderboard from './screens/leaderboard'
import GameId from './screens/gameId'
import History from './screens/History'

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Main" component={Main} options={
          { 
            title: 'Quiz Room', 
            headerTitleStyle: {
              fontWeight: 'bold'
              
            }
            
          }} />
          <Stack.Screen name="Host" component={Host} options={
            { 
              title: 'Host', 
              headerStyle: {
                backgroundColor: '#620bee'
                
              },
              headerTitleStyle: {
                fontWeight: 'bold',
                color:'white'
                
              },
              headerTintColor: 'white'
              
            }} />

            <Stack.Screen name="Join" component={Join} options={
                { 
                  title: 'Join Room', 
                  headerStyle: {
                    backgroundColor: '#620bee'
                    
                  },
                  headerTitleStyle: {
                    fontWeight: 'bold',
                    color:'white'
                    
                  },
                  headerTintColor: 'white'
                
                }} />
          <Stack.Screen name="Leaderboard" component={Leaderboard} options={
            { 
              title: 'Score Board', 
              headerStyle: {
                backgroundColor: '#620bee'
                
              },
              headerTitleStyle: {
                fontWeight: 'bold',
                color:'white' 
              },
              headerTintColor: 'white'
            
            }} />
          <Stack.Screen name="GameId" component={GameId} options={
            { 
              title: 'Quiz Room', 
              headerStyle: {
                backgroundColor: '#620bee'
                
              },
              headerTitleStyle: {
                fontWeight: 'bold',
                color:'white'
                
              },
              headerTintColor: 'white'

              
            }} />
            <Stack.Screen name="History" component={History} options={
            { 
              title: 'Quiz Room', 
              headerStyle: {
                backgroundColor: '#620bee'
                
              },
              headerTitleStyle: {
                fontWeight: 'bold',
                color:'white'
                
              },
              headerTintColor: 'white'
            }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;