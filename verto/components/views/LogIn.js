import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  Button,
  KeyboardAvoidingView,
  Alert,
  AsyncStorage,
} from 'react-native';
import SecureStorage, {
  ACCESS_CONTROL,
  ACCESSIBLE,
  AUTHENTICATION_TYPE,
} from 'react-native-secure-storage';

class LogIn extends React.Component {
  state = {
    email: '',
    password: '',
    isLoggedIn: false,
  };

  _userLogin = async () => {
    this.setState({isLoggingIn: true, message: 'Logged in!'});
    var params = {
      email: this.state.email,
      password: this.state.password,
    };
    fetch('https://api.vertostore.com/account/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then(response => response.json())
      .then(json => {
        /*Created to test sending token keys
        const token = json.token;
        const userId = json.user.user_id;
        const secure = SecureStorage.setItem(userId, token, {
          accessible: ACCESSIBLE.WHEN_UNLOCKED,
        });*/
        if (json.code == 'authorized') {
          this.props.navigation.navigate('Verto');
        } else {
          Alert.alert('Wrong Credentials', 'Please Try Again');
        }
      });
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
            onChangeText={email => this.setState({email})}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            autoCapitalize="none"
            placeholderTextColor="grey"
            onChangeText={password => this.setState({password})}
          />
          <Button
            title="Forgot Password?"
            onPress={() => this.props.navigation.navigate('Forgot')}
          />
          <Button title="Login" onPress={() => this._userLogin()} />
          <Button
            title="Sign Up"
            onPress={() => this.props.navigation.navigate('SignUp')}
          />
        </View>
      </KeyboardAvoidingView>
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
    borderWidth: 1.5,
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
    backgroundColor: 'white',
  },
  image: {
    aspectRatio: 0.9,
    resizeMode: 'contain',
  },
  otherInput: {
    flex: 4,
    alignItems: 'flex-start',
  },
});

export default LogIn;
