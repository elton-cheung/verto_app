import React from 'react';
import {View, Button, TextInput, StyleSheet, Image} from 'react-native';
// import styles from './style/logInStyle.js';

class PhoneVer extends React.Component {
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

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.image}
            source={require('../../assets/images/verto_logo.png')}
          />
        </View>

        <View style={styles.otherInput}>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            autoCapitalize="none"
            placeholderTextColor="grey"
            onChangeText={val => this.onChangeText('phone', val)}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Phone Number"
            secureTextEntry={true}
            autoCapitalize="none"
            placeholderTextColor="grey"
            onChangeText={val => this.onChangeText('confphone', val)}
          />
          <Button
            title="Finish Sign-Up"
            // For now I'm gonna let it navigate to Splash Screen -Jennie
            onPress={() => this.props.navigation.navigate('Redirect')}
          />
        </View>
      </View>
    );
  }
}

/*
  TODO: Implement a function to adjust text size upon typing

*/
const styles = StyleSheet.create({
  input: {
      width: 290,
      height: 45,
      backgroundColor: '#fff',
      margin: 15,
      padding: 12,
      color: 'black',
      borderRadius: 30,
      fontSize: 14,
      fontWeight: '400',
      borderColor: 'grey',
      borderWidth: 1.5
    },
    header: {
      flex: 3,
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'
    },
    image: {
      aspectRatio: 0.9,
      resizeMode: 'contain',
    },
    otherInput: {
      flex: 4,
      alignItems: 'flex-start',
      // justifyContent: 'center',
      alignItems: 'center',
    },
});
export default PhoneVer;
