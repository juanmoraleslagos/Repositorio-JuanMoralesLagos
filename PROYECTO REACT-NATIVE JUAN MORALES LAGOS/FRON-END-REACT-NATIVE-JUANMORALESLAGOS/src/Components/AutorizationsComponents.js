import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { stylesTramites } from '../Styles/Style.js';

import * as NavigationService from '../Controller/NavigationService';

export default class AutorizationsComponents extends Component {

    //DECLARANDO FUNCIONES:
    handleDetailOrder() {
        NavigationService.navigate('DetailOrder');
    }
    handleDetailOrder_A2() {
        NavigationService.navigate('DetailOrder_A2');
    }
    handleDetailOrder_A3() {
        NavigationService.navigate('DetailOrder_A3');
    }
    handleDetailOrder_A4() {
        NavigationService.navigate('DetailOrder_A4');
    }
    handleDetailOrder_A5() {
        NavigationService.navigate('DetailOrder_A5');
    }
    handleDetailOrder_A6() {
        NavigationService.navigate('DetailOrder_A6');
    }
    handleDetailOrder_A7() {
        NavigationService.navigate('DetailOrder_A7');
    }
    handleDetailOrder_A8() {
        NavigationService.navigate('DetailOrder_A8');
    }
    handleDetailOrder_A9() {
        NavigationService.navigate('DetailOrder_A9');
    }
    handleDetailOrder_A10() {
        NavigationService.navigate('DetailOrder_A10');
    }
    handleDetailOrder_A11() {
        NavigationService.navigate('DetailOrder_A11');
    }
    handleDetailOrder_A12() {
        NavigationService.navigate('DetailOrder_A12');
    }
    handleDetailOrder_A13() {
        NavigationService.navigate('DetailOrder_A13');
    }    
    handleDetailOrder_A14() {
        NavigationService.navigate('DetailOrder_A14');
    }
    handleDetailOrder_A15() {
        NavigationService.navigate('DetailOrder_A15');
    }
    handleDetailOrder_A16() {
        NavigationService.navigate('DetailOrder_A16');
    }
    handleDetailOrder_A17() {
        NavigationService.navigate('DetailOrder_A17');
    }
    handleDetailOrder_A18() {
        NavigationService.navigate('DetailOrder_A18');
    }

    render() {
        return (

            <View style={stylesTramites.containerFondo}>

                <Text style={stylesTramites.tituloTramites}>escoja DOCUMENTO</Text>


                <TouchableOpacity
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder()}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Un padre / Un menor</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_A2()}
                >
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Un padre / Dos menores</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_A3()}
                >
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Un padre / Tres menores</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_A4()}
                >
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Un padre / Cuatro menores</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_A5()}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Un padre / Un menor</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_A6()}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Un padre / Gira a un Menor</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_A7()}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Un padre / Gira a dos menores</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_A8()}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Ambos Padres / Un Menor</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_A9()}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Ambos Padres / Dos menores</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_A10()}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Ambos Padres / Un menor con Acompañante</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_A11()}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Ambos Padres / Dos menores con acompañante</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_A12()}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Ambos Padres / Tres menores con acompañante</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_A13()}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Ambos Padres / Cuatro menores con acompañante</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_A14()}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Un Padre / A un menor con Acompañante</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_A15()}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Ambos Padres / Un menor con pasaporte ambos padres</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_A16()}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Autorización de Depósito de Cheques</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_A17()}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Autorización para que un menor Trabaje</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={stylesTramites.buttonTramitesMenu}
                    onPress={() => this.handleDetailOrder_A18()}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Autorizacion de uso de Domicilio</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
