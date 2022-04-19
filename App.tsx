import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList,  Text, View, SafeAreaView } from 'react-native';
import Header from './src/components/Header';

export default function App() {

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=10',{
      method: 'GET',
      headers :{
        'Accept': 'application/json'
      }
    })
    .then(response =>response.json()) // Parse le JSON
    .then(data => {
        setPokemons(data.results) 
    })
  }, [])
  // console.log("pokemons", pokemons);

  return (
    <SafeAreaView style={{marginTop: 30}}>
      <Header />
      <View>      
        <FlatList 
          data={pokemons}
          keyExtractor={(pokemon) => pokemon.name}
          renderItem={({item}) => <Text> {item.name}</Text>}
          style={{ backgroundColor: 'aliceblue'}}
        />
      </View>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
