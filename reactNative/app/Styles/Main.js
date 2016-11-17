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
    marginTop: 64,
    marginBottom: 44,
  },
  content: {
    padding: 6,
    lineHeight: 26,
  }
});
