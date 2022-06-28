import {StyleSheet, View} from 'react-native';
import React, { Component } from 'react';
import Monitor from '../component/Monitor';
import Keyboard from '../component/Keyboard';

class Home extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#FFF', paddingHorizontal: 10}}>
        <Monitor />
        <Keyboard />
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({});
