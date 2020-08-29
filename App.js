import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { AppLoading } from 'expo';
import { useFonts, Anton_400Regular} from '@expo-google-fonts/anton';

import { AuthContext } from './Routes/context';
import { RootStackScreen } from './Routes/index';

export default function App() {

  let [fontsLoaded] = useFonts({
    Anton_400Regular,
  });


  if(!fontsLoaded){
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <RootStackScreen/>
    </NavigationContainer>
  );
}
