'use strict';

import React from 'react';
import styles from '../Styles/Main';
import ComingSoonList from './ComingSoonList';

import {
  Text,
  View,
  NavigatorIOS,
} from 'react-native';

class ComingSoon extends React.Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: '即将上映',
          component: ComingSoonList
        }}
        shadowHidden={true}
        barTintColor="darkslateblue"
        titleTextColor="rgba(255, 255, 255, 0.8)"
        tintColor="rgba(255, 255, 255, 0.8)"
        translucent={true}
      />
    )
  }
};

export { ComingSoon as default };
