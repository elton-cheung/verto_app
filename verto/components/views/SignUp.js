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
            placeholder="E-mail"
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
    alignItems: 'center',
  },
});

export default SignUp;
