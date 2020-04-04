import React from 'react';
import {View, Button, TextInput, StyleSheet, Image} from 'react-native';
// import styles from './style/signUpFlowStyle.js';

class SignUp extends React.Component {
  state = {
    firstname: '',
    lastname: '',
    password: '',
    confpassword: '',
  };
  onChangeText = (key, val) => {
    this.setState({[key]: val});
  };
  signUp = async () => {
    const {firstname, lastname, password, confpassword} = this.state;
    try {
      // here place your signup logic
      console.log('Now to verifying email ', success);
    } catch (err) {
      console.log('error signing up: ', err);
    }
  };

  completeSign() {
    // this.signUp();
    this.props.navigation.navigate('EmailVer');
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

        <View style={styles.otherInput}>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            autoCapitalize="none"
            placeholderTextColor="grey"
            onChangeText={val => this.onChangeText('firstname', val)}
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            autoCapitalize="none"
            placeholderTextColor="grey"
            onChangeText={val => this.onChangeText('lastname', val)}
          />
          <TextInput
            style={styles.input}
            placeholder=".edu E-mail"
            // secureTextEntry={true}
            autoCapitalize="none"
            placeholderTextColor="grey"
            onChangeText={val => this.onChangeText('password', val)}
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry={true}
            placeholderTextColor="grey"
            onChangeText={val => this.onChangeText('password', val)}
          />

<TextInput
            style={styles.input}
            placeholder="Confirm Password"
            autoCapitalize="none"
            secureTextEntry={true}
            placeholderTextColor="grey"
            onChangeText={val => this.onChangeText('password', val)}
          />

          <Button
            title="Add E-mail"
            onPress={() => this.props.navigation.navigate('EmailVer')}
          />
        </View>
      </View>
    );
  }
}

/*
  TODO: Implement a function to adjust text size upon typing

*/
const styles =StyleSheet.create({
  buttonLog: {
      alignSelf: 'stretch',
      backgroundColor: "#4d94ff",
      margin: 20,
      padding: 8,
      color: '#F5F5F5',
      borderRadius: 14,
      fontSize: 18,
      fontWeight: '500',
      height: 50,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonSign: {
      alignSelf: 'stretch',
      backgroundColor: '#ffda5c',
      margin: 20,
      padding: 8,
      color: '#ffffff',
      borderRadius: 14,
      fontSize: 18,
      fontWeight: '500',
      height: 50,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
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
      flex: 2,
      alignItems: 'flex-start',
      // justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      aspectRatio: 0.9,
      resizeMode: 'contain',
    },
    logInInput: {
      flex: 1,
      backgroundColor: 'white',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'stretch',
      alignSelf: 'stretch',
    },
    signInInput: {
      flex: 1,
      backgroundColor: 'white',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'stretch',
      alignSelf: 'stretch',
    },
    blank: {
      flex: 2,
    }
});

export default SignUp;
