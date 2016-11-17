// 列表组件 - ListView
'use strict';

import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView
} from 'react-native';

const REQUEST_URL = 'https://api.douban.com/v2/movie/in_theaters';

export default React.createClass({
  getInitialState() {

    this.fetchData();

    let ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });

    return {
      data: ds,
      movies: [],
    }
  },

  fetchData() {
    fetch(REQUEST_URL)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          movies: this.state.data.cloneWithRows(responseData.subjects)
        })
      })
  },

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.movies}
          renderRow={
            movie => <Text style={styles.itemText}>{movie.title}</Text>
          }
        />
      </View>
    );
  }
});

let styles = StyleSheet.create({
  itemText: {
    fontSize: 33,
    textAlign: 'center',
  },
  container: {
    backgroundColor: '#eae7ff',
    flex: 1,
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
