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

const REQUEST_URL = 'https://api.douban.com/v2/movie/top250';

export default React.createClass({
  getInitialState() {

    this.fetchData();

    return {
      movies: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      loading: false
    }
  },

  fetchData() {
    fetch(REQUEST_URL)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          movies: this.state.movies.cloneWithRows(responseData.subjects),
          loading: true
        })
        console.log(this.state.movies);
      })
      .done();
  },

  render() {
    if ( !this.state.loading ) {
      return (
        <View style={styles.container}>
          <View style={styles.loading}>
            <Text>loading...</Text>
          </View>
        </View>
      )
    }
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
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 33,
    textAlign: 'center',
  },
  container: {
    backgroundColor: '#eae7ff',
    flex: 1,
    paddingTop: 20
  }
});
