import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { stylesTramites } from '../Styles/Style.js';

import * as NavigationService from '../Controller/NavigationService';

export default class VehiculosComponents extends Component {

    //Creando Funciones:
    handleDetailOrder_V1(){
        NavigationService.navigate("DetailOrder_V1");
    }
    handleDetailOrder_V2(){
        NavigationService.navigate("DetailOrder_V2");
    }
    handleDetailOrder_V3(){
        NavigationService.navigate("DetailOrder_V3");
    }
    handleDetailOrder_V4(){
        NavigationService.navigate("DetailOrder_V4");
    }
    handleDetailOrder_V5(){
        NavigationService.navigate("DetailOrder_V5");
    }
    handleDetailOrder_V6(){
        NavigationService.navigate("DetailOrder_V6");
    }
    handleDetailOrder_V7(){
        NavigationService.navigate("DetailOrder_V7");
    }


    render() {
        return (
            <View style={stylesTramites.containerFondo}>
                <Text style={stylesTramites.tituloTramites}>escoja TIPO DOCUMENTO</Text>

                <TouchableOpacity 
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_V1()}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Contrato de Promesa Compraventa Vehículo</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_V2()}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Poder Retiro Placa Patente</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_V3()}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Poder Solicitar Placa de Vehículos</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_V4()}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Poder Solicitar y Retirar placa Patente</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_V5()}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Poder Alterar Características de Vehículos</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_V6()}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Poder Venta Vehículo</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_V7()}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Poder Venta Vehículo con Claúsula Autocontrato</Text>
                </TouchableOpacity>

            </View>
        );
    }
}