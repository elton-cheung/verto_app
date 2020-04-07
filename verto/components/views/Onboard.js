import React from 'react';
import {View, TextInput, StyleSheet, Image, Button, Icon}  from 'react-native';

import Onboarding from 'react-native-onboarding-swiper'; // 0.4.0

const Simple = (props) => (
  <Onboarding
  onSkip={props.navigation.navigate('SignLog')}
  onDone={props.navigation.navigate('SignLog')}
  flatlistProps={props.navigation}
  titleStyles = {{top: 150}}
  subTitleStyles = {{top: 155}}
  bottomBarHighlight={false}
    pages={[
      {
        backgroundColor: '#fff',
        image: <Image
                    style={styles.tinyLogo}
                    source={require('../../assets/images/verto_icon.png')} />,
        title: 'Hello!',
        subtitle: 'Welcome to Verto!',
      },
      {
        backgroundColor: '#fff',
        image: <Image
                    style={styles.tinyLogo}
                    source={require('../../assets/images/verto_icon.png')} />,
        title: 'What this does',
        subtitle: 'Here, this is how you use the app',
      },
      {
        backgroundColor: '#fff',
        image: <Image
                    style={styles.tinyLogo}
                    source={require('../../assets/images/verto_icon.png')} />,
        title: 'Get Going!',
      },
    ]}
  />
);

const styles = StyleSheet.create({
    tinyLogo: {
        position: 'absolute',
        resizeMode: 'contain',
        width: 40,
        height: 40,
        bottom: 300,
    },
});

export default Simple;
