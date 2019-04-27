import React, { Component } from 'react';
import { AppRegistry, BackHandler, StyleSheet, TextInput, Text, View, Animated, Image, Easing, ListView, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';
import DropdownAlert from 'react-native-dropdownalert';
let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
export default class Herbalist extends Component {
  static navigationOptions = {
    header: null,
  }
  constructor(props) {
    super(props)

    this.state = {
      align: "center",
      dataSource: ds,
    }
  }
  addCart = (data) =>{
    console.log(data);
    this.props.navigation.navigate(' First',{'herbalistdata':data})

  }

  herbalistfunc = (data)=> {
    console.log(data)
    this.props.navigation.navigate('Fourth',{'herbalistdata':data})
  }


  componentDidMount() {

    fetch("http://169.254.148.6/herbappApis/herbalist.php", {
      method: "POST",


      headers: {
        "Accept": "aplication/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "key": 1,
      })

    })
      .then((response) => response.json())
      .then((res) => {

        this.setState({
          dataSource: ds.cloneWithRows(res),
          Loading: false,



        })




      }).catch((error) => {

        console.log(error)
      });
  }

  componentWillMount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }
  


  render() {
    return (
      <View style={styles.container}>

        <ListView
          style={{
            marginTop:20


          }}
          dataSource={this.state.dataSource} renderRow={(trips) => { return this._renderTripsRow(trips) }
          }



        />


<DropdownAlert ref={ref => this.dropdown = ref} />
      </View>
    );
  }

  
  _renderTripsRow(trips) {


    return (
      <TouchableOpacity onPress={()=>this.herbalistfunc(trips)}>
      <View style={styles.card}>

        <View style={styles.Imagecard}>
        <Image source={{ uri: trips.Image }} style={{ height: '90%', width: '100%', borderRadius:200 }} />

        </View>

        <View style={styles.Datacard}>
          <Text style={{ fontSize: 16, color: '#000' }}>{trips.Name}</Text>

          <View style={{ flexDirection: 'row' }}>
            <Image source={require('./price.png')} />
            <Text style={{ marginTop: 5, color: 'lightgreen' }} >{trips.location}</Text>
          </View>


        </View>
        <View style={styles.Controllscard}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('First',{'data':trips})}>

            <Image source={require('./message.png')} />
          </TouchableOpacity>

        </View>





      </View>
      </TouchableOpacity>


    )

  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    backgroundColor: 'white'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff'
  },

  card: {
    flexDirection: 'row',

    width: '100%',
    height: 70,

    marginBottom:5,
    marginLeft:10



  },
  Imagecard: {


    width: 70,
    height:70,
    borderRadius:35,

    marginRight:15,
    justifyContent:'center',
    alignItems:'center',

  },
  Datacard: {
    width: '60%',
    borderBottomColor: "green",
    borderBottomWidth: 1,
  },
  Controllscard: {
    borderBottomColor: "green",
    borderBottomWidth: 1,
    marginLeft:10,
  },
  InputData: {
    width: '80%',
    height: 40,
    backgroundColor: 'rgba(255,255,255,1)',
    marginTop: 20,
    marginBottom: 20,
    borderColor: "green",
    borderWidth: 1,
    borderRadius: 20,
    color: 'green',
  },
});