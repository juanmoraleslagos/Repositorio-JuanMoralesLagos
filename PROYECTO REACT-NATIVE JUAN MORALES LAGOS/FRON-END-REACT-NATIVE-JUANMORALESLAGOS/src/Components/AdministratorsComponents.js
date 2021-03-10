import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
import { styles, styleAdministrators } from '../Styles/Style.js';

import * as NavigationService from '../Controller/NavigationService';

export default class AdministratorLoginComponents extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rut_administrators: '',
            password_administrators: '',
        }
    }

    handleLoginAdministrators() {
        var body = JSON.stringify({ "rut_administrators": this.state.rut_administrators, "password_administrators": this.state.password_administrators })
        console.log(body);

        var auxiliar = this.state.rut_administrators;


        console.log(body);

        //Vericando Campos Vacios.
        if (this.state.rut_administrators == "") {
            Alert.alert("Debe Ingresar Rut Administrador");

        }

        else if (this.state.password_administrators == "") {
            Alert.alert("Debe Ingresar Su Clave Secreta");
        }

        else {
            //Definiendo la Data
            let data =
            {
                method: 'POST',
                headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
                body: body
            }
            fetch('http://192.168.0.7:8300/administrators/login', data)
                .then((response) => response.json())
                .then(
                    (responseJson) => {
                        console.log(responseJson)
                        console.log(responseJson.cantAdministrators)
                        console.log(responseJson.rut_administrators)

                        if (responseJson.cantAdministrators == "1" && responseJson.rut_administrators == auxiliar) {

                            Alert.alert("Login Con Exito");
                            NavigationService.navigate('AdministratorsMenu');
                        }
                        else {
                            Alert.alert("Administrador No Registrado");
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
            <View style={styleAdministrators.containerAdministrators}>
                <Text style={styleAdministrators.TituloAdministrators}>
                    Login ADMINISTRADOR
                </Text>

                <TextInput
                    style={styleAdministrators.InputAdministrators}
                    underlineColorAndroid="transparent"
                    placeholder="Rut Administrador"
                    placeholderTextColor="white"
                    autoCapitalize="none"
                    onChangeText={(text) => this.setState({ rut_administrators: text })}
                />

                <TextInput
                    style={styleAdministrators.InputAdministrators}
                    underlineColorAndroid="transparent"
                    placeholder="Clave Secreta"
                    placeholderTextColor="white"
                    autoCapitalize="none"
                    secureTextEntry={true}
                    onChangeText={(text) => this.setState({ password_administrators: text })}
                />

                <TouchableOpacity
                    style={styleAdministrators.buttonAdministrators}
                    onPress={() => this.handleLoginAdministrators()}
                >
                    <Text
                        style={styleAdministrators.TextButtonAdministrators}
                    >
                        Verificar Datos
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
