/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, StyleSheet, ScrollView} from 'react-native';
import {Button} from 'react-native-elements';
import {createStackNavigator} from '@react-navigation/stack';
import t from 'tcomb-form-native';
import ImagePicker from 'react-native-image-picker';
import bootstrap from 'tcomb-form-native/lib/stylesheets/bootstrap.js';

import SettingsScreen from './SettingsScreen';
import ProfileScreen from './ProfileScreen';
import SettingsHeaderButton from '../reusable/SettingsHeaderButton';
import ProfileHeaderButton from '../reusable/ProfileHeaderButton';
import HeaderTitle from '../reusable/HeaderTitle';
import {keys} from '../../config.js';

const Location = t.enums({
  Boston_College: 'Boston College',
  Boston_University: 'Boston University',
  Harvard: 'Harvard',
  MIT: 'MIT',
  Northeastern: 'Northeastern',
});

const Item = t.struct({
  item: t.String,
  username: t.String,
  description: t.String,
  location: t.maybe(Location),
  price: t.Number,
});

const formOptions = {
  stylesheet: bootstrap,
  fields: {
    item: {
      error: 'Item name required.',
    },
    user: {
      error: 'Username required.',
    },
    description: {
      error: 'Description required.',
    },
    price: {
      error: 'Price required.',
    },
  },
};

/* unintuitive to style - i would suggest refactoring and using a different form library or just built-in components */
formOptions.stylesheet.textbox.normal = {
  borderWidth: 0,
  marginBottom: 0,
  fontSize: 18,
  padding: 3,
};
formOptions.stylesheet.textboxView.normal = {
  borderWidth: 1,
  borderRadius: 5,
  marginBottom: 4,
};

const imagePickerOptions = {
  title: 'Select images',
  mediaType: 'photo',
  customButtons: [{name: 'fb', title: 'Choose photo from Facebook'}],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
  quality: 0.1,
};

const Form = t.form.Form;

class AddProductContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      source: '../../assets/images/upload_photo.png',
      type: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = () => {
    const value = this._form.getValue();
    console.log('value', value);
    var dataForm = new FormData();
    dataForm.append('image', {
      uri: this.state.source,
      type: this.state.type,
      name: 'testPhotoName',
    });

    /* POST request to add product to server */
    let headers = new Headers({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + keys.token,
    });
    let formdata = new FormData();
    formdata.append('image', {
      uri: this.state.source,
      type: this.state.type,
      name: 'testPhotoName',
    });
    let requestOptions = {
      method: 'POST',
      headers: headers,
      body: formdata,
    };
    fetch('https://api.vertostore.com/products/image-upload', requestOptions)
      .then(res => res.json())
      .then(json => {
        let newProduct = {
          image_keys: [json.image_key],
          vendor_price: 12345,
          coordinate: {
            lng: 42.36,
            lat: 71.06,
          },
        };
        requestOptions.body = JSON.stringify(newProduct);
        console.log('json', newProduct);
        return fetch('https://api.vertostore.com/products/', requestOptions);
      })
      .then(response => response.text())
      .then(text => console.log('i made it here', text))
      .catch(error => console.log('error', error));
  };

  selectImage = async () => {
    ImagePicker.showImagePicker(imagePickerOptions, async response => {
      if (response.didCancel) {
        console.log('User cancelled image picker.');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        this.setState({
          source: response.uri,
          type: response.type,
        });
      }
    });
  };

  render() {
    let mainImage;
    if (this.state.source === '../../assets/images/upload_photo.png') {
      mainImage = (
        <Image
          source={require('../../assets/images/upload_photo.png')}
          style={styles.mainImage}
        />
      );
    } else {
      mainImage = (
        <Image source={{uri: this.state.source}} style={styles.mainImage} />
      );
    }

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.imageContainer}>{mainImage}</View>
        <View style={styles.form}>
          <Button
            title="Select Image"
            onPress={this.selectImage}
            style={styles.selectImage}
          />
          <Form options={formOptions} type={Item} ref={c => (this._form = c)} />
          <Button
            title="Upload"
            type="solid"
            onPress={this.handleSubmit}
            style={styles.submit}
          />
        </View>
      </ScrollView>
    );
  }
}

const AddProductStack = createStackNavigator();

function AddProductScreen(props) {
  return (
    <AddProductStack.Navigator>
      <AddProductStack.Screen
        name="Sell"
        component={AddProductContainer}
        options={{
          headerLeft: () => (
            <ProfileHeaderButton navigation={props.navigation} />
          ),
          headerTitle: () => <HeaderTitle />,
          headerRight: () => (
            <SettingsHeaderButton navigation={props.navigation} />
          ),
        }}
      />
      <AddProductStack.Screen name="Settings" component={SettingsScreen} />
      <AddProductStack.Screen name="Profile" component={ProfileScreen} />
    </AddProductStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  mainImage: {
    padding: 2,
    alignSelf: 'center',
    height: 200,
    width: 200,
    borderRadius: 20,
    borderWidth: 1,
  },
  imageContainer: {
    marginBottom: 15,
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
    borderWidth: 1.5,
  },
  submit: {
    width: 150,
    alignSelf: 'center',
  },
  selectImage: {
    width: 150,
    alignSelf: 'center',
  },
});

export {AddProductScreen};
