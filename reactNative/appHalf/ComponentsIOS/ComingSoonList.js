'use strict';

import React from 'react';

import {
  View,
  Text,
  Image,
  ListView,
  ActivityIndicator,
  TouchableHighlight,
} from 'react-native';

import styles from '../Styles/Main';
import icons from '../Assets/Icons';
import Detail from './Detail';

class ComingSoonList extends React.Component {
  constructor(props) {
    super(props);

    const REQUEST_URL = 'http://www.behappyli.cn/api/ComingSoonList.json';

    this.fetchData(REQUEST_URL);

    this.state = {
      movies: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      loading: false
    };
  }

  fetchData(url) {
    fetch(url)
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData.subjects);
        this.setState({
          movies: this.state.movies.cloneWithRows(responseData.subjects),
          loading: true
        })
      })
      .done();
  }

  showMovieDetail(movie) {
    this.props.navigator.push({
      title: movie.title,
      component: Detail,
      passProps: {movie},
      barTintColor: "darkslateblue",
      tintColor: "rgba(255, 255, 255, 0.8)",
      titleTextColor: "rgba(255, 255, 255, 0.8)",
    })
  }

  renderMovieList(movie) {
    try {
      var imgSrc = movie.casts[0].avatars.large;
    } catch (e) {
      var imgSrc = icons.none;
    }
    return (
      <TouchableHighlight
        onPress={() => this.showMovieDetail(movie)}
        underlayColor="rgba(34, 26, 38, 0.1)"
      >
        <View style={styles.item}>
          <View style={styles.itemImage}>
            <Image
            source={{uri: imgSrc}}
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
  }

  render() {
    if ( !this.state.loading ) {
      return (
        <View style={styles.container}>
          <View style={styles.loading}>
            <ActivityIndicator
              size="large"
              color="#6435c9"
            />
          </View>
        </View>
      )
    }
    return (
      <View style={styles.movieListContainer}>
        <ListView
          dataSource={this.state.movies}
          renderRow={this.renderMovieList.bind(this)}
        />
      </View>
    );
  }
};

export { ComingSoonList as default };
