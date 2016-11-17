'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  Image,
  Navigator,
  TouchableHighlight,
  StatusBar,
} from 'react-native';

import MovieList from './app/ComponentsIOS/MovieList';
import icons from './app/Assets/Icons';
import styles from './app/Styles/MainADR';
import ComingSoonList from './app/ComponentsIOS/ComingSoonList';

export default class reactProject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tabIndex: 0
    }
  }

  renderScene(route, navigator) {
    return <route.component navigator={navigator}  {...route.passProps} />;
  }

  configureScene(route, routeStack) {
    if (route.type == 'Modal') {
      return Navigator.SceneConfigs.FloatFromBottom;
    }
    return Navigator.SceneConfigs.PushFromRight;
  }

  render() {
    const routes = [
      {name: 'Featured', component: MovieList},
      //{name: 'Featured', component: MovieList},
      {name: 'ComingSoon', component: ComingSoonList},
      //{name: 'ComingSoon', component: MovieList},
    ]; 

    const tabBars = [
      {title: '推荐电影', imgSrcLight: icons.starActive, imgSrcDark: icons.star},
      {title: '即将上映', imgSrcLight: icons.calendarActive, imgSrcDark: icons.calendar},
    ];

    let tabBarList = tabBars.map((item, index) => {
      return (
        <View key={index} style={styles.tabBarItem}>
          <TouchableHighlight
            underlayColor = "darkslateblue"
            onPress={(route) => {
              this.nav.resetTo(routes[index]);
            }} key={index}>
            <View style={styles.tabBarThumb}>
              <Image style={this.state.tabIndex === index ? styles.iconImageLight : styles.iconImageDark} source={{uri: this.state.tabIndex === index ? item.imgSrcLight : item.imgSrcDark}} />
              <Text style={this.state.tabIndex === index ? styles.tabBarLight : styles.tabBarDark}>{item.title}</Text>
            </View>
          </TouchableHighlight>
        </View>
      )
    })
    return (
      <View style={{flex: 1}}>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
        />
        <Navigator
          initialRoute = {routes[0]}
          initialRouteStack = {routes}
          configureScene = {this.configureScene}
          renderScene = {this.renderScene}
          ref={(navigator) => {
             this.nav = navigator;
          }}
          onWillFocus = {(nextRoute) => {
             if(nextRoute != routes[this.state.tabIndex]){
                this.setState({
                  tabIndex: routes.indexOf(nextRoute)
                })
             }
          }}
          navigationBar = {
            <View style={styles.tabBar}>
              <View style={styles.tabBarBox}>
                {tabBarList}
              </View>
            </View>
          }
        />
      </View>
    )
  }
};

//AppRegistry.registerComponent('MovieTalk', () => MovieTalk);
AppRegistry.registerComponent('reactProject', () => reactProject);
