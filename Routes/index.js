/**ROUTES INDEX */

import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


import { Home } from '../Components/Home/index';
import { Settings } from '../Components/Settings/index';
import { Showcase } from '../Components/Showcase/index';
import { ShowcaseItem } from '../Components/Showcase/ShowcaseItem/index';

const RootStack = createStackNavigator();

export const RootStackScreen = () =>(

  <RootStack.Navigator>
    <RootStack.Screen name="App" component={BottomTabScreen} />
  </RootStack.Navigator>

);

const BottomTab = createBottomTabNavigator();

const BottomTabScreen = () => (

  <BottomTab.Navigator>
    <BottomTab.Screen name="Home" component={Home} />
    <BottomTab.Screen name="Showcase" component={ShowcaseScreen} />
    <BottomTab.Screen name="Settings" component={Settings} />
  </BottomTab.Navigator>

);

const Stack = createStackNavigator();

const ShowcaseScreen = () => (
  <Stack.Navigator>
    <Stack.Screen name="Showcase" component={Showcase} />
    <Stack.Screen name="ShowcaseItem" component={ShowcaseItem} />
  </Stack.Navigator>
);
