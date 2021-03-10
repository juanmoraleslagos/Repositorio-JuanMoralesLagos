import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {styles, styleNotary} from '../Styles/Style.js';


import * as NavigationService from '../Controller/NavigationService';

export default class NotarySelectionComponents extends Component {

    render(){
        return(
            <View style={styleNotary.containerNotary}>
                <Text style={styleNotary.TituloNotario}>seleccione FECHA, HORA NOTARIA</Text>
            
            <TouchableOpacity
                style={styleNotary.buttonNotaria}>
                <Text style={styleNotary.TextButton}>Elija  Notaria</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styleNotary.buttonFecha}>
                <Text style={styleNotary.TextButton}>Seleccione Fecha</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styleNotary.buttonHora}>
                <Text style={styleNotary.TextButton}>Escoja Hora</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styleNotary.buttonAgendar}>
                <Text style={styleNotary.TextButton}>Agendar</Text>
            </TouchableOpacity>

            </View>
        );
    }
}