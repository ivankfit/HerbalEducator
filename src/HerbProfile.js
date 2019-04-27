import React, { Component } from 'react';
import { AppRegistry,BackHandler, StyleSheet, TextInput,  Text, View, Animated, Image, Easing, ListView, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';
import DropdownAlert from 'react-native-dropdownalert';
import { ScrollView } from 'react-native-gesture-handler';
let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
export default class HerbProfile extends Component {
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
    addCart = (data) => {
        console.log(data);

        this.dropdown.alertWithType('success', "Cart info", data.herbname + ' added to cart');
    }

    herbalistfunc = (trips) => {
        console.log(trips)
    }


    componentDidMount() {

        
    }



    render() {
        console.log(this.props.navigation.state.params.herbdata);
        return (
            <View style={styles.container}>
                <View style={styles.container2}>
                <Image source={{ uri: this.props.navigation.state.params.herbdata.image }} style={{ height: 100, width: '100%' }} />
                    <Text style={{ fontSize:20,color:'white'}}>{this.props.navigation.state.params.herbdata.herbname}</Text>

                </View>
                <View style={styles.container3}>
                    <ScrollView>
                        <Text style={{ padding: 15,fontSize:18,color:'green'}}>local name:</Text>
                        <Text style={{ paddingLeft: 20,fontSize:19,color:'black'}}>{this.props.navigation.state.params.herbdata.localname}</Text>

                        <Text style={{ paddingLeft: 20,fontSize:18,color:'green'}}></Text>
                        <Text style={{ paddingLeft: 20,paddingBottom: 10,fontSize:18,color:'green'}}>part used</Text>
                        <Text style={{ paddingLeft: 20,color:'black' }}>{this.props.navigation.state.params.herbdata.partused}</Text>

                        <Text style={{ paddingLeft: 20,fontSize:18,color:'green'}}></Text>
                        <Text style={{ paddingLeft: 20,paddingBottom: 10,fontSize:18,color:'green'}}>preparation and prescription</Text>
                   
                        <Text style={{ paddingLeft: 20,color:'black' }}>{this.props.navigation.state.params.herbdata.preparation_prescription}</Text>
                        <Text style={{ paddingLeft: 20,fontSize:18,color:'green'}}></Text>
                        <Text style={{ paddingLeft: 20,fontSize:18,color:'green'}}>diseases</Text>

                        <Text style={{ paddingLeft: 20,color:'black' }}>{this.props.navigation.state.params.herbdata.diseases}</Text>
                       
                        
                    </ScrollView>
                </View>








            </View>
        );
    }




}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        alignItems: 'center',
        backgroundColor: 'green'
    },
    container2: {
        flex: 1,

        alignItems: 'center',
        backgroundColor: 'green'
    },
    container3: {
        flex: 2,
        paddingLeft:10,
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%'
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
        borderBottomColor: "green",
        borderBottomWidth: 1,



    },
    Imagecard: {


        width: '20%',


        backgroundColor: 'blue',


    },
    Datacard: {


        width: '70%',




    },
    Controllscard: {


        width: '10%',





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