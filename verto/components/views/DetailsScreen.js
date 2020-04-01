import React from 'react';
import {Button, View, Text, StyleSheet, Image} from 'react-native';

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
    marginBottom: 10,
    borderStyle: 'dotted',
    borderWidth: 1,
  },
  title: {
    alignSelf: 'center',
    fontSize: 30,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  user: {
    alignSelf: 'flex-start',
    textAlign: 'left',
    fontSize: 25,
  },
  price: {
    alignSelf: 'baseline',
    textAlign: 'right',
    fontSize: 25,
  },
  description: {
    fontSize: 16,
  },
  buttonLayout: {
    alignSelf: 'center',
    padding: 3,
    marginBottom: 10,
  },
  userAndPrice: {
    marginBottom: 15,
  },
});

const data = {
  price: 12.6,
  title: 'Ridge Racer 3D',
  user: 'johnny168',
  photoSrc: require('../../assets/images/ridge_racer_3d.jpeg'),
  description: 'Like new',
};

export default class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{data.title}</Text>
        <Image source={data.photoSrc} style={styles.image} />
        <View style={styles.userAndPrice}>
          <Text style={styles.user}>{data.user}</Text>
          <Text style={styles.price}>${data.price.toFixed(2)}</Text>
        </View>
        <Text style={{fontSize: 14}}>Description:</Text>
        <Text style={styles.description}>{data.description}</Text>
        <Button title="Buy Now" />
        <Button title="Counter Offer" />
      </View>
    );
  }
}
