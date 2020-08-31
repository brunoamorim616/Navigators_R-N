/**HEADER COSTOMIZADO */

import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

export default function ShowcaseHeader() {

    return (
        <View style={styles.header}>
            <View styles={styles.textContainer}>

                <Text style={styles.textHeader}>
                    <Image source={require('../../../assets/SouthWhite.png')} style={styles.LogoImg} />
                     Camisetas
                </Text>
                <TouchableOpacity style={{ position: 'absolute', right: 0, alignSelf: 'center', paddingTop: 6 }}>
                    <MaterialIcons
                        name="filter-list"
                        size={24}
                        color="#000"
                    />
                </TouchableOpacity>
            </View>
            <View style={{ borderBottomColor: 'black', borderBottomWidth: 2, width: '100%' }} />
        </View>
                
    );
}

const styles = StyleSheet.create({
    LogoImg: {
        width: 30,
        height: 30,
        marginVertical: -4,
        marginHorizontal: 4
    },
    header: {
        marginTop: 6,
        marginBottom: 2,
        marginHorizontal: 30,
        padding: 8
    },
    textContainer: {
        flexDirection: 'row',
        marginVertical: '5%',
        marginHorizontal: '5%'
    },
    textHeader: {
        fontFamily: 'Anton_400Regular',
        fontSize: 26,
        marginHorizontal: '1%',
    },
})