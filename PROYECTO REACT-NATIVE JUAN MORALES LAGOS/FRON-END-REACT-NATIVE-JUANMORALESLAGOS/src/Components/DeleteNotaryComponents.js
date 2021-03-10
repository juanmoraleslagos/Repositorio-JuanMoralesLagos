import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import { styleAdministrators } from '../Styles/Style.js';

import * as NavigationService from '../Controller/NavigationService';

export default class DeleteNotaryComponents extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rut_notary: '',
        }
    }

    handleDeleteNotario() {
        var bodyEnviar = JSON.stringify({"rut_notary": this.state.rut_notary})
        console.log(bodyEnviar);

        //Validando Campos Vacios
        if (this.state.rut_notary == "") {

            Alert.alert("Debe Ingresar Rut Notario");
        }
        else {
            //Configuramos la data
            let data = {
                method: 'POST',
                headers: {Accept:'application/json','Content-Type':'application/json'},
                body: bodyEnviar
            }
            fetch('http://192.168.0.7:8300/notarys/delete', data)
                .then((response) => response.json())
                .then(
                    (responseJson) => 
                    {
                        console.log(responseJson)
                        Alert.alert("Notario Borrado Con Exito..");
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
                    Eliminar NOTARIO
                </Text>

                <TextInput style={styleAdministrators.InputAdministrators}
                    underlineColorAndroid="transparent"
                    placeholder="Rut Notario"
                    placeholderTextColor="white"
                    autoCapitalize="none"
                    onChangeText={(text) => this.setState({rut_notary: text})}
                />

                <TouchableOpacity
                    style={styleAdministrators.buttonAdministrators}
                    onPress={() => this.handleDeleteNotario()}
                >
                    <Text style={styleAdministrators.TextButtonAdministrators}>
                        ENVIAR DATOS
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}