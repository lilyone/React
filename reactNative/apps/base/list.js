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

//const REQUEST_URL = 'https://api.douban.com/v2/movie/top250';
const REQUEST_URL = 'http://apis.baidu.com/qunartravel/travellist/travellist?query=%12%29&page=42';

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
    fetch(REQUEST_URL,{
    	headers:{
        "apikey":"45d8173dfc35ce17924e1141a441258e"
    	}
    })
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          movies: this.state.movies.cloneWithRows(responseData.data.books),
          loading: true
        })
      })
      .done();
  },

  renderMovieList(movie) {
    return (
      <View style={styles.item}>
        <View style={styles.itemImage}>
          <Image
            source={{uri: movie.headImage}}
            style={styles.image}
          />
        </View>
        <View style={styles.itemContent}>
          <Text style={styles.itemHeader}>{movie.title}</Text>
          <Text style={styles.itemMeta}>
            {movie.userName} ({movie.startTime})
          </Text>
          <Text style={styles.redText}>{movie.viewCount}</Text>
        </View>
      </View>
    )
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
          renderRow={this.renderMovieList}
        />
      </View>
    );
  }
});

let styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'rgba(100, 53, 201, 0.1)',
    paddingBottom: 6,
    marginBottom: 6,
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
    fontSize: 33,
    textAlign: 'center',
  },
  image: {
    width: 99,
    height: 138,
    margin: 0,
  },
  container: {
    backgroundColor: '#eae7ff',
    flex: 1,
    paddingTop: 20,
    paddingLeft: 6,
    paddingRight: 6,
    
  }
});
