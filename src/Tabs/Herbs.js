import React, { Component } from 'react';
import { AppRegistry,BackHandler, StyleSheet, TextInput, Text, View, Animated, Image, Easing, ListView, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';
import DropdownAlert from 'react-native-dropdownalert';




var herbslist = [

  {
    herbname: "Aloe Vera",
    image: "http://169.254.148.6/herbappApis/herbsimages/aloe.jpg",
    herbdescription: "This plant has a short stalk and a thorny and very watery toothly leaves.the leaves are green in color.the fruit is oval capsule and contains many seeds.",

    localname: "enkokorutanga",
    diseases: "cough,wounds",
    partused: "stem",
    preparation_prescription: "The gel extracted from aloe leaves can be used externally for any type of burns , 500ml _ 250ml given three times a day for adults _ children respectively for three days"
  },


  {
    herbname: "black jack",
    image: "http://169.254.148.6/herbappApis/herbsimages/black jack.jpg",
    herbdescription: "It is a tall branched weed with thin yellow flowers that develop into a cluster of barbed fruits.The fruits are like short, stiff hairs. They get stuck in feathers, fur, or socks,.",

    localname: "Nyabarasana",
    partused: " fresh leaves",
    diseases: "Eye infection, nose bleeding Yellow fever, diarrhoea, fresh wounds, ulcers ",
    preparation_prescription: "Squeeze _ drop in the eyes/nose.Rub on wound"

  },

  {
    herbname: "Bottle brush",
    herbdescription: "It has leaves that are like bottle shaped.",
    image: "http://169.254.148.6/herbappApis/herbsimages/brush.jpg",
    localname: "Ekibombo",
    diseases: "	cough	",
    partused: "Fresh leaf ",
    preparation_prescription: "Water extraction by boiling of dissolved plant drunk.500ml given once a day for adults _ one tea spoonful for children"
  },
  {
    herbname: "Bitter leaf",
    herbdescription: "Bitter leaf plant with leafy green vegetable.",
    image: "http://169.254.148.6/herbappApis/herbsimages/bitter leaf.jpg",
    localname: " Omubirizi ",
    diseases: "  Diarrhoea, gonorrhea ",
    partused: " fresh leaves",
    preparation_prescription: "Fresh bitter can be squeezed or blended like smoothies and drink as juice,you can boil it and drink as tea, put a little bit in your salad or use with other greens in your soup"
  },

  {
    herbname: "Dandelion",
    herbdescription: "This is a perennial weed it has flowers that are yellow ray florets and it has leaves with a toothly,deeply-notched,basal leaves that are hairless.",
    image: "http://169.254.148.6/herbappApis/herbsimages/dandelion.jpg",
    localname: " Ensoimya ",
    diseases: "it promotes bone and joint health, supports healthy liver function, and stimulates urinary function for cleansing.it purifies the blood, prevents gallstones, fights Alzheimer’s, and helps settle bad digestion",
    preparation: "fresh roots and leaves are often consumed in salads or Squeeze _ apply to the affected area",
    partused: " fresh leaves, floweer and roots",
  },

  {
    herbname: "Ginger",
    herbdescription: "is a flowering plant whose rhizome, ginger root or ginger,It has (false stems made of the rolled bases of leaves) about a meter tall bearing narrow leaf blades.The bear pale yellow with purple flowers and arise directly from the rhizome on separate shoots",
    image: "http://169.254.148.6/herbappApis/herbsimages/ginger.jpg",
    localname: "Entangahuzi   ",
    diseases: "muscular aches, pains, sore throats, cramps, hypertension,dementia, fever, infectious diseases, nervous system diseases,asthma, stroke, diabetes, and various digestive ailments, cough",
    partused: "Rhizome or stem",
    preparation_prescription: "Can chew in case of cough.Boil with tea"
  },
  {
    herbname: "Garlic",
    herbdescription: "	It is bulbous plant, growing up to 1 metre (3.3 ft) in height. produces hermaphrodite flowers.",
    image: "http://169.254.148.6/herbappApis/herbsimages/garlic.jpg",
    localname: " Tungulucumu",
    diseases: "cough",
    partused: "bulb",
    preparation_prescription: "Pound with ginger, add water _ drink"
  },
  {
    herbname: "Lemon",
    image: "http://169.254.148.6/herbappApis/herbsimages/lemon.jpg",
    herbdescription: "It is a species of small evergreen tree in the flowering plants family.",
    localname: "nniimu",
    diseases: "malaria.",
    partused: "fruit",
    preparation_prescription: "Juice extracted and mixed with other anti-malarial herbs."
  },
  {
    herbname: "Mango tree",
    herbdescription: "The mango tree is erect and branching with a thick trunk and broad, rounded canopy. The leaves of the tree are are shiny and dark green..",
    image: "http://169.254.148.6/herbappApis/herbsimages/mango.jpg",
    localname: "Omuyembe",
    diseases: "Malaria, cough	.",
    partused: "Fresh leaf and fresh stem bark",
    preparation_prescription: "Water extraction by boiling of the dissolved plant and then it is drunk	Fresh leaf and fresh stem bark"
  },
  {
    herbname: "Pigeon pea",
    herbdescription: "Pigeon pea is a highly branched shrub with a woody base, slender stems and trifoliate leaves.The plant leaflets are oblong or elliptical in shape and the leaves are alternate and arranged spirally on the stems.The plant usually produces yellow flowers, but they can be yellow with streaks of purple or red.",
    image: "http://169.254.148.6/herbappApis/herbsimages/pigeon.jpg",
    localname: " orutendigwa ",
    diseases: " Quicken placenta removal, diarrhoea, relieve menstrual pains, stomach ache measles",
    partused: "fresh leaves",
    preparation_prescription: "Squeeze ,add water and drink"
  },


  {
    herbname: "Siala tree",
    herbdescription: "An evergreen small tree that grows to 4–5 m in height. Leaves, of 20–30 cm in length,normally arranged in groups in the ends of the branches. Flowers in terminal clusters. They are trumpet shaped, yellow in colour,with orange-reddish spots in the throat.			",
    image: "http://169.254.148.6/herbappApis/herbsimages/siala.jpg",
    localname: "Omusambya",
    diseases: "Diarrhoea,Gorrnorea",
    partused: "Dry leaves",
    preparation_prescription: "Pound, add water and drink."
  },

  {
    herbname: "Tea plant ",
    image: "http://169.254.148.6/herbappApis/herbsimages/teaplant.jpg",
    herbdescription: "It is a species of evergreen shrub or small tree whose leaves and leaf buds are used to produce tea of flowering plants  family",

    localname: "Amajani",

    diseases: "Yellow fever, stomach ache.",
    partused: "fresh leaves",
    preparation_prescription: "Chew or water extraction from boiling of dissolved plant with bl;ack jack _ drunk."

  },
  {
    herbname: "tickberry",
    herbdescription: "It  has small tubular shaped flowers, which each have four petals and are arranged in clusters in terminal areas stems. Flowers come in many different colours, including red, yellow, white, pink and orange, which differ depending on location The leaves are broadly ovate, opposite, and simple and have a strong odour when crushed.",
    image: "http://169.254.148.6/herbappApis/herbsimages/tick.jpg",
    localname: "Omusekera",
    diseases: "Malaria, yellow fever, diarrhoea, cough",
    partused: "flowers",
    preparation_prescription: "Water extractiion by boiling of   dissolved plant  and then drunk. 500ml given three times a day"
  },
  {
    herbname: "vine spinach",
    herbdescription: "thick leaves look like spinach but with mild Swiss chard-like taste",
    image: "http://169.254.148.6/herbappApis/herbsimages/spinach.jpg",
    localname: "Enderema",
    diseases: "measles",
    partused: "Fresh leaves",
    preparation_prescription: " Water extraction by boiling dissolved plant and drink. 500ml given three times a day for adults _ 250ml to children for three days or apply on the body. Use the edible fresh leaves in salads or stir-fries."
  },

]
let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
export default class Herbs extends Component {
  static navigationOptions = {
    header: null,
  }
  constructor(props) {
    super(props)

    this.state = {
      align: "center",
      dataSource: ds,
      cart: "",
    }
  }

  addCart = (data) => {
    console.log(data);

    this.dropdown.alertWithType('success', "info", data.herbname + ' liked');
  }

  moveTo = (data) => {
    console.log(data);
    this.props.navigation.navigate('Third', { 'herbdata': data })

    /// this.dropdown.alertWithType('success', "Cart info", data.herbname+' added to cart');
  }



  componentDidMount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    this.setState({
      dataSource: ds.cloneWithRows(herbslist),
      Loading: false,

    });
  }

  render() {
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
    );
  }






  _renderTripsRow(trips) {


    return (
      <TouchableOpacity onPress={() => this.moveTo(trips)}>
        <View style={styles.card}>

          <View style={styles.Imagecard}>
            <Image source={{ uri: trips.image }} style={{ height: '90%', width: '100%', borderRadius: 200 }} />

          </View>

          <View style={styles.Datacard}>
            <Text style={{ fontSize: 16, color: '#000' }}>{trips.herbname}</Text>
            <Text>local name: {trips.localname}</Text>
            <View style={{ flexDirection: 'row' }}>

            </View>


          </View>
          <View style={styles.Controllscard}>
            <TouchableOpacity onPress={() => this.addCart(trips)}>

              <Image source={require('./love3.png')} />
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
    backgroundColor: 'green',
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
});