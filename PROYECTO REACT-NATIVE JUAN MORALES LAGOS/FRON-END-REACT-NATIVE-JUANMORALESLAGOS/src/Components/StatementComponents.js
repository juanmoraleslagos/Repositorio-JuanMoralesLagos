import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
import { stylesTramites } from '../Styles/Style.js';

import * as NavigationService from '../Controller/NavigationService';

export default class PowerComponents extends Component {

    //MANEJO DE FUNCIONES
    handleDetailOrder_D1() {
        NavigationService.navigate('DetailOrder_D1');
    }
    handleDetailOrder_D2() {
        NavigationService.navigate('DetailOrder_D2');
    }
    handleDetailOrder_D3() {
        NavigationService.navigate('DetailOrder_D3');
    }
    handleDetailOrder_D4() {
        NavigationService.navigate('DetailOrder_D4');
    }
    handleDetailOrder_D5() {
        NavigationService.navigate('DetailOrder_D5');
    }
    handleDetailOrder_D6() {
        NavigationService.navigate('DetailOrder_D6');
    }
    handleDetailOrder_D7() {
        NavigationService.navigate('DetailOrder_D7');
    }
    handleDetailOrder_D8() {
        NavigationService.navigate('DetailOrder_D8');
    }
    handleDetailOrder_D9() {
        NavigationService.navigate('DetailOrder_D9');
    }
    handleDetailOrder_D10() {
        NavigationService.navigate('DetailOrder_D10');
    }
    handleDetailOrder_D11() {
        NavigationService.navigate('DetailOrder_D11');
    }
    handleDetailOrder_D12() {
        NavigationService.navigate('DetailOrder_D12');
    }
    handleDetailOrder_D13() {
        NavigationService.navigate('DetailOrder_D13');
    }
    handleDetailOrder_D14() {
        NavigationService.navigate('DetailOrder_D14');
    }
    handleDetailOrder_D15() {
        NavigationService.navigate('DetailOrder_D15');
    }
    handleDetailOrder_D16() {
        NavigationService.navigate('DetailOrder_D16');
    }

    render() {
        return (

            <View style={stylesTramites.containerFondo}>
                <Text style={stylesTramites.tituloTramites}>escoja DOCUMENTO</Text>

                <TouchableOpacity
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_D1()}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Declaración Donante</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_D2()}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Declaración No Donante</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_D3()}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Declaración Extravió Licencia de Conducir</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_D4()}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Declaración Jurada Ley 18.603</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_D5()}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Declaración Jurada de Renuncia</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_D6()}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Declaración de Cesantía</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_D7()}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Declaración de Alcoholes</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_D8()}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Declaración de Soltería sin Testigos</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_D9()}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Declaración de Soltería con Dos Testigos</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_D10()}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Declaración De Expensas de Un Menor</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_D11()}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Declaración De Expensas Dos Menores</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_D12()}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Declaración De Ingresos</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_D13()}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Declaración De Pérdida de Citación a Juzgado</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_D14()}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Declaración De Cheque Protestado</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_D15()}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Declaración No Afiliación a Entidades Públicas</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_D16()}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Declaración Cargo Público</Text>
                </TouchableOpacity>



            </View>
        );
    }
}