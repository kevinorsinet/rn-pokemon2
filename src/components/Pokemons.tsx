import React, { useEffect, useState } from 'react'
import { Modal, View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function Pokemons(props) {
	const {name, url} = props.data.item;
	return (
		<View style={styles.mainContainer}>
		  {/* <Image style={styles.mainImage} */}
		  {/* // source={{ uri: ??? }} /> */}
			<Text style={styles.mainText}> {name} </Text>
		</View>
	)
}

const styles = StyleSheet.create({
  outDetails: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  },
  containerDetailsModal: {
    flex: 3,
    backgroundColor: '#FFFACD',
    alignItems: 'center',
    justifyContent: 'center'

  },
  imageModal: {
    width: 150,
    height: 150
  },
  textNameModal: {
    marginTop: 40,
    fontWeight: 'bold',
    fontSize: 30
  },
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    marginHorizontal: 20,
    backgroundColor: '#00BFFF'
  },
  mainImage: {
    width: 75,
    height: 75
  },
  mainText: {
    marginTop: 15
  },
  modalAbilities: {
    color: '#191970',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 20
  }
})