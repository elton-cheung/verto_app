import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

export default function HeaderTitle() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logos/verto_logo.png')}
        style={styles.image}
      />
      <Text style={styles.text}> VERTO </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    width: 48,
    height: 48,
  },
  text: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
