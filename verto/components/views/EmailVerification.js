/* eslint-disable no-undef */
import React from 'react';
import {View, Button, TextInput, StyleSheet, Image, Text} from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './style/style.js';

class EmailVer extends React.Component {
  state = {
    email: '',
    confemail: '',
  };
  
  onChangeText = (key, val) => {
    this.setState({[key]: val});
  };

  // After e-mail verification, we need to set up phone verification
  signUp = async () => {
    const {email, confemail} = this.state;
    try {
      // here place your signup logic
      console.log('Next adding phone number!: ', success);
    } catch (err) {
      console.log('error signing up: ', err);
    }
  };

  completeEmail() {
    // this.signUp;
    this.props.navigation.navigate('PhoneVer');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.image}
            source={require('../../assets/images/verto_logo.png')}
          />
        </View>


        <View style={styles.body}>

          <Text style={{textAlign: 'center', fontSize: 15}}>An E-mail has been sent to your .edu email</Text>
          <Text style={{textAlign: 'center', fontSize: 15}}>Please click on the link provided to verify your e-mail</Text>
          <Text style={{textAlign: 'center', fontSize: 15}}>Once you click the link,</Text>
          <Text style={{textAlign: 'center', fontSize: 15}}>Press the verify e-mail button below</Text>
        </View>

        <View style={styles.otherInput}>
          <Button
            title="Verify Email"
            onPress={() => this.props.navigation.navigate('PhoneVer')}
          />
        </View>
      </View>
    );
  }
}

/*
  TODO: Implement a function to adjust text size upon typing

*/


export default EmailVer;
