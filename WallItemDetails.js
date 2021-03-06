import React, { Component } from "react";
import {View,
        Text,
        Image,
        StyleSheet} from "react-native";
import { createStackNavigator } from 'react-navigation';


export default class WallItemDetails extends Component {
  render() {
    return (
      <View style={styles.img}>

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
