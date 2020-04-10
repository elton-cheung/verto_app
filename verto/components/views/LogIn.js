import React from 'react';
import {View, TextInput, StyleSheet, Image, Button, KeyboardAvoidingView } from 'react-native';

class LogIn extends React.Component {
  state = {
    email: '',
    password: '',
  };
  
  onChangeText = (key, val) => {
    this.setState({[key]: val});
  };
  logIn = async () => {
    const {email, password} = this.state;
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
      <View style={styles.header}>
          <Image
            style={styles.image}
            source={require('../../assets/images/verto_logo.png')}
          />
        </View>

        <View style={styles.otherInput}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            autoCapitalize="none"
            placeholderTextColor="grey"
            onChangeText={val => this.onChangeText('email', val)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            autoCapitalize="none"
            placeholderTextColor="grey"
            onChangeText={val => this.onChangeText('passwprd', val)}
          />
          <Button
            title='Forgot Password?'
            onPress={() => this.props.navigation.navigate('Forgot')}
          />
          <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Verto')}
          />
          <Button
          title="Sign Up"
          onPress={() => this.props.navigation.navigate('SignUp')}
          />
        </View>
      </KeyboardAvoidingView >
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

export default LogIn;
