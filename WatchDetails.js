import React, { Component } from "react";
import {View,
        Text,
        Image,
        StyleSheet} from "react-native";
import { createStackNavigator } from 'react-navigation';
import UploadImage from './UploadImage';

export default class WatchDetails extends Component {
  render() {
    return (
      <View style={styles.img}>
      <UploadImage></UploadImage>
      <Image
      source={{ uri: this.props.navigation.state.params.image}}
      style={styles.img}
      />
      <Text>{this.props.navigation.state.params.title}</Text>


      </View>
    )

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  img: {

    height: 210,
  },
});
