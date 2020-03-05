
import React from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Image
} from 'react-native'

class PhoneVer extends React.Component {
  state = {
    email: '', confemail: ''
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }

  // After e-mail verification, we need to set up phone verification
  signUp = async () => {
    const { email, confemail } = this.state
    try {
      // here place your signup logic
      console.log('Next adding phone number!: ', success)
    } catch (err) {
      console.log('error signing up: ', err)
    }
  }
 
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        <Image
        style={styles.image}
        source={require('./verto_logo.png')}
      />
        </View>

      <View style={styles.otherInput}>
        <TextInput
          style={styles.input}
          placeholder='Phone Numbers'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('phone', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Confirm Phone Number'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('confphone', val)}
        />
        <Button
          title='Finish Sign - Up'
          onPress={this.signUp}
        />
        </View>
        
      </View>
    )
  }
}

/*
  TODO: Implement a function to adjust text size upon typing

*/

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 50,
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

export default PhoneVer;