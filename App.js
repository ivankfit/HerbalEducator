import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,StatusBar,TouchableOpacity,ScrollView,Dimensions,
} from 'react-native';
import {createMaterialTopTabNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation';


import Login from './src/Login';
import Herbalist from './src/Tabs/Herbalist';
import Herbs from './src/Tabs/Herbs';
import HerbProfile from './src/HerbProfile';
import Products from './src/Tabs/Products';
import HerbalistProfile from './src/HerbalistProfile';
import Cart from './src/Tabs/Cart';
import Signup from './src/Signup';
import Home from './src/herbalist/Home';
import addProduct from './src/herbalist/addProduct';
import Viewmyproducts from './src/herbalist/Viewmyproducts';
import Feedback from './src/herbalist/Feedback';
import Mytexts from './src/herbalist/Mytexts';


const Tabs = createMaterialTopTabNavigator({

  Herbs: { screen: Herbs,
    navigationOptions:{
      header:null,
    } 
  },
  Products: { screen: Products,
    navigationOptions:{
      header:null,
    }  },
  Herbalists: { screen: Herbalist,
    navigationOptions:{
      header:null,
    }  },
  Herbalists: { screen: Herbalist,
    navigationOptions:{
      header:null,
    }  },
 
  },
 {

 animationEnabled:true,
 tabBarOptions:{
   activeTintColor:'#ffffff',
   activeBackgroundColor:'green',
   inactiveTintColor:'lightgreen',
   inactiveBackgroundColor:'green',
   upperCaseLabel:false,
   style: {
   backgroundColor: 'green',
 },
 labelStyle:{

   fontFamily:'MontSerrat Light'
 },
 
 indicatorStyle:{
   backgroundColor: '#ffffff',
   height:3,
 }
 
 }});
const Navigation = createStackNavigator({
 
  First1 : {screen: Login},

  First : {screen: Feedback,navigationOptions:{
    header:null,
  }},
  
  First1 : {screen: Login},

 
  Second : {screen :Tabs,navigationOptions:{
    header:null,
  } },
  Third : {screen :HerbProfile,navigationOptions:{
    header:null,
  } },
  Fourth : {screen :HerbalistProfile,navigationOptions:{
    header:null,
  } },
  Fifth: {screen :Signup,navigationOptions:{
    header:null,
  } },
  Sixth: {screen :Cart,navigationOptions:{
    header:null,
  } },
  Seventh: {screen :Home,navigationOptions:{
    header:null,
  } },
  Eigth: {screen :addProduct,navigationOptions:{
    header:null,
  } },

  nineth : {screen:Viewmyproducts,navigationOptions:{
    header:null,
  }},
  tenth : {screen:Mytexts,navigationOptions:{
    header:null,
  }}
  });
  

  const AppC =createAppContainer(Navigation);
export default AppC;
