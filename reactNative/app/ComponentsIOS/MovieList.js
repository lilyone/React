'use strict';

import React from 'react';
import styles from '../Styles/MainADR';
import Detail from './Detail';

import {
  Text,
  View,
  Image,
  ListView,
  ActivityIndicator,
  TouchableHighlight,
  Button
} from 'react-native';

const REQUEST_URL = 'http://www.behappyli.cn/api/MovieList.json';

class Title extends React.Component {
  render() {
    return (
      <View style={styles.title}>
        <Text style={styles.titleText}>推荐电影</Text>
      </View>
    )
  }
};

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
  _onPressBack() {
     let {navigator} = this.props;
      navigator.jumpBack();
  },
  fetchData() {
    fetch(REQUEST_URL)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          movies: this.state.movies.cloneWithRows(responseData.subjects),
          loaded: true
        })
      })
      .done();
  },

  showMovieDetail(movie) {
    this.props.navigator.push({
      component: Detail,
      passProps: {movie}
    })
  },

  renderMovieList(movie) {
    return (
      <TouchableHighlight
        underlayColor="rgba(34, 26, 38, 0.1)"
        onPress={() => this.showMovieDetail(movie)}
      >
        <View style={styles.item}>
          <View style={styles.itemImage}>
            <Image
              source={{uri: movie.casts[0].avatars.large}}
              style={styles.image}
            />
          </View>
          <View style={styles.itemContent}>
            <Text style={styles.itemHeader}>{movie.title}</Text>
            <Text style={styles.itemMeta}>
              {movie.original_title} ({movie.year})
            </Text>
            <Text style={styles.redText}>{movie.rating.average}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  },

  render() {
    if ( !this.state.loaded ) {
      return (
        <View style={styles.container}>
          <Title />
          <View style={styles.loading}>
            <ActivityIndicator size="large" color="#6435c9" />
          </View>
        </View>
      )
    }
    return (
      <View style={styles.movieListContainer}>
        <Title />
        <ListView
          dataSource={this.state.movies}
          renderRow={this.renderMovieList}
        />
      </View>
    );
  }
});
