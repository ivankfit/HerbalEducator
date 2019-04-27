import React, { Component } from 'react';
import { AppRegistry,BackHandler, StyleSheet, TextInput, Text, View, Animated, Image, Easing, ListView, TouchableOpacity } from 'react-native';


export default class Feedback extends Component {

    constructor(props) {
        super(props)

        this.state = {

            topic: "",
            message: ""

        }
    }

    sendmessage = () => {

        //// send feedback


        fetch("http://169.254.148.6/herbappApis/messages.php", {
            method: "POST",


            headers: {
                "Accept": "aplication/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "code": this.state.topic,
                "pass": this.state.message,
                "id": this.props.navigation.state.params.data.id
            })

        })
            .then((response) => response.json())
            .then((res) => {
                console.log(res)
                if (res == "done") {
                    console.log("login okay");
                    //////this.props.navigation.navigate('Seventh', { username: this.state.username })
                } else {
                    /////this.setState({ error: "user not found" })
                    console.log(res);

                }


            }).catch((error) => {

                console.log(error)
            });




    }
    componentWillMount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }




    render() {
        console.log(this.props.navigation.state.params)
        return (
            <View style={styles.container}>


                <View style={styles.container2}>
                    <Text style={styles.welcome}>Send feedback to: {this.props.navigation.state.params.data.Name}</Text>
                    <TextInput style={styles.InputData}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder='subject'
                        placeholderTextColor='grey'
                        onChangeText={(a) => this.setState({ topic: a })} />

                    <TextInput style={styles.InputData2}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder='message body'
                        placeholderTextColor='grey'
                        numberOfLines={20}
                        multiline={true}
                        onChangeText={(b) => this.setState({ message: b })} />


                    <View style={styles.button}>
                        <TouchableOpacity onPress={this.sendmessage}>
                            <Text style={styles.welcome2}>Send message</Text>
                        </TouchableOpacity>

                    </View>





                </View>




            </View>


        )
    }



}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"

    },
    container2: {
        flex: 1,
        backgroundColor: "grey",
        marginTop: 100,
        marginBottom: 100,
        alignItems: "center",
        justifyContent: "center",
        width: '80%'

    },
    InputData: {
        width: '80%',
        height: 40,
        backgroundColor: 'rgba(255,255,255,1)',
        marginTop: 20,
        borderColor: "green",
        borderWidth: 1,
        borderRadius: 0,
        color: 'green',
    },
    InputData2: {
        width: '80%',
        height: 80,
        backgroundColor: 'rgba(255,255,255,1)',
        marginTop: 20,
        borderColor: "green",
        borderWidth: 1,
        borderRadius: 0,
        color: 'green',
    },

    button: {
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        backgroundColor: 'green',
        margin: 10,
        height: 40
    },

    welcome: {
        color: 'white'
    },
    welcome2: {
        color: 'white'
    },


})