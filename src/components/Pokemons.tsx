import React, { useEffect, useState } from 'react'
import { Modal, View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function Pokemons(props) {
	const {name, url} = props.data.item;
	const [modalVisible, setModalVisible] = useState(false);
	const pokemonNumber = url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '');
	const [allSpecs, setAllSpecs] = useState();
	const [pokemonStats, setPokemonStats] = useState([]);

	// Mets à jour le statut du modal
	const afficherDetail = () => {
		setModalVisible(!modalVisible); 
	}

	// Fetch de l'expérience
	useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`,{
      method: 'GET',
      headers :{
        'Accept': 'application/json'
      }
    })
    .then(response =>response.json()) // Parse le JSON
    .then(data => {
			setAllSpecs(data.base_experience) 
			setPokemonStats(data.stats)
    })
  }, [])
	console.log("pokemonStats", pokemonStats);

	return (
		<View>
			<TouchableOpacity onPress={afficherDetail}>
				<View style={styles.mainContainer}>
					<Image style={styles.mainImage} source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNumber}.png` }} /> 
					<Text style={styles.mainText}> {pokemonNumber} {name} </Text>
				</View>
			</TouchableOpacity>

			<Modal
			animationType="slide"
			transparent={true}
			visible={modalVisible}
			>
				<TouchableOpacity style={styles.outDetails}
          onPress={afficherDetail}>
          <View>
          </View>
        </TouchableOpacity>
 				<View style={styles.containerDetailsModal}>
          <Image style={styles.imageModal}
            source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNumber}.png` }} />
          <Text style={styles.textNameModal}>{name}</Text>
					<Text style={styles.textNameModal}>Expérience: {allSpecs}</Text>
					{/* <Text style={styles.textNameModal}>Stats: {pokemonStats[0].base_stat}</Text> */}

        </View>
				<TouchableOpacity style={styles.outDetails}
          onPress={afficherDetail}>
          <View>
          </View>
        </TouchableOpacity>
			</Modal>

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