/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Image,
  SafeAreaView,
} from 'react-native';
import {Header, Card, ListItem, Button, Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

export class SplashScreen extends React.Component {
  render() {
    return (
    <View style={styles.container}>
      <Welcome />
      <Products />
    </View>
  );
}
}

//eventually want to place name of user instead of "Jennie"
function Welcome() {
  return (
  <Text style={styles.welcome}>Welcome back,
    <Text>{" "}</Text>  
    <Text style={{color: '#4D94FF'}}>
      Jennie
    </Text>
    !
  </Text>)
}

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    itemName: 'Iphone 11 Used',
    photoSrc: require('../../assets/images/iphone11.jpg'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: '$200'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    itemName: 'Mens Coat',
    photoSrc: require('../../assets/images/mens_coat.jpeg'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: '$40'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    itemName: 'Minifridge Used',
    photoSrc: require('../../assets/images/minifridge.jpg'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: '$25'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d75',
    itemName: 'Minifridge Used',
    photoSrc: require('../../assets/images/minifridge.jpg'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: '$25'
  },
];


function Item({name, photoSrc, price}) {
  const navigation = useNavigation();
  return (
    <View>
      <Card 
        image={photoSrc}>
        <Text>{name}</Text>
        <Text>{price}</Text>
      </Card>
    </View>
  );
}

// items will be taken from Verto data, this is just placeholder items
// Need to reconsider after knowing how data is organized
// render the list of products
function Products() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <Item
            name={item.itemName}
            photoSrc={item.photoSrc}
            //description={item.description}
            price={item.price}
          />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  welcome: {
    fontSize: 25,
    padding: 20,
    fontWeight: '600',
  },
  item: {
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  itemName: {
    fontSize: 10,
  },
});
