import React, { Component } from 'react';
import { AppRegistry, BackHandler, StyleSheet, TextInput, Text, View, Animated, Image, Easing, ListView, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';
import DropdownAlert from 'react-native-dropdownalert';
import { ScrollView } from 'react-native-gesture-handler';

export default class Singup extends Component {
    static navigationOptions = {
        header: null,
    }
    constructor(props) {
        super(props)

        this.state = {
            align: "center",
            type: "",
            Pin: "",
            loadkey: "",
            userwaitkey: false,
            herbwaitkey: false,
            user: "",
            code: "",
            username: "",
            userphone: "",
            userregstate: "",
            location : "",
            password:"",
            contact:""
            

        }
    }


    singup() {

        fetch("http://169.254.148.6/herbappApis/products.php", {
            method: "POST",


            headers: {
                "Accept": "aplication/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "key": this.props.navigation.state.params.herbalistdata.id,
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
    signupHerbalist = () =>{
        
        fetch("http://169.254.148.6/herbappApis/registerHerbalist.php", {
            method: "POST",


            headers: {
                "Accept": "aplication/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                'username': this.state.username,
                'location': this.state.location,
                'contact': this.state.contact,
                'password': this.state.password,

            })

        })
            .then((response) => response.json())
            .then((res) => {
              console.log(res)
                if (res === "exists") {
                    this.setState({ userregstate: "phone number registered" })

                }
                if (res === "done") {

                }
                if (res === "nop") {
                    this.setState({ userregstate: "some thing went wrong, check your connection" })


                }



            }).catch((error) => {
                this.setState({ userregstate: "some thing went wrong, check your connection" })
                console.log(error)
            });


    }

    loginUserHerbs = () => {

        fetch("http://169.254.148.6/herbappApis/registerUser.php", {
            method: "POST",


            headers: {
                "Accept": "aplication/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                'username': this.state.username,
                'userphone': this.state.userphone
            })

        })
            .then((response) => response.json())
            .then((res) => {
                console.log(res)
                if (res === "exists") {
                    this.setState({ userregstate: "phone number registered" })

                }
                if (res === "done") {

                }
                if (res === "nop") {
                    this.setState({ userregstate: "some thing went wrong, check your connection" })


                }



            }).catch((error) => {
                this.setState({ userregstate: "some thing went wrong, check your connection" })
                console.log(error)
            });


    }

    componentWillMount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);

        console.log(this.props.navigation.state.params)
        this.setState({ type: this.props.navigation.state.params.type })

    }




    render() {

        if (this.state.type == 'userlogin') {

            return (
                <View style={styles.container}>
                    <Text style={styles.welcome}>HERBAL EDUCATOR</Text>
                    <Image style={styles.imageBox} source={require('./aloe.jpeg')} />
                    <Text style={styles.welcome3}>Please fill to register</Text>
                    <TextInput style={styles.InputData}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder='user name'
                        placeholderTextColor='grey'
                        onChangeText={(c) => this.setState({ username: c })} />

                    <TextInput style={styles.InputData}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder='phone number'
                        placeholderTextColor='grey'
                        onChangeText={(d) => this.setState({ userphone: d })} />

                    <Text style={styles.welcome2}>{this.state.userregstate}</Text>

                    <View style={styles.button}>
                        <TouchableOpacity onPress={this.loginUserHerbs}>
                            <Text style={styles.welcome2}>Sign up</Text>
                        </TouchableOpacity>

                    </View>



                </View>
            );


        } else {

            return (
                <View style={styles.container}>
                    <Text style={styles.welcome}>HERBAL EDUCATOR</Text>
                    <Image style={styles.imageBox} source={require('./aloe.jpeg')} />
                    <Text style={styles.welcome3}>Pleaser fill to register as herbalist</Text>
                    <TextInput style={styles.InputData}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder='Herbalist name'
                        placeholderTextColor='grey'
                        onChangeText={(c) => this.setState({ username: c })} />

                    <TextInput style={styles.InputData}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder='location'
                        placeholderTextColor='grey'
                        onChangeText={(d) => this.setState({ location: d })} />

                    <TextInput style={styles.InputData}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder='contact'
                        placeholderTextColor='grey'
                        onChangeText={(d) => this.setState({ contact: d })} />

                    <TextInput style={styles.InputData}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder='password'
                        placeholderTextColor='grey'
                        onChangeText={(d) => this.setState({ password: d })} />

                    <View style={styles.button}>
                        <TouchableOpacity onPress={this.signupHerbalist}>
                            <Text style={styles.welcome2}>Sign up</Text>
                        </TouchableOpacity>

                    </View>
                    <Text >we'll send you a message with an authentication key</Text>






                </View>
            );
        }

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    container2: {
        justifyContent: 'center',
        flex: 1,
        width: '100%',

        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    welcome: {
        fontSize: 25,
        textAlign: 'center',
        margin: 10,
        color: 'green',
        width: '70%',
        fontWeight: 'bold'
    },
    imageBox: {
        height: '20%',
        width: '30%',
        backgroundColor: "blue",

    },
    buttons: {

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',


    },
    welcome2: {
        fontSize: 16,
        textAlign: 'center',
        margin: 10,
        color: 'white',
        width: '70%'
    },
    InputData: {
        width: '80%',
        height: 40,
        paddingLeft: 15,
        backgroundColor: 'rgba(255,255,255,1)',
        marginTop: 20,
        borderColor: "green",
        borderWidth: 1,
        borderRadius: 0,
        color: 'green',
    },
    welcome3: {
        fontSize: 16,
        textAlign: 'center',
        margin: 10,
        color: 'grey',
        width: '70%'
    },
    button: {

        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        margin: 10,


    },
    buttonx: {

        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        margin: 10,


    },
});
