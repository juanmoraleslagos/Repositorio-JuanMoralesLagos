import React, { Component } from 'react';
import {View, Text, TouchableHighlight } from 'react-native';
import { stylesMenuUsers } from '../Styles/Style.js';

import * as NavigationService from '../Controller/NavigationService';

export default class MenuUsersComponents extends Component {

    //DECLARAR MANEJOP DE FUNCIONES
    handleMenuDocuments() {
        NavigationService.navigate('MenuDocuments');
    }

    handleScannerQrDocuments() {
        NavigationService.navigate('BarcodeScanner');
    }
    
    render() {
        return (
            <View style={stylesMenuUsers.containerMenuUsers}>
                <Text style={stylesMenuUsers.tituloMenuUsers}>
                    menu USUARIOS
                </Text>


                <TouchableHighlight
                    style={stylesMenuUsers.botonSeleccionarDocumentosMenuUsers}
                    onPress={() => this.handleMenuDocuments()}>
                    <Text style={stylesMenuUsers.selectTextMenuUsers}>Seleccionar Documentos</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    style={stylesMenuUsers.botonScannerQrDocuments}
                    onPress={() => this.handleScannerQrDocuments()}>
                    <Text style={stylesMenuUsers.selectTextMenuUsers}>Scanner Qr</Text>
                </TouchableHighlight>

            </View>
        );
    }
}

