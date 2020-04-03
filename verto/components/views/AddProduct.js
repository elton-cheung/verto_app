/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import t from 'tcomb-form-native';
import ImagePicker from 'react-native-image-picker';
import bootstrap from 'tcomb-form-native/lib/stylesheets/bootstrap.js';
// import styles from './style/addProductStyle.js';

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
};

const Form = t.form.Form;

class AddProductContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      source1: '../../assets/images/upload_photo.png',
      source2: '../../assets/images/upload_photo.png',
      source3: '../../assets/images/upload_photo.png',
      source4: '../../assets/images/upload_photo.png',
      source5: '../../assets/images/upload_photo.png',
    };
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
          source1: response.uri,
        });
      }
    });
  };

  render() {
    let mainImage;
    if (this.state.source1 === '../../assets/images/upload_photo.png') {
      mainImage = (
        <Image
          source={require('../../assets/images/upload_photo.png')}
          style={styles.mainImage}
        />
      );
    } else {
      mainImage = (
        <Image source={{uri: this.state.source1}} style={styles.mainImage} />
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          {mainImage}
          {/* <View style={styles.imagesLeftColumn}>
            {secondaryImage1}
            {secondaryImage2}
          </View>
          <View style={styles.imagesRightColumn}>
            {secondaryImage3}
            {secondaryImage4}
          </View> */}
        </View>
        <View style={styles.form}>
          <Button title="Select Image" onPress={this.selectImage} style={styles.selectImage}/>
          <Form options={formOptions} type={Item} ref={c => (this._form = c)} />
          <Button title="Submit" type="solid" onPress={this.handleSubmit} style={styles.submit} />
        </View>
      </View>
    );
  }
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
    alignSelf: 'flex-end',
  },
  selectImage: {
    width: 150,
    alignSelf: 'center',
  }
});

export {AddProductContainer};
