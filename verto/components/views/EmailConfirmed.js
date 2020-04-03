/* eslint-disable no-undef */
import React from 'react';
import {View, Button, TextInput, StyleSheet, Image, Text} from 'react-native';
import { Icon } from 'react-native-elements';
// import styles from './style/emailConfirmedStyle.js';

class EmailConfirmed extends React.Component {
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

          <Text style={{textAlign: 'center', fontSize: 15}}>Email verification failed, please click the button to re-send verification E-mail</Text>
        </View>

        <View style={styles.otherInput}>
          <Button
            title="Re-send Email"
            onPress={() => this.props.navigation.navigate('PhoneVer')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    body: {
      flex: 4,
      justifyContent: 'center'
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'
    },
    otherInput: {
      flex: 1,
      alignItems: 'flex-start',
      // justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      aspectRatio: 0.9,
      resizeMode: 'contain',
    },
});

export default EmailConfirmed;