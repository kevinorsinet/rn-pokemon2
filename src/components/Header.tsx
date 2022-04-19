import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function Header () {
    return(
        <View style={styles.header}>
            <Text style={styles.titleHeader}>Pokédex Pokémons</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#00008B',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    titleHeader:{
        color: '#FFFFFF',
        fontSize: 20
    }
})