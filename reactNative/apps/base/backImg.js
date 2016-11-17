'use strict';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import icons from '../assets/icons.js'
//let abc = require('../assets/icon.png')
class Base1 extends React.Component{
	render(){
		return (
			<View style={styles.container}>
				<Image
					source={{uri:icons}}
					style={styles.image}
				/>
				<Text>1111112</Text>
			</View>
		)
	}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image:{
  	width:100,
  	height:100
  }
});
export default Base1;