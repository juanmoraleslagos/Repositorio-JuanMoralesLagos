import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
import { stylesTramites } from '../Styles/Style.js';

import * as NavigationService from '../Controller/NavigationService';

export default class ForeignComponents extends Component {

    //Manejo de Funciones :
    handleDetailOrder_F1() {
        NavigationService.navigate('DetailOrder_F1');
    }
    //Manejo de Funciones :
    handleDetailOrder_F2() {
        NavigationService.navigate('DetailOrder_F2');
    }

    render() {
        return (
            <View style={stylesTramites.containerFondo}>
                <Text style={stylesTramites.tituloTramites}>escoja DOCUMENTO</Text>

                <TouchableOpacity 
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_F1()}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Carta de Invitación para un extranjero</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_F2()}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Carta de Invitación para Dos Extranjeros</Text>
                </TouchableOpacity>

            </View>
        );
    }
}