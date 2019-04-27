import React, { Component } from 'react';
import { AppRegistry,BackHandler, StyleSheet, TextInput, Text, View, Animated, Image, Easing, ListView, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';
import DropdownAlert from 'react-native-dropdownalert';
let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
var datasales = []
export default class Cart extends Component {
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
  deleteCart = (data) =>{
    console.log(data);
    
    this.dropdown.alertWithType('success', "Cart info", data.herbname+' added to cart');
  }

  herbalistfunc = (data)=> {
    console.log(data)
    this.props.navigation.navigate('Fourth',{'herbalistdata':data})
  }
  componentWillMount () {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    datasales.push(this.props.navigation.state.params.herbdata);
  }

 


  componentDidMount() {
    console.log(datasales[0])

    this.setState({
      dataSource: ds.cloneWithRows(datasales[0]),
      Loading: false,



    })
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
<View style={{width:'100%', height:40,backgroundColor:"green",justifyContent:"center",alignItems:'center'}}>

<Text style={{color:'white',fontSize:24}}> Place Order</Text>

</View>

<DropdownAlert ref={ref => this.dropdown = ref} />
      </View>
    );
  }

  
  _renderTripsRow(trips) {


    return (
      <TouchableOpacity onPress={()=>this.herbalistfunc(trips)}>
      <View style={styles.card}>

        <View style={styles.Imagecard}>
          <Text>image</Text>

        </View>

        <View style={styles.Datacard}>
          <Text style={{ fontSize: 16, color: '#000' }}>{trips.herbname}</Text>

          <View style={{ flexDirection: 'row' }}>
            <Image source={require('./price.png')} />
            <Text style={{ marginTop: 5, color: 'lightgreen' }} >{trips.cost}</Text>
          </View>


        </View>
        <View style={styles.Controllscard}>
          <TouchableOpacity onPress={() => this.deleteCart(trips)}>

            <Image source={require('./trash.png')} />
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
    backgroundColor: 'blue',
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