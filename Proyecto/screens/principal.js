import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const Principal = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image
          style={styles.logo}
          source={require('../assets/logotipo.png')}
        />

        <Text style={styles.title}>Bienvenido!!</Text>

        <Image 
        style={styles.producto_img}
        source={{uri: "https://www.lego.com/cdn/cs/set/assets/bltf3373cedc39c4e7b/42161_alt1.png"}}
        />

        
        <Text style={styles.paragraph}>
        Sumérgete en la emoción de las carreras con el increíble set LEGO Speed Champions. Este set presenta un coche de carreras excepcionalmente detallado, diseñado para brindar una experiencia de construcción y juego emocionante.
        </Text>

        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  
  scrollContent: {
    alignItems: 'center',
  },

  logo: {
    resizeMode: 'contain',
    width: 400,
    height: 100,
    marginBottom: 20,
  },

  title: {
    fontSize: 24,
    marginBottom: 15,
    fontFamily: 'Roboto',
  },

  paragraph: {
    fontSize: 18,
    marginBottom: 20,
    fontFamily: 'Roboto',
  },

  producto_img: {
    resizeMode: 'contain',
    width: 400,
    height: 300,
    marginBottom: 20,
  },
});

export default Principal;
