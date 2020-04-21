/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  SafeAreaView,
  Image,
} from 'react-native';
import {Header, Card, ListItem, Button, Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export class SplashScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Welcome />
        <Products navigation={this.props.navigation} />
      </View>
    );
  }
}

//eventually want to place name of user instead of "Jennie"
function Welcome() {
  return (
    <Text style={styles.welcome}>
      Welcome back,
      <Text> </Text>
      <Text style={{color: '#4D94FF'}}>Jennie</Text>!
    </Text>
  );
}

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    itemName: 'Iphone 11 Used',
    photoSrc: require('../../assets/images/iphone11.jpg'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: '$200',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    itemName: 'Mens Coat',
    photoSrc: require('../../assets/images/mens_coat.jpeg'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: '$40',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    itemName: 'Minifridge Used',
    photoSrc: require('../../assets/images/minifridge.jpg'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: '$25',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    itemName: 'Iphone 11 Used',
    photoSrc: require('../../assets/images/iphone11.jpg'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: '$200',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    itemName: 'Mens Coat',
    photoSrc: require('../../assets/images/mens_coat.jpeg'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: '$40',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    itemName: 'Minifridge Used',
    photoSrc: require('../../assets/images/minifridge.jpg'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: '$25',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    itemName: 'Iphone 11 Used',
    photoSrc: require('../../assets/images/iphone11.jpg'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: '$200',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    itemName: 'Mens Coat',
    photoSrc: require('../../assets/images/mens_coat.jpeg'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: '$40',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    itemName: 'Minifridge Used',
    photoSrc: require('../../assets/images/minifridge.jpg'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: '$25',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    itemName: 'Iphone 11 Used',
    photoSrc: require('../../assets/images/iphone11.jpg'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: '$200',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    itemName: 'Mens Coat',
    photoSrc: require('../../assets/images/mens_coat.jpeg'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: '$40',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    itemName: 'Minifridge Used',
    photoSrc: require('../../assets/images/minifridge.jpg'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: '$25',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    itemName: 'Iphone 11 Used',
    photoSrc: require('../../assets/images/iphone11.jpg'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: '$200',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    itemName: 'Mens Coat',
    photoSrc: require('../../assets/images/mens_coat.jpeg'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: '$40',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    itemName: 'Minifridge Used',
    photoSrc: require('../../assets/images/minifridge.jpg'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: '$25',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    itemName: 'Iphone 11 Used',
    photoSrc: require('../../assets/images/iphone11.jpg'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: '$200',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    itemName: 'Mens Coat',
    photoSrc: require('../../assets/images/mens_coat.jpeg'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: '$40',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    itemName: 'Minifridge Used',
    photoSrc: require('../../assets/images/minifridge.jpg'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: '$25',
  },
];

function Item({name, photoSrc, price, navigation}) {
  //const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('Details')}>
      <Card image={photoSrc}>
        <Text>{name}</Text>
        <Text>{price}</Text>
      </Card>
    </TouchableOpacity>
  );
}

// items will be taken from Verto data, this is just placeholder items
// Need to reconsider after knowing how data is organized
// render the list of products
function Products(props) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        numColumns={2}
        horizontal={false}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Item
            name={item.itemName}
            photoSrc={item.photoSrc}
            price={item.price}
            navigation={props.navigation}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 25,
    padding: 20,
    fontWeight: '600',
  },
  item: {
    //need to fix this!
    width: 205,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },
  itemName: {
    fontSize: 10,
  },
});
