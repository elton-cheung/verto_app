import React from 'react';
import {Text, View, Image, StyleSheet, TextInput} from 'react-native';
import {Button} from 'react-native-elements';
import t from 'tcomb-form-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 50,
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

const options = {
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

const Form = t.form.Form;

class AddProductContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = () => {
    const value = this._form.getValue();
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/notebook.jpeg')}
          style={styles.image}
        />
        <Form type={Item} ref={c => (this._form = c)} />
        <Button title="Submit" type="solid" onPress={this.handleSubmit} />
      </View>
    );
  }
}

export {AddProductContainer};
