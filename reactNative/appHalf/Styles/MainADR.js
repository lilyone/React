'use strict';

import React from 'react-native';
let { StyleSheet } = React;

export default StyleSheet.create({
  item: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'rgba(100, 53, 201, 0.1)',
    paddingLeft: 6,
    paddingRight: 6,
    paddingBottom: 6,
    paddingTop: 6,
    flex: 1,
  },
  itemContent: {
    flex: 1,
    marginLeft: 13,
  },
  itemHeader: {
    fontSize: 18,
    fontFamily: 'Helvetica Neue',
    fontWeight: '300',
    color: '#6435c9',
    marginBottom: 6,
  },
  itemMeta: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.6)',
    marginBottom: 6,
  },
  redText: {
    color: '#db2828',
    fontSize: 15,
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 16,
    fontWeight: '300',
    color: 'rgba(0, 0, 0, 0.8)',
    lineHeight: 26,
  },
  image: {
    width: 99,
    height: 138,
    margin: 0,
  },
  container: {
    backgroundColor: '#eae7ff',
    flex: 1,
  },
  movieListContainer: {
    flex: 1,
    marginTop: 64,
  },

  tabBar: {
    height: 44,
    backgroundColor: 'darkslateblue',
  },
  tabBarBox: {
    flex: 1,
    flexDirection: 'row'
  },
  tabBarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconImageLight: {
    width: 30,
    height: 30,
    tintColor: 'rgba(255, 255, 255, 0.8)',
  },
  iconImageDark: {
    width: 30,
    height: 30,
    tintColor: 'rgba(255, 255, 255, 0.3)',
  },
  tabBarLight: {
    fontSize: 10,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  tabBarDark: {
    fontSize: 10,
    color: 'rgba(255, 255, 255, 0.3)',
  },
  tabBarThumb: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
