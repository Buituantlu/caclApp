import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';

@inject('store')
@observer
class Keyboard extends Component {
  render() {
    const operations = [
      '7',
      '8',
      '9',
      '+',
      '4',
      '5',
      '6',
      '-',
      '1',
      '2',
      '3',
      '*',
      'clear',
      '0',
      '=',
      '/',
    ];
    const {store} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.rowHorizon}>
          {operations.map(item => (
            <TouchableOpacity
              key={Math.random()}
              style={styles.button}
              onPress={() => store.calculate(item)}>
              <Text style={styles.txtButton}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }
}

export default Keyboard;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#99FFFF',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  rowHorizon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
    flexWrap: 'wrap',
  },
  button: {
    height: 70,
    width: 70,
    backgroundColor: '#ACEFFF',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  txtButton: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
