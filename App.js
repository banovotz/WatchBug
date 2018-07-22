import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Tabbar from 'react-native-tabbar-bottom'
import Watches from './Watches';
import WatchDetails from './WatchDetails';
import UploadImage from './UploadImage';


class WatchTabs extends Component {
  constructor() {
    super()
    this.state = {
      page: "HomeScreen",
    }
  }

  render() {
    return (
      <View style={styles.container}>


        {this.state.page === "HomeScreen" && <Text>Screen1</Text>}
        {this.state.page === "Watches" && <Watches navigation={this.props.navigation}>Watches</Watches>}
        {this.state.page === "UploadImage" && <UploadImage navigation={this.props.navigation}>Upload</UploadImage>}
        {this.state.page === "ChatScreen" && <Text>Screen4</Text>}
        {this.state.page === "SearchScreen" && <Text>Screen5</Text>}

        <Tabbar
          stateFunc={(tab) => {
            this.setState({page: tab.page})
            //this.props.navigation.setParams({tabTitle: tab.title})
          }}
          activePage={this.state.page}
          tabs={[
            {
              page: "HomeScreen",
              icon: "home",
            },
            {
              page: "Watches",
              icon: "notifications",
              badgeNumber: 11,
            },
            {
              page: "UploadImage",
              icon: "person",
            },
            {
              page: "ChatScreen",
              icon: "chatbubbles",
              badgeNumber: 7,
            },
            {
              page: "SearchScreen",
              icon: "search",
            },
          ]}
        />
      </View>
    );
  }
}



const RootStack = createStackNavigator(
  {
    Watches: Watches,
    Details: WatchDetails,
    UploadImage: UploadImage,
    HomeScreen: WatchTabs
  },
  {
    initialRouteName: 'HomeScreen',
  }
);

export default class App extends Component {
  render() {
    return (
      <RootStack />
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
