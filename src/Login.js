/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Platform, StyleSheet,BackHandler, Text, View, StatusBar, Image, TouchableOpacity, TextInput } from 'react-native';



export default class Login extends Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this.state = {
            result: "",
            username: "",
            passcode: "",
            phone: "",
            error: ""

        }
    }
    loginSpaceHerbalist = () => {
        this.setState({ result: "herb" });

    }



    loginUserHerbs = () => {

        console.log('navigation');
        //this.props.navigation.navigate('Second')

        fetch("http://169.254.148.6/herbappApis/login.php", {
            method: "POST",


            headers: {
                "Accept": "aplication/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "code": 1,
                "pass": this.state.phone,
            })

        })
            .then((response) => response.json())
            .then((res) => {
                if (res == "done") {
                    console.log("login okay");
                    this.props.navigation.navigate('Second')
                } else {
                    this.setState({ error: "user not found" })
                }

                //console.log(res);




            }).catch((error) => {

                console.log(error)
            });





    }

    loginUserHerbalist = () => {

        console.log("herbalist")
        console.log('navigation');
        //this.props.navigation.navigate('Second')

        fetch("http://169.254.148.6/herbappApis/loginHerbalist.php", {
            method: "POST",


            headers: {
                "Accept": "aplication/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "code": this.state.username,
                "pass": this.state.passcode,
            })

        })
            .then((response) => response.json())
            .then((res) => {
                console.log(res)
                if (res == "done") {
                    console.log("login okay");
                    this.props.navigation.navigate('Seventh', { username: this.state.username })
                } else {
                    this.setState({ error: "user not found" })
                }


            }).catch((error) => {

                console.log(error)
            });

    }


    loginUser = () => {

        this.setState({ result: "user" });

    }
    signUp = () => {

        this.props.navigation.navigate('Fifth', { type: "userlogin" })

    }
    signUpherb = () => {

        this.props.navigation.navigate('Fifth', { type: "" })

    }
    statesdata = () =>{
        this.setState({result: "", username: "", passcode: "", phone: "", error: ""});
     
    
    }

componentDidMount(){
    
        BackHandler.addEventListener('hardwareBackPress', this.statesdata);
     
    
}
statesdata = () =>{
    this.setState({result: "", username: "", passcode: "", phone: "", error: ""});
    return true;

}
componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }




    render() {
        if (this.state.result == "herb") {

            return (
                <View style={styles.container}>
                    <StatusBar hidden />
                    <View style={styles.container2}>
                        <Text style={styles.welcome}>HERBAL EDUCATOR</Text>
                        <Image style={styles.imageBox} source={require('./aloe.jpeg')} />

                        <Text >Login as herbalist</Text>
                        <TextInput style={styles.InputData}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder='email'
                            placeholderTextColor='grey'
                            onChangeText={(a) => this.setState({ username: a })} />

                        <TextInput style={styles.InputData}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder='password'
                            placeholderTextColor='grey'
                            onChangeText={(b) => this.setState({ passcode: b })} />

                        <View style={styles.button}>
                            <TouchableOpacity onPress={this.loginUserHerbalist}>
                                <Text style={styles.welcome2}>Login</Text>
                            </TouchableOpacity>

                        </View>



                    </View>
                    <View style={styles.buttonsLowerOnly}>
                        <Text style={{ color: 'white' }}>Sign up</Text>
                        <TouchableOpacity onPress={this.signUpherb}>
                            <Text style={{ color: 'green' }}> here</Text>
                        </TouchableOpacity>
                    </View>


                </View>
            );

        }

        if (this.state.result == "user") {

            return (
                <View style={styles.container}>
                    <StatusBar hidden />
                    <View style={styles.container2}>
                        <Text style={styles.welcome}>HERBAL EDUCATOR</Text>
                        <Image style={styles.imageBox} source={require('./aloe.jpeg')} />
                        <Text style={styles.welcome3}>Login with your phone number</Text>
                        <TextInput style={styles.InputData}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder='phone number'
                            placeholderTextColor='grey'
                            onChangeText={(c) => this.setState({ phone: c })} />


                        <View style={styles.button}>
                            <TouchableOpacity onPress={this.loginUserHerbs}>
                                <Text style={styles.welcome2}>Login</Text>
                            </TouchableOpacity>


                        </View>

                        <Text style={styles.welcome3}>{this.state.error}</Text>





                    </View>
                    <View style={styles.buttonsLowerOnly}>
                        <Text style={{ color: 'white' }}>Sign up</Text>
                        <TouchableOpacity onPress={this.signUp}>
                            <Text style={{ color: 'green' }}> here</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            );

        }
        return (



            <View style={styles.container}>
                <StatusBar hidden />
                <View style={styles.container2}>
                    <Text style={styles.welcome}>HERBAL EDUCATOR</Text>


                    <Image style={styles.imageBox} source={require('./aloe.jpeg')} />



                    <Text style={styles.welcome3}>know how to prepare,prescribe and identify the right herbs using this app</Text>


                </View>
                <View style={styles.buttons}>


                    <View style={styles.button}>
                        <TouchableOpacity onPress={this.loginUser}>
                            <Text style={styles.welcome2}>Users</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.buttonx}>
                        <TouchableOpacity onPress={this.loginSpaceHerbalist}>
                            <Text style={styles.welcome2}>Herbalist</Text>
                        </TouchableOpacity>

                    </View>

                </View>


            </View>
        );
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

    buttonsLowerOnly: {

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        color: '#fff',
        backgroundColor: 'grey',
        margin: 10,
        height:50



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
