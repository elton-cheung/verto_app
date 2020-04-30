/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import {Card} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';

export class SplashScreen extends React.Component {
  render() {
    return (
      <React.Fragment>
        <View style={styles.container}>
          <Welcome />
          <Carousel />
          <Products navigation={this.props.navigation} />
        </View>
      </React.Fragment>
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

//carousel element with search icons
function Carousel() {
  return (
    <SafeAreaView style={styles.carousel}>
      <ScrollView
        style={styles.scrollView}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={styles.searchIcon}>
          <Image
            source={require('verto/assets/search_icons/search_home.png')}
          />
          <Text style={styles.searchName}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.searchIcon}>
          <Image
            source={require('verto/assets/search_icons/search_clothing.png')}
          />
          <Text style={styles.searchName}>Clothing</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.searchIcon}>
          <Image
            source={require('verto/assets/search_icons/search_accessories.png')}
          />
          <Text style={styles.searchName}>Accessories</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.searchIcon}>
          <Image
            source={require('verto/assets/search_icons/search_entertainment.png')}
          />
          <Text style={styles.searchName}>Entertainment</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.searchIcon}>
          <Image
            source={require('verto/assets/search_icons/search_books.png')}
          />
          <Text style={styles.searchName}>Books</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.searchIcon}>
          <Image
            source={require('verto/assets/search_icons/search_electronics.png')}
          />
          <Text style={styles.searchName}>Electronics</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.searchIcon}>
          <Image
            source={require('verto/assets/search_icons/search_experiences.png')}
          />
          <Text style={styles.searchName}>Experiences</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.searchIcon}>
          <Image
            source={require('verto/assets/search_icons/search_sports.png')}
          />
          <Text style={styles.searchName}>Sports</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
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
      onPress={() => {
        navigation.navigate('Details', {
          screenProps: {
            name,
            photoSrc,
            price,
          },
        });
      }}>
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
    paddingTop: 20,
    paddingLeft: 20,
    paddingBottom: 5,
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
  searchName: {
    textAlign: 'center',
    fontSize: 10,
  },
  scrollView: {
    // marginHorizontal:,
    paddingBottom: 5,
  },
  searchIcon: {
    paddingLeft: 15,
    paddingRight: 15,
  },
});
