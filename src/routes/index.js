/**ROUTES INDEX */

import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Entypo } from '@expo/vector-icons';

import { Home } from '../screens/Home/index';
import { Settings } from '../screens/Options/index';
import { Showcase } from '../screens/Showcase/index';

/** WEB STACK */
const Web = createStackNavigator();

export const WebStack = () => (
  <Web.Navigator headerMode="nones">
    <Web.Screen name="Home" component={HomeStack} />
    <Web.Screen name="Showcase" component={ShowcaseStack} />
    <Web.Screen name="Settings" component={SettingsStack} />
  </Web.Navigator>
);

/** MOBILE STACK */
const Mobile = createBottomTabNavigator();

export const MobileStack = () => (

  <Mobile.Navigator tabBarOptions={{
    inactiveBackgroundColor: 'black',
    inactiveTintColor: 'white',
    activeBackgroundColor: 'white',
    activeTintColor: 'black',
    style: {
      width: '100%',
      backgroundColor: 'black',
      borderBottomWidth: 0,
      borderTopWidth: 0,
    }
  }}>
    <Mobile.Screen name="Home" component={HomeStack} options={{
      tabBarLabel: 'Princial',
      tabBarIcon: ({ color }) => (
        <Ionicons name="md-home" color={color} size={30} />
      ),
    }} />
    <Mobile.Screen name="Showcase" component={ShowcaseStack} options={{
      tabBarLabel: 'Vitrine',
      tabBarIcon: ({ color }) => (
        <Entypo name="shop" color={color} size={30} />
      ),
    }} />
    <Mobile.Screen name="Settings" component={SettingsStack} options={{
      tabBarLabel: 'Configurações',
      tabBarIcon: ({ color }) => (
        <Ionicons name="md-settings" color={color} size={30} />
      ),
    }} />
  </Mobile.Navigator>

);

/** VITRINE */
const Stack = createStackNavigator();

const ShowcaseStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Showcase" component={Showcase} options={{
      headerShown: false
    }} />

  </Stack.Navigator>
);

/** PÉGINA PRINCIPAL */
const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} options={{
      headerShown: false,
    }} />
  </Stack.Navigator>
);

/** CONFIGURÇÕES */
const SettingsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Settings" component={Settings} options={{
      headerShown: false,
    }} />
  </Stack.Navigator>
)
