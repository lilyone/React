// flexbox布局组件，view, text组件
'use strict';

import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';

export default React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.item, styles.itemOne], {marginTop: 200}}>
          <Text style={styles.itemText}> 1 </Text>
        </View>
        <View style={[styles.item, styles.itemTwo]}>
          <Text style={styles.itemText}> 2 </Text>
        </View>
        <View style={[styles.item, styles.itemThree]}>
          <Text style={styles.itemText}> 3 </Text>
        </View>
      </View>
    );
  }
});

let styles =  StyleSheet.create({
  container: {
    backgroundColor: '#eae7ff',
    flex: 1,
    paddingTop: 20,
    // flexDirection: 'column'
  },
  item: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#6435c9',
    margin: 6,
    width: 100,
  },
  itemOne: {
    // position: 'absolute',
    // left: 30,
    // zIndex: 1,
    // float: 'left'
  },
  itemTwo: {
    // alignSelf: 'center'
    // float: 'left'
  },
  itemThree: {
    // alignSelf: 'flex-end'
  },
  itemText: {
    fontSize: 33,
    textAlign: 'center',
    fontWeight: '700'
  }
})
