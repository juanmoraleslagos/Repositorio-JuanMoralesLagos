import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
import { styleAdministrators, styleAdministratorsMenu } from '../Styles/Style.js';


import * as NavigationService from '../Controller/NavigationService';

export default class AdministratorsMenuComponents extends Component {


    handleGoDeleteUser() {
        NavigationService.navigate('DeleteUser');
    }

    handleGoListedGeneralOfUsers() {
        NavigationService.navigate('ListedGeneralOfUsers');
    }

    handleGoAddNotario() {
        NavigationService.navigate('AddNotario');
    }

    handleGoDeleteNotario() {
        NavigationService.navigate('DeleteNotary');
    }

    handleGoAddNotarias() {
        NavigationService.navigate('AddNotarias');
    }




    render() {
        return (
            <View style={styleAdministratorsMenu.containerAdministratorsMenu}>

                <Text style={styleAdministratorsMenu.TituloAdministrators}>
                    Opciones DE ADMINISTRADOR
                </Text>

                <TouchableOpacity
                    style={styleAdministratorsMenu.buttonAdministratorsMenu}
                    onPress={() => this.handleGoDeleteUser()}>
                    <Text style={styleAdministratorsMenu.TextButtonAdministratorsMenu}>
                        ELIMINAR USUARIO
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styleAdministratorsMenu.buttonAdministratorsMenu}
                    onPress={() => this.handleGoListedGeneralOfUsers()}>
                    <Text style={styleAdministratorsMenu.TextButtonAdministratorsMenu}>
                        LISTADO GENERAL DE USUARIOS
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styleAdministratorsMenu.buttonAdministratorsMenu}
                    onPress={() => this.handleGoAddNotario()}
                >
                    <Text style={styleAdministratorsMenu.TextButtonAdministratorsMenu}>
                        AGREGAR NOTARIO
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styleAdministratorsMenu.buttonAdministratorsMenu}
                    onPress={() => this.handleGoDeleteNotario()}
                >
                    <Text style={styleAdministratorsMenu.TextButtonAdministratorsMenu}>
                        BORRAR NOTARIO
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styleAdministratorsMenu.buttonAdministratorsMenu}
                    onPress={() => this.handleGoAddNotarias()}
                >
                    <Text style={styleAdministratorsMenu.TextButtonAdministratorsMenu}>
                        AGREGAR NOTARIA
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}