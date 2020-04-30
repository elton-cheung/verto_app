import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  ActivityIndicator,
} from 'react-native';
import {Card} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';

export class SplashScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch('https://api.vertostore.com/products/search', {
      method: 'POST',
      headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
      body: JSON.stringify({
        "text": "",
        "categories": ["Electronics", "Home", "Clothing", "Accessories", "Entertainment", "Books", "Electronics", "Sports", "Experiences"],
        "price": {
          "minPrice": 2000,
          "maxPrice": 300000 
        }, 
        "geospatial": {
            "maxDistance": 30,
            "minDistance": 0,
            "long": 89.23232,
            "lat": -72.32232
        }, 
        "skip": 0
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        // return json.products;
        // console.log(json.products)
        this.setState({ data: json.products });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  Welcome() {
    return (
      <Text style={styles.welcome}>
        Welcome back,
        <Text> </Text>
        <Text style={{color: '#4D94FF'}}>Jennie</Text>!
      </Text>
    );
  }

  SearchCarousel() {
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

  Item({name,photoSrc,price,navigation}) {
    // const navigation = useNavigation();

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
          <Text>${price}</Text>
        </Card>
      </TouchableOpacity>
    );
  }

  render() {
    const { data, isLoading } = this.state;

    return (
      <React.Fragment>
        <ScrollView style={styles.container}>
          <this.Welcome></this.Welcome>
          <this.SearchCarousel></this.SearchCarousel>
          <SafeAreaView style={styles.container}>
            <FlatList
              data={data}
              numColumns={2}
              horizontal={false}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                <this.Item
                  name = {item.title}
                  price = {item.price.listing_price}
                  photoSrc = {item.images[0]}
                  navigation ={this.props.navigation}
                />
              )}
            /> 
          </SafeAreaView>
        </ScrollView>
      </React.Fragment>
    );
  }
};
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
