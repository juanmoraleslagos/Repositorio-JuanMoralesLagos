import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { stylesTramites } from '../Styles/Style.js';

import * as NavigationService from '../Controller/NavigationService';

export default class LaborComponents extends Component {

    //Manejo de Funciones :
    handleDetailOrder_L1(){
        NavigationService.navigate('DetailOrder_L1');
    }
    handleDetailOrder_L2(){
        NavigationService.navigate('DetailOrder_L2');
    }
    handleDetailOrder_L3(){
        NavigationService.navigate('DetailOrder_L3');
    }
    render() {
        return (
            <View style={stylesTramites.containerFondo}>

                <Text style={stylesTramites.tituloTramites}>escoja DOCUMENTO</Text>

                <TouchableOpacity 
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_L1()}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Finiquito De Trabajo</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_L2()}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Certificado De Vigencia de Contrato de Trabajo</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_L3()}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Renuncia Voluntaria</Text>
                </TouchableOpacity>

            </View>
        );
    }

}