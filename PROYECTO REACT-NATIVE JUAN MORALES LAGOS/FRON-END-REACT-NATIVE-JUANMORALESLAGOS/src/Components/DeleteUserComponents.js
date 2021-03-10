import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
import { styleAdministrators } from '../Styles/Style.js';

import * as NavigationService from '../Controller/NavigationService';

export default class DeleteUserComponents extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user_name: '',
        }
    }

    handleDeleteUser() {
        var bodyEnviar = JSON.stringify({"user_name": this.state.user_name})
        console.log(bodyEnviar);

        //Validando Campos Vacios
        if (this.state.user_name == "") {

            Alert.alert("Debe Ingresar Nombre De Usuario");
        }
        else {
            //Configuramos la data
            let data = {
                method: 'POST',
                headers: {Accept:'application/json','Content-Type':'application/json'},
                body: bodyEnviar
            }
            fetch('http://192.168.0.7:8300/users/delete', data)
                .then((response) => response.json())
                .then(
                    (responseJson) => 
                    {
                        console.log(responseJson)
                        Alert.alert("Usuario Borrado Con Exito..");
                        NavigationService.navigate('AdministratorsMenu')
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
                    Eliminar USUARIO
                </Text>

                <TextInput style={styleAdministrators.InputAdministrators}
                    underlineColorAndroid="transparent"
                    placeholder="User Name"
                    placeholderTextColor="white"
                    autoCapitalize="none"
                    onChangeText={(text) => this.setState({user_name: text})}
                />

                <TouchableOpacity
                    style={styleAdministrators.buttonAdministrators}
                    onPress={() => this.handleDeleteUser()}
                >
                    <Text style={styleAdministrators.TextButtonAdministrators}>
                        ENVIAR DATOS
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}