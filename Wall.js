import React, { Component } from "react";
import { Text,
        Image,
        View,
        Button,
        FlatList,
        AppRegistry,
        StyleSheet} from "react-native";
import { createStackNavigator } from 'react-navigation';
import WallItemDetails from './WallItemDetails';
import { db } from './Db';
let itemsRef = db.ref('/watches');




export default class Wall extends Component {
  constructor() {
    super()
  this.state = {
    items: [],
    //data: [{ id: "1", title: "Omega Speedmaster", image: "https://www.omegawatches.com/media/gene-cms/s/p/sp_moonwatch_prof_31130423001005_vuec_1600x900.jpg" }, { id: "2", title: "Seiko SKX 007", image: "https://cdn.shopify.com/s/files/1/2229/3759/products/IMG_0030skx_PO_540x.jpg?v=1516554955" }, { id: "3", title: "Hamilton Khaki Field Mechanical", image: "https://image.rakuten.co.jp/chuukotokei/cabinet/shohin19/imgrc0074967668.jpg" }, { id: "4", title: "c", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGj7Pg-oDgarvsHBiablKN4OMdIAOhmatuaQpAtQ1Atx5KA1qm" }],
    page: "Wall",


  }
  }

  componentDidMount() {
          itemsRef.on('value', (snapshot) => {
              let data = snapshot.val();
              let items = Object.values(data);
              this.setState({items});
           });
      }


  _renderItem = ({ item }) => (
    <View>
      <Image
              source={{ uri: item.image}}
              style={styles.img}

            />

            <Button
                title={item.name}
                onPress={() => this.props.navigation.navigate('Details', {title: item.title, image: item.image} )}
              >
              </Button>

    </View>
  );


  _keyExtractor = (item, index) => item.id;

  render() {
    return (

      <FlatList style={styles.container}
        data={this.state.items}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}


      />


    );

  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  img: {

    height: 210,
  },
});
