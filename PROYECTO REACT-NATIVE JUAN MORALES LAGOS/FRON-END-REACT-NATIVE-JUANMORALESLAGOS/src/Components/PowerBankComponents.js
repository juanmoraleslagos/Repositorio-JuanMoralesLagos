import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
import { stylesTramites } from '../Styles/Style.js';

import * as NavigationService from '../Controller/NavigationService';

export default class PowerBankComponents extends Component {

    //MANEJO DE FUNCIONES
    handleDetailOrder_PB1(){
        NavigationService.navigate('DetailOrder_PB1');
    }
    handleDetailOrder_PB2(){
        NavigationService.navigate('DetailOrder_PB2');
    }
    handleDetailOrder_PB3(){
        NavigationService.navigate('DetailOrder_PB3');
    }
    handleDetailOrder_PB4(){
        NavigationService.navigate('DetailOrder_PB4');
    }

    render() {
        return (
            <View style={stylesTramites.containerFondo}>
                <Text style={stylesTramites.tituloTramites}>escoja DOCUMENTO</Text>

                <TouchableOpacity 
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_PB1()}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Carta Poder A - Cta Corriente</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_PB2()}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Carta Poder B - Para Cobrar Documentos Bancarios</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_PB3()}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Carta Poder C - Cobro Vale Vista</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_PB4()}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Carta Poder D - Cobro Pensiones</Text>
                </TouchableOpacity>

            </View>
        );
    }
}