import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import { AuthContext } from './Routes/context';
import { RootStackScreen } from './Routes/index';

export default function App() {
  return (
    <NavigationContainer>
      <RootStackScreen/>
    </NavigationContainer>
  );
}
