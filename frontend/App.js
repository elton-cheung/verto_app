import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';


// Style part of this apge
const styles = StyleSheet.create({
  container:{
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15
  
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
    fontSize: 50,
  },
  heading: {
    fontSize: 50,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginTop: 12,
    marginBottom: 12
  },
});

export default class Terms extends Component {
  // state to identify whether a user has accepted the terms of service
  state = {
    accepted: false
  }


  onPress = () => {
    this.setState({
      accepted: true
    })
  }

  render() {
    return (
        <ScrollView style={styles.container}>
        <Text style={styles.heading}> Terms of Service!</Text>
        <Text style={styles.container} > Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ac tincidunt vitae semper quis lectus nulla. Eu sem integer vitae justo 
          eget magna fermentum. In egestas erat imperdiet sed euismod nisi porta lorem. 
          Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. 
          Cras adipiscing enim eu turpis egestas. Odio ut sem nulla pharetra. Sit amet 
          facilisis magna etiam tempor orci eu lobortis elementum. Massa vitae tortor 
          condimentum lacinia quis vel eros donec ac. Malesuada nunc vel risus commodo. 
          Tellus cras adipiscing enim eu turpis egestas pretium.
          Eu lobortis elementum nibh tellus molestie nunc. Praesent semper feugiat nibh 
          sed pulvinar proin gravida. Sit amet venenatis urna cursus eget. Aenean et tortor 
          at risus viverra adipiscing at. Turpis egestas pretium aenean pharetra magna ac. 
          Nisl tincidunt eget nullam non. Facilisi morbi tempus iaculis urna id. Tortor 
          itae purus faucibus ornare suspendisse sed. Aliquam faucibus purus in massa tempor.
           Eu mi bibendum neque egestas. Elit duis tristique sollicitudin nibh sit amet commodo
            nulla. Odio eu feugiat pretium nibh ipsum consequat nisl vel pretium.
        </Text>
        <Text style={styles.container} > Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ac tincidunt vitae semper quis lectus nulla. Eu sem integer vitae justo 
          eget magna fermentum. In egestas erat imperdiet sed euismod nisi porta lorem. 
          Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. 
          Cras adipiscing enim eu turpis egestas. Odio ut sem nulla pharetra. Sit amet 
          facilisis magna etiam tempor orci eu lobortis elementum. Massa vitae tortor 
          condimentum lacinia quis vel eros donec ac. Malesuada nunc vel risus commodo. 
          Tellus cras adipiscing enim eu turpis egestas pretium.
          Eu lobortis elementum nibh tellus molestie nunc. Praesent semper feugiat nibh 
          sed pulvinar proin gravida. Sit amet venenatis urna cursus eget. Aenean et tortor 
          at risus viverra adipiscing at. Turpis egestas pretium aenean pharetra magna ac. 
          Nisl tincidunt eget nullam non. Facilisi morbi tempus iaculis urna id. Tortor 
          itae purus faucibus ornare suspendisse sed. Aliquam faucibus purus in massa tempor.
           Eu mi bibendum neque egestas. Elit duis tristique sollicitudin nibh sit amet commodo
            nulla. Odio eu feugiat pretium nibh ipsum consequat nisl vel pretium.
        </Text>
      
        <TouchableOpacity style={styles.button} onPress={ ()=>alert("Terms and conditions accepted") & this.onPress() }><Text>Accept</Text></TouchableOpacity>
      
      
      
      </ScrollView>

    );
  }
}

