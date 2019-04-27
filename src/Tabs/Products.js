import React, { Component } from 'react';
import { AppRegistry,BackHandler, StyleSheet, TextInput, Text, View, Animated, Image, Easing, ListView, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';
import DropdownAlert from 'react-native-dropdownalert';
let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
const cartdata = []


export default class Products extends Component {
  static navigationOptions = {
    header: null,
  }
  constructor(props) {
    super(props)

    this.state = {
      align: "center",
      dataSource: ds,
      cart: 0,
   
    }
  }

  viewCart = () =>{
    console.log("going to cart");
    this.props.navigation.navigate('Sixth', { 'herbdata': cartdata})
  }

  addCart = (data) => {
   var x =this.state.cart;
   var y = x +1;
    this.setState({cart:y})
    cartdata.push(data);

    console.log(cartdata)


    this.dropdown.alertWithType('success', "Cart info", data.herbname + ' added to cart');
  }

  moveTo = (data) => {
    console.log(data);
    this.props.navigation.navigate('Third', { 'herbdata': data })

    /// this.dropdown.alertWithType('success', "Cart info", data.herbname+' added to cart');
  }



  componentDidMount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);

    fetch("http://169.254.148.6/herbappApis/prods.php", {
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








  render() {
    if(this.state.cart == 0){
      return (
        <View style={styles.container}>

        <TextInput style={styles.InputData}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder='Search herb'
          placeholderTextColor='grey'
          onChangeText={(b) => this.setState({ username: b })} />


        <ListView
          style={{



          }}
          dataSource={this.state.dataSource} renderRow={(trips) => { return this._renderTripsRow(trips) }
          }

        />
    
        <DropdownAlert ref={ref => this.dropdown = ref} />
      </View>
      )
    }
    return (

      <View style={styles.container}>

        <TextInput style={styles.InputData}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder='Search herb'
          placeholderTextColor='grey'
          onChangeText={(b) => this.setState({ username: b })} />


        <ListView
          style={{



          }}
          dataSource={this.state.dataSource} renderRow={(trips) => { return this._renderTripsRow(trips) }
          }

        />
         <TouchableOpacity
          activeOpacity={0.7}
          onPress={this.viewCart}
          style={styles.TouchableOpacityStyle2}>
         
         <Text style={{fontSize:8, color:'white'}}>{this.state.cart}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={this.viewCart}
          style={styles.TouchableOpacityStyle}>
         
          <Image
            
            source={require('./cart.png')}
       
            style={{width:40,height:40}}
          />
        </TouchableOpacity>









        <DropdownAlert ref={ref => this.dropdown = ref} />
      </View>
    );
  }






  _renderTripsRow(trips) {


    return (
      <TouchableOpacity onPress={() => this.moveTo(trips)}>
        <View style={styles.card}>

          <View style={styles.Imagecard}>
          <Image source={{ uri: trips.image }} style={{ height: '90%', width: '100%', borderRadius:200 }} />

          </View>

          <View style={styles.Datacard}>
            <Text style={{ fontSize: 16, color: '#000' }}>{trips.herbname}</Text>
            <Text>local name: {trips.localname}</Text>
            <View style={{ flexDirection: 'row' }}>
              <Image source={require('./price.png')} />
              <Text style={{ marginTop: 5, color: 'lightgreen' }} > UGX{trips.cost}</Text>
            </View>


          </View>
          <View style={styles.Controllscard}>
            <TouchableOpacity onPress={() => this.addCart(trips)}>

              <Image  source={require('./cart.png')} />
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

    marginBottom: 5,
    marginLeft: 10



  },
  Imagecard: {


    width: 70,
    height: 70,
    borderRadius: 35,

    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  
  },
  Datacard: {
    width: '60%',
    borderBottomColor: "green",
    borderBottomWidth: 1,





  },
  Controllscard: {

    borderBottomColor: "green",
    borderBottomWidth: 1,
    marginLeft: 10,
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
  TouchableOpacityStyle: {
    //Here is the trick
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
    backgroundColor:"lightgreen",
    borderRadius:25,
 },
 TouchableOpacityStyle2: {
  //Here is the trick
  position: 'absolute',
  width: 20,
  height: 20,
  alignItems: 'center',
  justifyContent: 'center',
  right: 30,
  bottom:72,
  backgroundColor:"lightgreen",
  borderRadius:25,
}
});