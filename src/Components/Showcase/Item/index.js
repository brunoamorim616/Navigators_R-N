/** PRODUTO/ITEM */

import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function Item (props)  {

  return (
    
    <TouchableOpacity style={styles.container} onPress={props.oncLick} >
      <Image source={props.img} style={styles.itemImg}/>
      <Text style={styles.descText}>
        {props.children}
      </Text>
      <View>
        <Text style={styles.priceText}>
          {props.cost}
        </Text>
      </View>
    </TouchableOpacity>

  );
}

const styles = StyleSheet.create({
  itemImg: {
    width: 160,
    height: 160
  },
  container: {
    paddingVertical: '2%',
        alignItems: 'center',
        justifyContent: 'center'
  },
  descText: {
    fontSize: 16
  },
  priceText: {
    fontSize: 14,
    color: 'green'
  },
})