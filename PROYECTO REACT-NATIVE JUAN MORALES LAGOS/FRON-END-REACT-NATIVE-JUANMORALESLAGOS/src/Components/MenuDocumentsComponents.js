import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { stylesMenu} from '../Styles/Style.js';

import * as NavigationService from '../Controller/NavigationService';

export default class MenuDocumentsComponents extends React.Component {

    //MANEJO DE FUNCIONES
    handleAutorizations(){
        NavigationService.navigate('Autorizations');
    }

    handleVehiculos(){
        NavigationService.navigate('Vehiculos');
    }

    handlePoderesBancarios(){
        NavigationService.navigate('PowerBank');
    }

    handlePower(){
        NavigationService.navigate('Power');
    }

    handleRevocacion(){
        NavigationService.navigate('DetailOrder_RV');
    }

    handleStatement(){
        NavigationService.navigate('Statement');
    }

    handleContract() {
        NavigationService.navigate('Contract');
    }

    handleLabor(){
        NavigationService.navigate('Labor');
    }

    handleForeign(){
        NavigationService.navigate('Foreign');
    }

    render() {
        return (

            <View style={stylesMenu.containerMenu}>
                <Text style={stylesMenu.tituloMenu}>
                    seleccione TIPO DOCUMENTO
                </Text>

                <TouchableHighlight
                    style={stylesMenu.botonTramite}
                    onPress={() => this.handleAutorizations()}>
                    <Text style={stylesMenu.nombreTramite}>Autorizaciones</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    style={stylesMenu.botonTramite}
                    onPress={() => this.handleVehiculos()}>
                    <Text style={stylesMenu.nombreTramite}>Vehículos</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    style={stylesMenu.botonTramite}
                    onPress={() => this.handlePoderesBancarios()}>
                    <Text style={stylesMenu.nombreTramite}>Poderes    Bancarios</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    style={stylesMenu.botonTramite}
                    onPress={() => this.handlePower()}>
                    <Text style={stylesMenu.nombreTramite}>Poder</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    style={stylesMenu.botonTramite}
                    onPress={() => this.handleRevocacion()}>
                    <Text style={stylesMenu.nombreTramite}>Revocación    Poderes</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    style={stylesMenu.botonTramite}
                    onPress={() => this.handleStatement()}>
                    <Text style={stylesMenu.nombreTramite}>Declaración</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    style={stylesMenu.botonTramite}
                    onPress={() => this.handleContract()}>
                    <Text style={stylesMenu.nombreTramite}>Contrato  y  Otros</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    style={stylesMenu.botonTramite}
                    onPress={() => this.handleLabor()}>
                    <Text style={stylesMenu.nombreTramite}>Laboral</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    style={stylesMenu.botonTramite}
                    onPress={() => this.handleForeign()}>
                    <Text style={stylesMenu.nombreTramite}>Extranjeros</Text>
                </TouchableHighlight>
            </View>
        );
    }
}