// 图像组件- Image
'use strict';

import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import icons from '../Assets/Icons'

class Base7 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{uri:'http://facebook.github.io/react/img/logo_og.png'}}
          style={styles.image}
        />
        <Text>ddd</Text>
      </View>
    )
  }
};

let styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
  }
})

export { Base7 as default };
