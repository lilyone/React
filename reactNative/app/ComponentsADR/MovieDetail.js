'use strict';

import React from 'react';
import styles from '../Styles/MainADR';
import {
  Text,
  View,
  Image,
  ListView,
  ActivityIndicator,
  TouchableHighlight,
  Button,
} from 'react-native';

class MovieDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movieDetail: '',
      loaded: false,
    };
    const REQUEST_URL = `https://api.douban.com/v2/movie/subject/${this.props.route.passProps.movie.id}`;

    this.fetchData(REQUEST_URL);
  }

  fetchData(url) {
    fetch(url)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          movieDetail: responseData,
          loaded: true,
        })
      })
      .done();
  }
  _onPressBack() {
    let {navigator} = this.props;
    navigator.jumpBack();
  }
  render() {
    if ( !this.state.loaded ) {
      return (
        <View style={styles.container}>
          <View style={styles.detailBar}>
            <View style={styles.barLeft}>
              <Button
                onPress={()=>this._onPressBack()}
                title="返回"
                color="rgba(255, 255, 255, 0.6)"
                style={this.barButton}
              />
            </View>
            <View style={styles.barRight}>
              <Text style={styles.barRightText}>{this.props.route.passProps.movie.title}</Text>
            </View>
          </View>
          <View style={styles.loading}>
            <ActivityIndicator size="large" color="#6435c9" />
          </View>
        </View>
      )
    }

    let movie = this.state.movieDetail;
    let summary = movie.summary.split(/\n/).map((p, i) => {
      return (
        <View key={i} style={{marginBottom: 15, paddingLeft: 6, paddingRight: 6}}>
          <Text style={styles.itemText}>{p}</Text>
        </View>
      )
    });

    return (
      <View style={styles.container}>
        <View style={styles.detailBar}>
          <View style={styles.barLeft}>
            <Button
              onPress={()=>this._onPressBack()}
              title="返回"
              color="rgba(255, 255, 255, 0.6)"
              style={this.barButton}
            />
          </View>
          <View style={styles.barRight}>
            <Text style={styles.barRightText}>{this.props.route.passProps.movie.title}</Text>
          </View>
        </View>
        <View style={styles.summary}>
          <View style={styles.item, {flexDirection: 'column'}}>
            {summary}
          </View>
        </View>
      </View>
    )
  }
};

export { MovieDetail as default };
