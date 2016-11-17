'use strict';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableNativeFeedback
} from 'react-native';

import icons from '../assets/icons.js'
//let abc = require('../assets/hello.jpg')
class Base1 extends React.Component{
	render(){
		return (
			<View style={styles.container}>
					<TouchableNativeFeedback onPress={()=>console.log(1111111)}>
							<Image
								source={{uri:icons.img}}
								style={styles.image}
								
							/>							
					</TouchableNativeFeedback>
			</View>
		)
	}
	
	mm(){
		console.log(1111111)
	}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image:{
  	width:140,
  	height:140
  }
});
export default Base1;