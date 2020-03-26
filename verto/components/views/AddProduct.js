/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import t from 'tcomb-form-native';
import ImagePicker from 'react-native-image-picker';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  image: {
    alignSelf: 'center',
    height: 200,
    width: 200,
    padding: 2,
    borderRadius: 20,
    marginBottom: 20,
    borderStyle: 'dotted',
    borderWidth: 1,
  },
});

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

const imagePickerOptions = {
  title: 'Select images',
  mediaType: 'photo',
  customButtons: [{name: 'fb', title: 'Choose photo from Facebook'}],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const Form = t.form.Form;

class AddProductContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {source: '../../assets/images/upload_photo.png'};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = () => {
    const value = this._form.getValue();
  };

  selectImage = async () => {
    ImagePicker.showImagePicker(imagePickerOptions, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker.');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        this.setState({
          source: response.uri,
        });
      }
    });
  };

  render() {
    const userInputImage =
      this.state.source === '../../assets/images/upload_photo.png';
    let image;
    if (userInputImage) {
      image = (
        <Image
          source={require('../../assets/images/upload_photo.png')}
          style={styles.image}
        />
      );
    } else {
      image = <Image source={{uri: this.state.source}} style={styles.image} />;
    }

    return (
      <View style={styles.container}>
        {image}
        <Button
          title="Select Image"
          onPress={this.selectImage}
          style={{marginBottom: 10}}
        />
        <Form options={formOptions} type={Item} ref={c => (this._form = c)} />
        <Button title="Submit" type="solid" onPress={this.handleSubmit} />
      </View>
    );
  }
}

export {AddProductContainer};
