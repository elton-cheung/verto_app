import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const data = {
  price: 12.6,
  title: 'Ridge Racer 3D',
  user: 'Verto Store',
  photoSrc: require('../../assets/images/ridge_racer_3d.jpeg'),
  description: 'Like new',
};

export default class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>${data.price}</Text>
        <Text>{data.title}</Text>
        <Text>{data.user}</Text>
        <Image source={data.photoSrc} />
        <Text>Description:</Text>
        <Text>{data.description}</Text>
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
});
