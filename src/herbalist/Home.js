import React, { Component } from 'react';
import { AppRegistry, BackHandler, StyleSheet, TextInput, Text, View, Animated, Image, Easing, ListView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

import * as Animatable from 'react-native-animatable';
import DropdownAlert from 'react-native-dropdownalert';
import { ScrollView } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-crop-picker';

import RNFetchBlob from 'rn-fetch-blob'


export default class Home extends Component {
    static navigationOptions = {
        header: null,
    }
    constructor(props) {
        super(props)

        this.state = {
            align: "center",
            profileImage: "",
            herbalistdata: {}

        }
    }

    imageUpload = () => {

    }

    handleImage = () => {
        RNFetchBlob.fetch('POST', 'http://169.254.148.6/herbappApis/herbalistuserImage.php', {

            'Content-Type': 'multipart/form-data',
        }, [

                { name: 'image', filename: 'avatar-foo.png', type: 'image/foo', data: RNFetchBlob.wrap(this.state.profileImage) },
                // elements without property `filename` will be sent as plain text
                { name: 'user', data: 'user' },
                { name: 'id', data: this.state.herbalistdata.id },

            ]).then((resp) => {

                console.log("upload okay")
                // ...
            }).catch((err) => {
                console.log(err)
            })


    }

    getImage = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {

            this.setState({ profileImage: image.path })
            this.handleImage();




        });
    }

    openCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            this.setState({ profileImage: image.path })
            this.handleImage();
        });
    }

    componentWillMount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
        console.log(this.props.navigation.state.params.username);
        fetch("http://169.254.148.6/herbappApis/FetchHerbalist.php", {
            method: "POST",


            headers: {
                "Accept": "aplication/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "code": 1,
                "pass": this.props.navigation.state.params.username,
            })

        })
            .then((response) => response.json())
            .then((res) => {


                console.log(res);
                this.setState({ herbalistdata: res });




            }).catch((error) => {

                console.log(error)
            });





    }

    render() {


        if (this.state.profileImage != "") {
            return (

                <View style={styles.container}>

                    <View style={{ flex: 1, width: '100%', }}>
                        <View style={{ flexDirection: "row", height: '100%', width: '100%' }}>
                            <View style={{ height: '100%', width: '50%', }}>
                                <View style={{ flex: 1, }}>
                                    <Image source={{ uri: this.state.profileImage }} style={{ height: '90%', width: '100%' }} />
                                </View>

                                <View style={{ flexDirection: 'row', paddingLeft: 140 }}>
                                    <TouchableOpacity onPress={this.getImage}>
                                        <Image style={{ height: 50, width: 50 }} source={require('./imsges.png')} />
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={this.openCamera}>
                                        <Image style={{ height: 50, width: 50 }} source={require('./cam.png')} />
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={{ height: '70%', width: '50%', backgroundColor: 'white' }}>
                                <Text>{this.state.herbalistdata.Name}</Text>
                                <Text>{this.state.herbalistdata.location}</Text>
                                <Text>{this.state.herbalistdata.contact}</Text>
                                <Text>{this.state.herbalistdata.description}</Text>
                            </View>
                        </View>


                    </View>

                    <View style={{ flex: 2, width: '80%', paddingLeft: '5%', paddingRight: '5%', backgroundColor: "white" }}>

                        <ScrollView>
                            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Eigth', { 'herbdata': this.state.herbalistdata.id })}>
                                <View style={{ height: 50, marginTop: 20, flexDirection: "row", width: '100%', backgroundColor: "green" }}>
                                    <View style={{ height: "100%", width: 100 }}>

                                        <Image style={{ height: 50, width: 50 }} source={require('./addD.png')} />
                                    </View>


                                    <View style={{ height: "100%", alignItems: "center", justifyContent: "center" }}>
                                        <Text style={{ fontSize: 18, color: "white" }}> Add product</Text>
                                    </View>

                                </View>
                            </TouchableWithoutFeedback>


                            <View style={{ height: 50, marginTop: 20, flexDirection: "row", width: '100%', backgroundColor: "green" }}>
                                <View style={{ height: "100%", width: 100 }}>
                                    <Image style={{ height: 50, width: 50 }} source={require('./edit.png')} />
                                </View>

                                <View style={{ height: "100%", alignItems: "center", justifyContent: "center" }}>
                                    <Text style={{ fontSize: 18, color: "white" }}> Edit my profile</Text>
                                </View>

                            </View>

                            <View style={{ height: 50, marginTop: 20, flexDirection: "row", width: '100%', backgroundColor: "green" }}>
                                <View style={{ height: "100%", width: 100 }}>
                                    <Image style={{ height: 50, width: 50 }} source={require('./edit.png')} />
                                </View>


                                <View style={{ height: "100%", alignItems: "center", justifyContent: "center" }}>
                                    <Text style={{ fontSize: 18, color: "white" }}> View my products </Text>
                                </View>

                            </View>

                            <View style={{ height: 50, marginTop: 20, flexDirection: "row", width: '100%', backgroundColor: "green" }}>
                                <View style={{ height: "100%", width: 100 }}>
                                    <Image style={{ height: 50, width: 50 }} source={require('./texts.png')} />
                                </View>


                                <View style={{ height: "100%", alignItems: "center", justifyContent: "center" }}>
                                    <Text style={{ fontSize: 18, color: "white" }}> My messages</Text>
                                </View>

                            </View>


                        </ScrollView>
                    </View>





                    <DropdownAlert ref={ref => this.dropdown = ref} />
                </View>

            )
        }
        return (
            <View style={styles.container}>

                <View style={{ flex: 1, width: '100%', }}>
                    <View style={{ flexDirection: "row", height: '100%', width: '100%' }}>
                        <View style={{ height: '100%', width: '50%', }} >
                            <View style={{ flex: 1, }}>
                                <Image source={{ uri: this.state.herbalistdata.Image }} style={{ height: '90%', width: '100%' }} />
                            </View>
                            <View style={{ flexDirection: 'row', paddingLeft: 140 }}>
                                <TouchableOpacity onPress={this.getImage}>
                                    <Image style={{ height: 50, width: 50 }} source={require('./imsges.png')} />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={this.openCamera}>
                                    <Image style={{ height: 50, width: 50 }} source={require('./cam.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ height: '70%', width: '50%', backgroundColor: 'white' }} >
                            <Text>{this.state.herbalistdata.Name}</Text>
                            <Text>{this.state.herbalistdata.location}</Text>
                            <Text>{this.state.herbalistdata.contact}</Text>
                            <Text>{this.state.herbalistdata.description}</Text>
                        </View>
                    </View>


                </View>

                <View style={{ flex: 2, width: '80%', paddingLeft: '5%', paddingRight: '5%', backgroundColor: "white" }}>

                    <ScrollView>
                        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Eigth', { 'herbdata': this.state.herbalistdata.id })}>
                            <View style={{ height: 50, marginTop: 20, flexDirection: "row", width: '100%', backgroundColor: "green" }}>
                                <View style={{ height: "100%", width: 100, paddingLeft: 20, paddingRight: 0 }}>

                                    <Image style={{ height: 50, width: 50 }} source={require('./addD.png')} />
                                </View>


                                <View style={{ height: "100%", justifyContent: "center" }}>
                                    <Text style={{ fontSize: 16, color: "white" }}>Add product</Text>
                                </View>

                            </View>
                        </TouchableWithoutFeedback >

                        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('nineth', { 'herbdata': this.state.herbalistdata.id })}>

                            <View style={{ height: 50, marginTop: 20, flexDirection: "row", width: '100%', backgroundColor: "green" }}>
                                <View style={{ height: "100%", width: 100, paddingLeft: 20 }}>
                                    <Image style={{ height: 50, width: 50 }} source={require('./edit.png')} />
                                </View>
                                <View style={{ height: "100%", alignItems: "center", justifyContent: "center" }}>
                                    <Text style={{ fontSize: 16, color: "white" }}> View my products</Text>
                                </View>

                            </View>

                        </TouchableWithoutFeedback>

                        <View style={{ height: 50, marginTop: 20, flexDirection: "row", width: '100%', backgroundColor: "green" }}>
                            <View style={{ height: "100%", width: 100, paddingLeft: 20 }}>
                                <Image style={{ height: 50, width: 50 }} source={require('./edit.png')} />
                            </View>


                            <View style={{ height: "100%", alignItems: "center", justifyContent: "center" }}>
                                <Text style={{ fontSize: 16, color: "white" }}> Edit my profile</Text>
                            </View>

                        </View>
                        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('tenth', { 'herbdata': this.state.herbalistdata.id })}>
                        <View style={{ height: 50, marginTop: 20, flexDirection: "row", width: '100%', backgroundColor: "green" }}>
                            <View style={{ height: "100%", width: 100, paddingLeft: 20 }}>
                                <Image style={{ height: 50, width: 50 }} source={require('./texts.png')} />
                            </View>


                            <View style={{ height: "100%", alignItems: "center", justifyContent: "center" }}>
                                <Text style={{ fontSize: 16, color: "white" }}> My messages</Text>
                            </View>
                        </View>
                        </TouchableWithoutFeedback>


                    </ScrollView>
                </View>





                <DropdownAlert ref={ref => this.dropdown = ref} />
            </View>
        );
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
        marginTop: 20, flexDirection: 'row',

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
        backgroundColor: 'white',
    },
    Datacard: {
        width: '60%',
        borderBottomColor: "white",
        borderBottomWidth: 1,
    },
    Controllscard: {
        borderBottomColor: "white",
        borderBottomWidth: 1,
        marginLeft: 10,
    },
    InputData: {
        width: '80%',
        height: 40,
        backgroundColor: 'rgba(255,255,255,1)',
        marginTop: 20,
        marginBottom: 20,
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 20,
        color: 'white',
    },
});