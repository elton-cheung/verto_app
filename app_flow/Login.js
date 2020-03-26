
import React from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Image,
  KeyboardAvoidingView
} from 'react-native'

const userInfo = {username: 'tchoe', password: 'finally'}


class LogIn extends React.Component {
  state = {
    username: '',
      password: '',
      auth_token: ''
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  logIn = async () => {
    const { username, password} = this.state
  }
  goToSignup = () => this.props.navigation.navigate('Signup')

  render() {
    return (
      <KeyboardAvoidingView behavior= "padding" style={styles.container}>
        <View style={styles.header}>
        <Image
        style={styles.image}
        source={require('./verto_logo.png')}
      />
        </View>

      <View style={styles.otherInput}>
      <TextInput
        style={styles.input}
        placeholder='Username'
        autoCapitalize="none"
        placeholderTextColor='white'
        onChangeText={val => this.onChangeText('username', val)}
      />
        <TextInput
          style={styles.input}
          placeholder='Password'
          autoCapitalize="none"
          placeholderTextColor='white'
          secureTextEntry
          onChangeText={val => this.onChangeText('passwprd', val)}
                />

        </View>

      </KeyboardAvoidingView>
    );
  }
  _login = async() => {
    if(userInfo.username == this.state.username && userInfo.password == this.state.password){
        alert('Logged In')
        this.state.auth_token = 'true'
    }
    else{
      alert('wrong information!')
    }
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
  header:{
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    aspectRatio: 0.8,
    resizeMode: 'contain',

  }
  , otherInput : {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default LogIn;
