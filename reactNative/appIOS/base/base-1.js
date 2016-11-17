// flexbox布局组件，view, text组件
'use strict';

import React from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default React.createClass({
  render() {
    return (
      <View style={{
        backgroundColor: '#eae7ff',
        flex: 1  
      }}></View>
    );
  }
});
