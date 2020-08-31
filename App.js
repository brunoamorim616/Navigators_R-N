import 'react-native-gesture-handler';
import '@expo/match-media';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { AppLoading } from 'expo';
import { useFonts, Anton_400Regular} from '@expo-google-fonts/anton';
import { useMediaQuery } from 'react-responsive';

import { AuthContext } from './src/routes/context';
import { WebStack, MobileStack } from './src/routes/index';

export default function App() {

  const isTabletOrMobileDevice = useMediaQuery({
    maxDeviceWidth: 1224,
    // alternatively...
    query: "(max-device-width: 1224px)"
  });

  let [fontsLoaded] = useFonts({
    Anton_400Regular,
  });


  if(!fontsLoaded){
    return <AppLoading />;
  } 

  if (isTabletOrMobileDevice) {
    return (
      <NavigationContainer>
        <MobileStack />
      </NavigationContainer>
    )
  }
  return (
    <NavigationContainer>
      <WebStack />
    </NavigationContainer>
  )
}
