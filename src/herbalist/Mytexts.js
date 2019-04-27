import React, { Component } from 'react';
import { AppRegistry,BackHandler, StyleSheet, TextInput, Text, View, Animated, Image, Easing, ListView, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';
import DropdownAlert from 'react-native-dropdownalert';
import { ScrollView } from 'react-native-gesture-handler';
let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
export default class Mytexts extends Component {
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

    componentWillMount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }


    herbalistfunc = (trips) => {
        console.log(trips)
    }


    componentDidMount() {

        fetch("http://169.254.148.6/herbappApis/mytexts.php", {
            method: "POST",


            headers: {
                "Accept": "aplication/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "key": this.props.navigation.state.params.herbdata
            })

        })
        .then((response) => response.json())
            .then((res) => {
                console.log(res)

                this.setState({
                    dataSource: ds.cloneWithRows(res),
                    Loading: false,



                })




            }).catch((error) => {

                console.log(error)
            });
    }
    render() {
        console.log(this.props.navigation.state.params.herbdata);
        return (
            <View style={styles.container}>
              
                <View style={styles.container3}>
                <Text>My messages</Text>
                    <ListView
                        style={{



                        }}
                        dataSource={this.state.dataSource} renderRow={(trips) => { return this._renderTripsRow(trips) }
                        }



                    />
                </View>








            </View>
        );
    }
    _renderTripsRow(trips) {


        return (
            <TouchableOpacity onPress={() => this.herbalistfunc(trips)}>
                <View style={styles.card}>

               

                    <View style={styles.Datacard}>
                        <Text style={{ fontSize: 16, color: '#000' }}>{trips.subject}</Text>

                        <View style={{ flexDirection: 'row' }}>

                            <Text style={{ marginTop: 5, color: 'lightgreen' }} >{trips.message}</Text>
                        </View>


                    </View>
                    <View style={styles.Controllscard}>
                        <TouchableOpacity onPress={() => this.addCart(trips)}>


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
    container2: {
        flex: 1,

        alignItems: 'center',
        backgroundColor: 'white'
    },
    container3: {
        flex: 2,

        alignItems: 'center',
        backgroundColor: 'green',
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