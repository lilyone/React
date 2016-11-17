// 背景 backgroundImage 与列表视图 - listview
'use strict';

import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <Image
         source={{uri: 'http://img7.doubanio.com/view/photo/photo/public/p2191398861.jpg'}}
         style={styles.backgroundImage}
        >
          <View style={styles.overlay}>
            <Text style={styles.overlayHeader}>机器总动员</Text>
            <Text style={styles.overlaySubheader}>Wall E (2008)</Text>
          </View>
        </Image>
      </View>
    );
  }
});

let styles = StyleSheet.create({
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    alignItems: 'center',
  },
  overlayHeader: {
    fontSize: 33,
    fontFamily: 'Helvetica Neue',
    color: '#eae7ff',
    padding: 10,
  },
  overlaySubheader: {
    fontSize: 16,
    fontFamily: 'Helvetica Neue',
    fontWeight: '200',
    padding: 10,
    paddingTop: 0,
    color: '#eae7ff',
  },
  image: {
    width: 99,
    height: 138,
    margin: 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    backgroundColor: '#eae7ff',
    flex: 1,
    paddingTop: 20,
  }
});
