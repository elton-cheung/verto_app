import React, {useState} from 'react';
import { View, StyleSheet, FlatList, Text , Image, SafeAreaView} from 'react-native';
import { Header } from 'react-native-elements';
//import { Products } from './components/Products';
// import {Item} from './components/Item';
//add item function

export class SplashScreen extends React.Component {
  render() {
    return (
    <View style={styles.container}>
      <Header
        backgroundColor= '#fff'
        // leftComponent={color: '#000'}}
        //TODO: create VERTO icon to add here
        centerComponent={{text: 'VERTO', style: {color: '#000'} }}
        // rightComponent={{icon: 'favorite', color:'#000'}}
      />
      {/* Products componet contains cards for each item listing */}
      <Welcome />
      <Products />
    </View>
  );
}
}

function Welcome() {
  return <Text style={{fontWeight: 'bold'}}>Welcome back, Jennie!</Text>;
}

//need to move Products page to its own js file





{/* Placeholder items */}

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: "Iphone 11 Used",
    photoUrl: "./assets/images/iphone11.jpg"
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: "Men's Coat",
    photoUrl: "./assets/images/mens_coat.jpeg"
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: "Minifridge Used",
    photoUrl: "./assets/images/iphone11.jpg"
  },
];


const Iphone = {
    name: "Iphone 11 Used",
    photoUrl: "./assets/images/iphone11.jpg"
}
const Coat = {
  name: "Men's Coat",
  photoUrl: "./assets/images/mens_coat.jpeg"
}
const Minifridge = {
  name: "Minifridge Used",
  photoUrl: "./assets/images/iphone11.jpg"
}

function Item({name}) {
  return (
  <View>
    <Image source={require('verto/assets/images/mens_coat.jpeg')}/>
    <Text>{props.name}</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  }
});

function Products() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
         renderItem={({ item }) => <Item title={item.title} />}
         
      />

    </SafeAreaView>
    

    // <View>
    //   <Item 
    //     name = {Iphone.name}
    //     photoUrl = {Iphone.photoUrl}
    //   />
    //   <Item 
    //     name = {Coat.name}
    //     photoUrl = {Coat.photoUrl}
    //   />
    //   <Item 
    //     name = {Minifridge.name}
    //     photoUrl = {Minifridge.photoUrl}
    //   />
    // </View>
    );
}