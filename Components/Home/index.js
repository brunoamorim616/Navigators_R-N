/**HOME INDEX*/

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Header from '../CustomHeader'

export function Home() {
  return (
    
      <View style={styles.container}>
        <Header/>
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white'
  },

  });