import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
import { stylesTramites } from '../Styles/Style.js';

import * as NavigationService from '../Controller/NavigationService';

export default class PowerComponents extends Component {

    //Manejo de Funciones :
    handleDetailOrder_P1(){
        NavigationService.navigate('DetailOrder_P1');
    }
    handleDetailOrder_P2(){
        NavigationService.navigate('DetailOrder_P2');
    }
    handleDetailOrder_P3(){
        NavigationService.navigate('DetailOrder_P3');
    }
    handleDetailOrder_P4(){
        NavigationService.navigate('DetailOrder_P4');
    }
    handleDetailOrder_P5(){
        NavigationService.navigate('DetailOrder_P5');
    }
    handleDetailOrder_P6(){
        NavigationService.navigate('DetailOrder_P6');
    }
    handleDetailOrder_P7(){
        NavigationService.navigate('DetailOrder_P7');
    }
    handleDetailOrder_P8(){
        NavigationService.navigate('DetailOrder_P8');
    }
    render() {
        return (
            <View style={stylesTramites.containerFondo}>
                <Text style={stylesTramites.tituloTramites}>escoja DOCUMENTO</Text>

                <TouchableOpacity 
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_P1()}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Poder Tipo</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_P2()}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Poder Administración Inmueble</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_P3()}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Poder Cobro Finiquito</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_P4()}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Poder Cobro Pension</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_P5()}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Poder Servicio Impuestos Internos</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_P6()}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Poder Posesión Efectiva</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_P7()}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Poder Para Isapres</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_P8()}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Poder Bancos Generales</Text>
                </TouchableOpacity>

            </View>
        );
    }
}