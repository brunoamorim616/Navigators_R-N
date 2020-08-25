/**ROUTES INDEX */

import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Entypo } from '@expo/vector-icons';


import { Home } from '../Components/Home/index';
import { Settings } from '../Components/Settings/index';
import { Showcase } from '../Components/Showcase/index';
import { ShowcaseItem } from '../Components/Showcase/ShowcaseItem/index';

const RootStack = createStackNavigator();

export const RootStackScreen = () =>(

  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="App" component={BottomTabStack} />
  </RootStack.Navigator>

);

const BottomTab = createBottomTabNavigator();

const BottomTabStack = () => (
  
  <BottomTab.Navigator tabBarOptions={{
    inactiveBackgroundColor: 'black',
    inactiveTintColor: 'white',
    activeBackgroundColor: 'white',
    activeTintColor:'black',    
}}>
    <BottomTab.Screen name="Home" component={HomeStack} options={{
      tabBarLabel: 'Princial',
      tabBarIcon: ({color}) => (
        <Ionicons name="md-home" color={color} size={30} />
      ),
      }}/>
    <BottomTab.Screen name="Showcase" component={ShowcaseStack} options={{
      tabBarLabel: 'Vitrine',
      tabBarIcon: ({color}) => (
        <Entypo name="shop" color={color} size={30} />
      ),
      }}/>
    <BottomTab.Screen name="Settings" component={SettingsStack} options={{
      tabBarLabel: 'Configurações',
      tabBarIcon: ({color}) => (
        <Ionicons name="md-settings" color={color} size={30} />
      ),
      }}/>
  </BottomTab.Navigator>

);

const Stack = createStackNavigator();

const ShowcaseStack = () => (
  <Stack.Navigator headerMode="screen">
    <Stack.Screen name="Showcase" component={Showcase} />
    <Stack.Screen name="ShowcaseItem" component={ShowcaseItem} />
  </Stack.Navigator>
);

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home}/>
  </Stack.Navigator>
);

const SettingsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Settings" component={Settings}/>
  </Stack.Navigator>
)
