import React, { Component } from 'react';
import { AppRegistry,BackHandler, StyleSheet, KeyboardAvoidingView, TextInput, Text, View, Animated, Image, Easing, ListView, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';
import DropdownAlert from 'react-native-dropdownalert';
import { ScrollView } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-crop-picker';

import RNFetchBlob from 'rn-fetch-blob'

export default class addProduct extends Component {
    static navigationOptions = {
        header: null,
    }
    constructor(props) {
        super(props)

        this.state = {
            align: "center",
            profileImage: "",
            productname:"",
            diseases:"",
            cost:"",
            mime:""

        }
    }

    loginUserHerbs = () =>{

        RNFetchBlob.fetch('POST', 'http://169.254.148.6/herbappApis/addProductImage.php', {

            'Content-Type': 'multipart/form-data',
        }, [

                { name: 'image', filename: 'avatar-foo.png', type: 'image/foo', data: RNFetchBlob.wrap(this.state.profileImage) },
                // elements without property `filename` will be sent as plain text
                { name: 'productname', data: this.state.productname },
                { name: 'diseases', data: this.state.diseases},
                { name: 'cost', data: this.state.cost},
                { name: 'filetype', data: this.state.mime},
                { name: 'id', data: this.props.navigation.state.params.herbdata},
                

            ]).then((resp) => {
                /////data = JSON.parse(resp);

                console.log(resp)
              
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
////console.log(image);
            this.setState({ profileImage: image.path,mime:image.mime })
       //// this.handleImage();




        });
    }

   

    openCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            this.setState({ profileImage: image.path,mime:image.mime })
          
        });
    }

    componentWillMount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    render() {
console.log(this.props.navigation.state.params.herbdata)

        return (
            <View style={styles.container}>

                <View style={{ height: '50%', width: '100%', }}>
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
                <Text style={styles.welcome3}>Fill to add product</Text>
                <KeyboardAvoidingView style={{width:'100%', alignItems:"center",justifyContent:"center"}}>
                <TextInput style={styles.InputData}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='product name'
                    placeholderTextColor='grey'
                    onChangeText={(c) => this.setState({ productname: c })} />

                <TextInput style={styles.InputData}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='diseases'
                    placeholderTextColor='grey'
                    onChangeText={(d) => this.setState({ diseases: d })} />

                

                <TextInput style={styles.InputData}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='cost'
                    placeholderTextColor='grey'
                    onChangeText={(f) => this.setState({ cost: f })} />


                <View style={styles.button}>
                    <TouchableOpacity onPress={this.loginUserHerbs}>
                        <Text style={styles.welcome2}>Add product</Text>
                    </TouchableOpacity>
                     </View>
                </KeyboardAvoidingView>

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
        color: 'black',
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
