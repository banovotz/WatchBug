import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Tabbar from 'react-native-tabbar-bottom'
import Wall from './Wall';
import WallItemDetails from './WallItemDetails';

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
        {this.state.page === "Wall" && <Wall navigation={this.props.navigation}>Wall</Wall>}
        {this.state.page === "ProfileScreen" && <Text>Screen3</Text>}
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
              page: "Wall",
              icon: "notifications",
              badgeNumber: 11,
            },
            {
              page: "ProfileScreen",
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
    Wall: Wall,
    Details: WallItemDetails,
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
