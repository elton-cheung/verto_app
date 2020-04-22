import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Button} from 'react-native-elements';

const data = {
  price: 12.6,
  title: 'Ridge Racer 3D',
  user: 'Johnny F.',
  photoSrc: require('../../assets/images/ridge_racer_3d.jpeg'),
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
};

export default class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{data.title}</Text>
        <Image source={data.photoSrc} style={styles.image} />
        <Text style={styles.price}>${data.price.toFixed(2)}</Text>
        <View style={styles.userContainer}>
          <Image
            source={require('../../assets/logos/account.png')}
            style={styles.avatar}
          />
          <Text style={styles.user}>{data.user}</Text>
        </View>
        <Text style={styles.description}>Description: {data.description}</Text>
        <View style={styles.buttonContainer}>
          <Button title="Buy" type="solid" buttonStyle={styles.button} />
          <Button title="Message" type="solid" buttonStyle={styles.button} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    margin: 10,
  },
  image: {
    alignSelf: 'center',
    height: 350,
    width: 350,
    padding: 2,
    borderRadius: 20,
    marginBottom: 15,
  },
  title: {
    alignSelf: 'center',
    fontSize: 30,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  userContainer: {
    flexDirection: 'row',
  },
  avatar: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  user: {
    fontSize: 25,
    marginBottom: 15,
  },
  price: {
    fontSize: 25,
    color: '#007AFF',
    marginBottom: 5,
  },
  description: {
    fontSize: 20,
    color: 'gray',
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    width: 150,
  },
});
