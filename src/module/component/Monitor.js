import {StyleSheet, Text, View} from 'react-native';
import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';

@inject('store')
@observer
class Monitor extends Component {
  render() {
    const {store} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.txtButton}>{store.answer}</Text>
      </View>
    );
  }
}

export default Monitor;

const styles = StyleSheet.create({
  txtDes: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  txtButton: {
    fontWeight: 'bold',
    fontSize: 50,
  },
  container: {
    flex: 1,
    backgroundColor: '#D7D7D7',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: 10,
  },
});
