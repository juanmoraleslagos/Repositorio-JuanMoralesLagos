import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
import { stylesTramites } from '../Styles/Style.js';

import * as NavigationService from '../Controller/NavigationService';

export default class ContractComponents extends Component {

    //Manejo de Funciones :
    handleDetailOrder_C1() {
        NavigationService.navigate('DetailOrder_C1');
    }
    handleDetailOrder_C2() {
        NavigationService.navigate('DetailOrder_C2');
    }
    handleDetailOrder_C3() {
        NavigationService.navigate('DetailOrder_C3');
    }
    handleDetailOrder_C4() {
        NavigationService.navigate('DetailOrder_C4');
    }
    handleDetailOrder_C5() {
        NavigationService.navigate('DetailOrder_C5');
    }
    handleDetailOrder_C6() {
        NavigationService.navigate('DetailOrder_C6');
    }
    handleDetailOrder_C7() {
        NavigationService.navigate('DetailOrder_C7');
    }
    handleDetailOrder_C8() {
        NavigationService.navigate('DetailOrder_C8');
    }





    render() {
        return (
            <View style={stylesTramites.containerFondo}>

                <Text style={stylesTramites.tituloTramites}>escoja DOCUMENTO</Text>

                <TouchableOpacity 
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_C1()}>
                    <Text style={stylesTramites.TextButtonContractMenu}>Contrato de Compraventa de Especies</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_C2()}>
                    <Text style={stylesTramites.TextButtonContractMenu}>Contrato de Arrendamiento de Imnueble Plazo Indefinido</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_C3()}>
                    <Text style={stylesTramites.TextButtonContractMenu}>Contrato de Comodato o Préstamo de Uso un Bien Inmueble</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_C4()}>
                    <Text style={stylesTramites.TextButtonContractMenu}>Contrato Mutuo a la Vista</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_C5()}>
                    <Text style={stylesTramites.TextButtonContractMenu}>Contrato de Promesa de Compraventa de Vehículo</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_C6()}>
                    <Text style={stylesTramites.TextButtonContractMenu}>Contrato Arrendamiento Predio Agrícola</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_C7()}>                    
                    <Text style={stylesTramites.TextButtonContractMenu}>Certificado de Residencia</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_C8()}>                
                    <Text style={stylesTramites.TextButtonContractMenu}>SalvoConducto</Text>
                </TouchableOpacity>

            </View>
        );
    }
}