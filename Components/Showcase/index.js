/**SHOWCASE INDEX */

import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Item from './Item';
import Header from '../CustomHeader'

export function Showcase() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <Header/>

      <ScrollView>
        <View style={styles.itemsGrid}>

          <Item img={require('../../showcaseAssets/1.png')}
            cost="R$40,90"
            onClick={() => alert('clicou')}>
            <Text>
              Camiseta
            </Text>
          </Item>

          <Item img={require('../../showcaseAssets/2.png')}
            cost="R$40,90"
            onClick={() => alert('clicou')}>
            <Text>
              Camiseta 2
            </Text>
          </Item>

        </View>

        <View style={styles.itemsGrid}>

          <Item img={require('../../showcaseAssets/3.png')}
            cost="R$46,90"
            onClick={() => alert('clicou')}>
            <Text>
              Camiseta 3
            </Text>
          </Item>

          <Item img={require('../../showcaseAssets/4.png')}
            cost="R$120,90"
            onClick={() => alert('clicou')}>
            <Text>
              Camiseta 4
            </Text>
          </Item>

        </View>

        <View style={styles.itemsGrid}>

          <Item img={require('../../showcaseAssets/1.png')}
            cost="R$30,90"
            onClick={() => alert('clicou')}>
            <Text>
              Camiseta 5
            </Text>
          </Item>

          <Item img={require('../../showcaseAssets/2.png')}
            cost="R$90,90"
            onClick={() => alert('clicou')}>
            <Text>
              Camiseta 6
            </Text>
          </Item>

        </View>

        <View style={styles.itemsGrid}>

          <Item img={require('../../showcaseAssets/3.png')}
            cost="R$80,90"
            onClick={() => alert('clicou')}>
            <Text>
              Camiseta 7
            </Text>
          </Item>

          <Item img={require('../../showcaseAssets/4.png')}
            cost="R$20,90"
            onClick={() => alert('clicou')}>
            <Text>
              Camiseta 8
            </Text>
          </Item>

        </View>


      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white'
  },
  itemsGrid: { 
    flexDirection: 'row',
   justifyContent: 'space-around'
  }
  });