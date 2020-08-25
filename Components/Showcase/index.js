/**SHOWCASE INDEX */

import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function Showcase({navigation}) {
  return (
    <View>
      <Text> SHOWCASE </Text>
      <TouchableOpacity onPress={() => navigation.navigate("ShowcaseItem")}>
        <Text>ITEM</Text>
      </TouchableOpacity>
    </View>
  );
}