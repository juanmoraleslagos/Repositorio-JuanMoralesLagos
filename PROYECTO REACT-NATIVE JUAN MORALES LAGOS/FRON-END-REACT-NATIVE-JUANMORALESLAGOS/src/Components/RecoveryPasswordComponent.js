import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import { styles } from '../Styles/Style.js';

import Mailer from 'react-native-mail';

import * as NavigationService from '../Controller/NavigationService';


export default class RecoveryPasswordComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user_name: '',
            email_user: '',

        }
    }

    handleRecuperarContraseña() {
        var body = JSON.stringify({ "user_name": this.state.user_name, "email_user": this.state.email_user })
        var auxiliar = this.state.user_name;
        var auxiliar_email = this.state.email_user;
        console.log(body);


        if (this.state.user_name == "") {
            Alert.alert("Debe Ingresar Su Nombre de Usuario");
        }

        else if (this.state.email_user == "") {
            Alert.alert("Debe Ingresar Su E-Mail");
        }

        else {
            //Definiendo la data
            let data =
            {
                method: 'POST',
                headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
                body: body
            }
            fetch('http://192.168.0.7:8300/users/searchRecovery', data)
                .then((response) => response.json())
                .then(
                    (responseJson) => {
                        console.log(responseJson)
                        console.log(responseJson.cantUsers)
                        console.log(responseJson.user_name)

                        if (responseJson.cantUsers == "1" && responseJson.user_name == auxiliar) {
                            Alert.alert("Clave Enviada a Su E-Mail");

                        }

                        else {
                            Alert.alert("Usuario No Registrado");
                            NavigationService.navigate('Login');
                        }
                    }
                )
                .catch(
                    (error) => console.error(error)
                )
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.TituloRecovery}>recuperar CLAVE SECRETA</Text>

                <TextInput style={styles.InputUser}
                    underlineColorAndroid="transparent"
                    placeholder="User Name"
                    placeholderTextColor="#f7f1e3"
                    autoCapitalize="none"
                    onChangeText={(text) => this.setState({ user_name: text })}
                />

                <TextInput style={styles.InputEmail}
                    underlineColorAndroid="transparent"
                    placeholder="E-Mail"
                    placeholderTextColor="#f7f1e3"
                    autoCapitalize="none"
                    onChangeText={(text) => this.setState({ email_user: text })}
                />

                <TouchableOpacity
                    style={styles.SubmitButton}
                    onPress={() => this.handleRecuperarContraseña()}>
                    <Text style={styles.SubmitButtonText}>ENVIAR CLAVE</Text>
                </TouchableOpacity>
            </View>

        );
    }
}