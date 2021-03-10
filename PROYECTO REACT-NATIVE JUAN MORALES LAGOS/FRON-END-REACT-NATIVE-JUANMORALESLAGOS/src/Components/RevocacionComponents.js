import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import { styleRevocacion } from '../Styles/Style.js';

import * as NavigationService from '../Controller/NavigationService';

export default class RevocacionComponents extends Component {
        //Manejo de Funciones.
        handleFollowing() {
                NavigationService.navigate('DetailOrder_RV');
        }

        render() {
                const { navigation } = this.props;
                return (
                        <View style={styleRevocacion.container}>
                                <Text style={styleRevocacion.Titulo}>revocación PODERES</Text>

                                <Text style={styleRevocacion.Message}>Por el presente yo: </Text>

                                <TextInput
                                        style={styleRevocacion.InputRut}
                                        underlineColorAndroid="transparent"
                                        placeholder="12345678-9"
                                        placeholderTextColor="white"
                                        autoCapitalize="none"
                                />

                                <TextInput
                                        style={styleRevocacion.InputPrimerNombre}
                                        underlineColorAndroid="transparent"
                                        placeholder="Primer Nombre "
                                        placeholderTextColor="white"
                                        autoCapitalize="none"
                                />

                                <TextInput
                                        style={styleRevocacion.InputSegundoNombre}
                                        underlineColorAndroid="transparent"
                                        placeholder="Segundo Nombre "
                                        placeholderTextColor="white"
                                        autoCapitalize="none"
                                />

                                <TextInput
                                        style={styleRevocacion.InputApellidoPaterno}
                                        underlineColorAndroid="transparent"
                                        placeholder="Apellido Paterno "
                                        placeholderTextColor="white"
                                        autoCapitalize="none"
                                />

                                <TextInput
                                        style={styleRevocacion.InputApellidoMaterno}
                                        underlineColorAndroid="transparent"
                                        placeholder="Apellido Materno"
                                        placeholderTextColor="white"
                                        autoCapitalize="none"
                                />

                                <Text style={styleRevocacion.TextMessage}>Vengo a Revocar el Poder Otorgado con Fecha :</Text>

                                <TouchableOpacity
                                        style={styleRevocacion.buttonDate}>
                                        <Text style={styleRevocacion.TextMessage}>Seleccione Fecha</Text>
                                </TouchableOpacity>

                                <Text style={styleRevocacion.MessageSecundary}>a :</Text>

                                <TextInput
                                        style={styleRevocacion.InputRut}
                                        underlineColorAndroid="transparent"
                                        placeholder="Rut"
                                        placeholderTextColor="white"
                                        autoCapitalize="none"
                                />

                                <TextInput
                                        style={styleRevocacion.InputPrimerNombre}
                                        underlineColorAndroid="transparent"
                                        placeholder="Primer Nombre "
                                        placeholderTextColor="white"
                                        autoCapitalize="none"
                                />

                                <TextInput
                                        style={styleRevocacion.InputSegundoNombre}
                                        underlineColorAndroid="transparent"
                                        placeholder="Segundo Nombre "
                                        placeholderTextColor="white"
                                        autoCapitalize="none"
                                />

                                <TextInput
                                        style={styleRevocacion.InputApellidoPaterno}
                                        underlineColorAndroid="transparent"
                                        placeholder="Apellido Paterno "
                                        placeholderTextColor="white"
                                        autoCapitalize="none"
                                />

                                <TextInput
                                        style={styleRevocacion.InputApellidoMaterno}
                                        underlineColorAndroid="transparent"
                                        placeholder="Apellido Materno"
                                        placeholderTextColor="white"
                                        autoCapitalize="none"
                                />

                                <Text style={styleRevocacion.MessageThird}>
                                        O Cuaquier Otro Conferido Con Anterioridad a esta Fecha que le Facultaba para :
                </Text>

                                <TextInput
                                        style={styleRevocacion.InputMotivo}
                                        underlineColorAndroid="transparent"
                                        autoCapitalize="none"
                                />

                                <TouchableOpacity
                                        style={styleRevocacion.buttonFollowing}
                                        onPress={() => this.handleFollowing()}>
                                        <Text style={styleRevocacion.TextMessage}>Siguiente</Text>
                                </TouchableOpacity>

                        </View>
                );

        }
}

