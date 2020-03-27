import React from 'react';
import {View, Button, TextInput, StyleSheet, Image} from 'react-native';

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
            placeholderTextColor="white"
            onChangeText={val => this.onChangeText('firstname', val)}
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            secureTextEntry={true}
            autoCapitalize="none"
            placeholderTextColor="white"
            onChangeText={val => this.onChangeText('lastname', val)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            autoCapitalize="none"
            placeholderTextColor="white"
            onChangeText={val => this.onChangeText('passwprd', val)}
          />

          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            autoCapitalize="none"
            placeholderTextColor="white"
            onChangeText={val => this.onChangeText('confpassword', val)}
          />
          <Button
            title="Add e-mail"
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

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#42A5F5',
    margin: 20,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    aspectRatio: 0.8,
    resizeMode: 'contain',
  },
  otherInput: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignUp;
