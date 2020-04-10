import React from 'react';
import {View, TextInput, StyleSheet, Image, Button, Icon}  from 'react-native';

import Onboarding from 'react-native-onboarding-swiper'; // 0.4.0

const Simple = (props) => (
  <Onboarding
  onSkip={props.navigation.navigate('SignLog')}
  onDone={props.navigation.navigate('SignLog')}
  flatlistProps={props.navigation}
  titleStyles = {{bottom: 50}}
  subTitleStyles = {{bottom: 50}}
  bottomBarHighlight={false}
    pages={[
      {
        backgroundColor: '#fff',
        image: <><Image
                    style={styles.tinyLogo}
                    source={require('../../assets/images/verto_icon.png')}/>
               <Image
                    style={styles.onboardingPic}
                    source={require('../../assets/images/onboard1.jpg')}/>
               </>,
        title: 'Hello!',
        subtitle: 'Welcome to Verto!',
      },
      {
        backgroundColor: '#fff',
        image: <><Image
                    style={styles.tinyLogo}
                    source={require('../../assets/images/verto_icon.png')} />
               <Image
                    style={styles.onboardingPic}
                    source={require('../../assets/images/onboard2.jpg')}/>
               </>,
        title: 'What this App does',
        subtitle: 'Here, this is how you use the app',
      },
      {
        backgroundColor: '#fff',
        image: <><Image
                    style={styles.tinyLogo}
                    source={require('../../assets/images/verto_icon.png')} />
               <Image
                    style={styles.onboardingPic}
                    source={require('../../assets/images/onboard3.png')}/>
               </>,
        title: 'Get Going!',
      },
    ]}
  />
);

const styles = StyleSheet.create({
    onboardingPic: {
        //justifyContent: 'center',
        alignItems: 'center',
    },

    tinyLogo: {
        position: 'absolute',
        resizeMode: 'contain',
        width: 50,
        height: 50,
        bottom: 450,
    },
});

export default Simple;
