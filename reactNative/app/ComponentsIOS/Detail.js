'use strict';

import React from 'react';

import {
  View,
  Text,
  Image,
  ListView,
  ActivityIndicator,
  TouchableHighlight,
  Button,
} from 'react-native';

import styles from '../Styles/MainADR';

class Detail extends React.Component {
  constructor(props) {
    super(props);

    const REQUEST_URL = `https://api.douban.com/v2/movie/subject/${this.props.route.passProps.movie.id}`;

    this.fetchData(REQUEST_URL);

    this.state = {
      loading: false,
      movieDetail: null,
    }
  }

  fetchData(url) {
    fetch(url)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          movieDetail: responseData,
          loading: true,
        })
      })
      .done();
  }

  _onPressBack() {
    this.props.navigator.jumpBack();
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

    let movie = this.state.movieDetail;
    let summary = movie.summary.split(/\n/).map((p,index) => {
      return (
        <View key={index}>
          <Text style={styles.itemText, styles.content}>{p}</Text>
        </View>
      )
    });

    return (
      <View style={styles.container}>
        <View style={styles.detailBar}>
          <Button
            onPress={()=>this._onPressBack()}
            title="返回"
            color="rgba(255, 255, 255, 0.6)"
            style={styles.barButton}
          />
        </View>
        <View style={styles.item, {flexDirection:'column'}}>
          {summary}
        </View>
      </View>
    )
  }
};

export default Detail;
